import Layout from "@/components/Layout";
import styles from './about.module.css';
import Image from 'next/image';


export default function About() {
    return (
        <Layout>
        <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
            <Image
                src='/images/betty.jpg'
                alt="profile-picture"
                width={300}
                height={500}
            />
            <div className={styles.overlay}>Beatriz Dominguez</div>
        </div>
        <div className={styles.textContainer}>
            <h1>About Me</h1>
            <p>Hi, I&apos;m Betty, a software developer with a background in Mathematics and Education.
            My interest in software development began in college while pursuing my degree in mathematics. 
            I took a programming class and I enjoyed the fact that I could build something and see it 
            right away. However, I was set on teaching young minds. 
            <br></br>
            <br></br>
            I have always been passionate about teaching people how to problem solve and use their critical thinking skills. 
            During the pandemic, I decided to learn to program on the side. I fell in love with the endless possibilities.
            I love that with programming, you are constantly learning and always challenged and in that sense, 
            it reminds me of mathematics. I also enjoy that I can build things for people to use. I realized that with programming, 
            I can use my skills to continue to help people.
            <br></br>
            <br></br>
            On my spare time, I enjoy sipping on a delightful cup of coffee, cuddling with my pups, and staying fit and healthy.
            </p>     
            
        </div>
        
        </div>
         
        </Layout>
    )
  }