import React, { useState, useEffect } from 'react'; 
import Layout from "@/components/Layout";
import styles from './projects.module.css'
import Modal from '@/components/ProjectModal';
import projectsData from '../public/projectsData';
import Image from 'next/image';

interface Project {
    id: number,
    title: string,
    shortSummary: string,
    summary: string, 
    stack: string[],
    thumbnail:string,
    image: string,
    purpose: string,
    problems: string,
    lessonsLearned: string,
    repository: string
}

export default function Projects() {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedProject, setSelectedProject] = useState<Project>({
        id: 0,
        title: '',
        shortSummary: '',
        summary: '',
        stack: [''],
        thumbnail: "",
        image: '',
        purpose: '',
        problems: '',
        lessonsLearned: '',
        repository: ''
      });

      useEffect(() => {
        const storedProjectId = localStorage.getItem('selectedProjectId');
        if (storedProjectId) {
            const project = projectsData.find(p => p.id === Number(storedProjectId));
            if (project) {
                setSelectedProject(project);
                setShowModal(true);
            }
        }
    }, []);

    const onRequestClose = () => {
        localStorage.removeItem('selectedProjectId');
        setShowModal(false)
    }

    const handleClick = (project: Project) => {
        localStorage.setItem('selectedProjectId', String(project.id));
        setSelectedProject(project);
        setShowModal(true);
    }

    return (
    <Layout>
        <div className={styles.title}>
        <h1>My Projects</h1>
        </div>
        <div className={styles.container}>
            {projectsData.map((project) => (
                   <div className={styles.box} key={project.id}>
                   <div className={styles.imgBox}>
                        <Image
                            src={project.thumbnail}
                            alt='thumbnail'
                            width={280}
                            height={400}
                        />
                   </div>
                   <div className={styles.content}>
                       <h2>{project.title}</h2>
                       <p>{project.shortSummary}</p>
                       <a className={styles.readMore} onClick={() => handleClick(project)}>Read More</a>
                       {project.title === "Modern Life Dating University" ? 
                       <a className={styles.repository} href="https://www.modernlifedatingacademy.com/">Website</a> :
                       project.title === "RealFemSapien" ? 
                       <a className={styles.repository} href="https://real-fem-sapien-git-main-bdomingu.vercel.app/">Website</a> :
                       <a className={styles.repository} href={project.repository}>Repository</a>
                       }
                       
                  </div>
               </div>
            ))}
        </div>
        <Modal showModal={showModal} onRequestClose={onRequestClose} selectedProject={selectedProject}/>
    </Layout>
    )
  }