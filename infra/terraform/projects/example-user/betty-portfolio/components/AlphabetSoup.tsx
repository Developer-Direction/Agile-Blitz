import { useCallback, useEffect, useState } from "react";
import styles from './AlphabetSoup.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons';



type Message = {
  name: string;
  title: string;
  message: string;
  isQuote: boolean;
};

const AlphabetSoup = () => {
  const [scattered, setScattered] = useState(false);

  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const [originalMessage, setOriginalMessage] = useState<Message>({
    name: "Beatriz Dominguez",
    title: "Software Developer",
    message: "Welcome! Please feel free to explore and do not hesitate to reach out.",
    isQuote: false
  });
  const [message, setMessage] = useState(originalMessage);

  // useEffect(() => {
  //   document.body.style.overflow = 'hidden';
  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, []);

  const generateNewMessage = useCallback(() => {
 const quotes = [
    {
      name: '',
      title: '"The beautiful thing about learning is nobody can take it away from you." -B.B King',
      message: '',
      isQuote: true,
    },
  ];

  // const randomIndex = Math.floor(Math.random() * quotes.length); */ In case i decide to add more quotes */
  const newMessage = quotes[0];
  setMessage(newMessage);

  if (message.isQuote) {
    setMessage(originalMessage);
  }
  }, [message, originalMessage] );
  

  useEffect(() => {
    const elements = document.querySelectorAll('.' + styles.letter + ', .' + styles.message) as NodeListOf<HTMLElement>;
    const delay = 50;
    elements.forEach((element, index) => {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      element.style.transform = `translate(${x}px, ${y}px)`;
      setTimeout(() => {
        element.style.transition = `transform 0.5s ease-out`;
        element.style.transform = `translate(-50%, -50%)`;
      }, (index + 1) * delay);
    });

   

  setTimeout(() => {
    elements.forEach(element => {
      element.style.transform = '';
    });
  }, 500);
 
  }, [generateNewMessage]);

  const scatterLetters = () => {
    const elements = document.querySelectorAll('.' + styles.letter + ', .' + styles.message ) as NodeListOf<HTMLElement>;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    elements.forEach((element) => {
      element.style.setProperty('--random-x', '0');
      element.style.setProperty('--random-y', '0');
      const x = Math.random() * viewportWidth;
      const y = Math.random() * viewportHeight;
      const maxX = viewportWidth - element.offsetWidth;
      const maxY = viewportHeight - element.offsetHeight;
      element.style.setProperty('--random-x', `${Math.min(x, maxX) / viewportWidth}`);
      element.style.setProperty('--random-y', `${Math.min(y, maxY) / viewportHeight}`);
      element.classList.add(styles.letterScattered);
    });
  };

  useEffect(() => {
    scatterLetters();
  }, []);

  useEffect(() => {
    if (scattered) {
      scatterLetters();
    }
  }, [scattered]);
 
  
  return (
   
    <>
    <div className={styles.elementContainer}>
        <div className={`${styles.message}`}>
          <h2 className={styles.name}>{message.name}</h2>
          <h2 className={styles.title}>{message.title}</h2>
          <h2 className={styles.welcome}>{message.message}</h2>
        </div>
        <a
        className={styles.button}
         onClick={() => {
          generateNewMessage();
          scatterLetters();
        }}> <FontAwesomeIcon icon={faRightLong} size="2x"></FontAwesomeIcon>
        </a>
        <ul className={styles.elementList}>
          {letters.map(letter => (
            <li key={`letter-${letter}`} className={`${styles.letter}`}>{letter}</li>
          ))}
        </ul>


      </div>
      </>
  );

};

export default AlphabetSoup;


