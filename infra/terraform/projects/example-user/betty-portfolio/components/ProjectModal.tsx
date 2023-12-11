import ReactModal from "react-modal";
import styles from './ProjectModal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Image from "next/image";

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

ReactModal.setAppElement('#__next');

interface ModalProps {
    showModal: boolean;
    onRequestClose: () => void;
    selectedProject: Project;
}

export default function ProjectModal({showModal, onRequestClose, selectedProject}: ModalProps) {

    return (
     <ReactModal
      className={styles.modal} 
      isOpen={showModal}
      overlayClassName={styles.overlay}
      >
        <a className={styles.closeButton} onClick={onRequestClose}>
            <span className="material-symbols-outlined">close</span>
        </a>
         <div className={styles.container}>
            <div className={styles.title}>
                <h1>{selectedProject.title}
                <a href={selectedProject.repository}>
                <FontAwesomeIcon icon={faGithub} size="1x"></FontAwesomeIcon></a>
                </h1>
                <p>{selectedProject.summary}</p>
            </div>
            <div className={styles.stack}>
                <h3 >Stack</h3>
                {selectedProject?.stack.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </div>
            <div className={styles.image}>
                <Image
                src={selectedProject.image}
                alt="project-image"
                width={647}
                height={314}
                />
            </div>
             <div className={styles.purpose}>
                <h3>Project Purpose</h3>
                <p>{selectedProject.purpose}</p>
            </div>
            <div className={styles.problems}>
                <h3>Challenges</h3>
                <p>{selectedProject.problems}</p>
            </div>
            <div className={styles.lessons}>
                <h3>What I learned</h3>
                <p>{selectedProject.lessonsLearned}</p>
            </div>
        </div>
   </ReactModal>
    )
    
}