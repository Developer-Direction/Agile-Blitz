import { useState } from 'react';
import Link from 'next/link';
import styles from './NavBar.module.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

config.autoAddCss = false;


export default function NavBar() {
    const [showMenu, setShowMenu] = useState(false);

    const handleClick = () => {
      setShowMenu(!showMenu);
    };
  
    return (
      <nav className={styles.nav}>
       
   
        <button className={styles.menuButton} onClick={handleClick}>
          {showMenu ? (
             <div className={styles.hamburgerIcon}>
             <FontAwesomeIcon icon={faX} size='2xl'></FontAwesomeIcon>
           </div>
          ) : (
            <div className={styles.hamburgerIcon}>
            <FontAwesomeIcon icon={faBars} size='2xl'></FontAwesomeIcon>
          </div>
          )}
        
        </button>
        <div className={styles.flex}>
        <div className={styles.logoContainer}>
          <Link href="/">
            <Image 
            src={'/images/initials.png'}
            alt='Logo'
            width={180}
            height={47}
            />
            </Link>
        </div>
        <ul className={showMenu ? styles.menuListActive : styles.menuList}>
      
        <div className={styles.navContainer}>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/projects">Projects</Link></li>          
          <li><Link href="/BeatrizDominguez.pdf" target="_blank">Resume</Link></li> 
          <li>
            <a className={styles.socials} href="https://github.com/bdomingu">
            <FontAwesomeIcon icon={faGithub} size="xl"></FontAwesomeIcon>
            </a>
          </li>
          <li><a className={styles.socials} href="https://www.linkedin.com/in/b-dominguez/"><FontAwesomeIcon icon={faLinkedinIn} size="xl"></FontAwesomeIcon></a>        
          </li>
      </div>
        </ul>
        
      </div>
      
      </nav>
    );
}