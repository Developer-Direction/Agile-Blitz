const projectsData = [
    {
      id: 1,
      title: "RealFemSapien",
      shortSummary: "Responsive personalized website created with React. The website offers a captivating introduction and serves as a central hub \
                for audience engagement.",
      summary: "RealFemSapien is a personalized website created for an inspiring client which perfectly captures her essence and facilitates her online presence. \
                The website serves as a hub for her online activities, including her Youtube Channel, Instagram content, and Substack newsletter, offering a seamless \
                experience for her audience.",
      stack: ["React"],
      thumbnail: "/images/realfem.png",
      image: "/images/realfemsapien.png",
      purpose: "The purpose of this project was to create an engaging and multifaceted personal website for the client, with the primary objectives of introducing her \
      to her audience, seamlessly integrating her content from YouTube, Instagram, and Substack, and facilitating subscription services through PayPal. The website was \
       designed to serve as a comprehensive platform for building a loyal online community and monetizing her creative work.",
      problems: "While the overall project progressed smoothly, we did encounter some challenges during the deployment phase on HostGator. These obstacles provided an \
      opportunity to demonstrate problem-solving skills and technical expertise. Through diligent troubleshooting and collaboration, we overcame these issues, ensuring \
      a successful launch of the client's personal website on the chosen hosting platform. This experience further honed our ability to navigate technical hurdles and \
      deliver a polished final product.",
      lessonsLearned: "This project taught me some important real-world lessons. First, I discovered that making it easy for users to access content from various platforms \
      is a game-changer. Good communication and a clear project plan were vital for keeping things running smoothly. When we hit a snag during deployment on HostGator, we learned \
      that being adaptable and working together as a team is crucial to overcoming technical hiccups. The world of web development keeps evolving, so we're committed to staying up-to-date \
       and learning new things. Most importantly, we realized that our client's needs and vision should always be at the forefront of our work. These lessons now guide us in every project, \
      and they're a reminder of our passion for delivering customized web solutions.",
      repository: "https://github.com/bdomingu/realfem-sapien"
    }, 

    {
      id: 2,
      title: "Todo App",
      shortSummary: "Full stack Todo App created with React, Express, Node and MongoDB.",
      summary: "This todo app is a simple fullstack React appplication. It allows users to register and create \
                an account, or login if they already have one. Users can then enter their tasks, delete \
                them and mark them as completed.",
      stack: ["React", "Express", "Node", "MongoDB"],
      thumbnail: "/images/task.png",
      image:"/images/todoApp3.png",
      purpose: "This project consisted of two phases. In the first phase, I created the section where tasks can \
                 be entered, deleted, and marked as completed. This involved designing the user interface and \
                 implementing the necessary functionality using React components and state management. \
                 In the second phase, I added authentication functionailty to the app, enabling users to register\
                 and log in with their own accounts. This required integrating a backend server and database with MongoDB and Node, \
                 implementing authentication protocols with JSON Web Tokens, and updating the app to reflect the user's authentication \
                 status. By building this app, I gained valuable experience in developing full-stack web applications, \
                 including designing the data schema, building RESTful APIs, implementing user authentication, and integrating \
                 the front-end and back-end components.",
      problems: "While building this app, I faced a few challenges along the way. One significant challenge was working with MongoDB, \
                as I had only been exposed to SQL databases before. At first, I found the document-oriented nature of MongoDB \
                to be quite different from the relational databases. I spent time learning how to design \
                the data schema by researching and experimenting with MongoDB's query language and data modeling \
                techniques. During the development of the authentication feature, I faced some challenges working with \
                JSON Web Tokens (JWT) One challenge was managing the token expiration and refreshing process to ensure \
                the user's session remained valid. Additionally, I had to implement secure storage and transmission of the \
                JWT. I was able to overcome the challenges through research, experimentation, and online resources.", 
      lessonsLearned: "Developing my todo app provided me with a valuable experience in wokring with a backend and using \
                    MongoDB as a database. I also learned how to authenticate users with Passport.js and Bcrypt, and how \
                    to use JSON web tokens to secure the communication between the client and the server. In addition, I \
                    gained proficiency in writing RESTful APIs that enable the client to interact with the server in a \
                    structured manner.",
      repository: "https://github.com/bdomingu/TodoApp-MongoDB"
    },

    {
      id: 3,
      title: "Movie Search Engine",
      shortSummary: "Movie search engine created with React and Movie DB API",
      summary: "This movie search engine is a simple React application. It allows users to search for any movie or movie \
              category. The user can type in some text and the search engine will display a list of matching movies including \
              the poster image.",
      stack: ["React", "Movie DB API"],
      thumbnail: "/images/movie.png",
      image:"/images/movieSearch.png",
      purpose: "The primary purpose of creating this movie search engine was to continue practicing my skills in fetching data \
              from third-party APIs, as well as to practice implementing responsive design and adding dynamic features like infinte \
              scrolling. I was able to hone my abilities in these areas and gain hands-on experience working with APIs, designing \
              responsive interfaces, and adding interactive features that enhance the user experience.",
      problems: "One of the primary challenges I faced when creating my movie search engine app was working with the third-party API \
               and understanding how to write the appropriate HTTP requests to retrieve the necessary data. The API documentation provided \
               detailed information on the endpoints and query parameters, but I found that it required careful attention to detail and some \
               trial and error to correctly implement the requests. It was also important to ensure that the requests were properly formatted \
               and included any necessary authentication or authorization credentials. Overall, working with the API was a valuable learning \
               experience that helped me to develop my skills in working with external data sources and implementing best practices for API integration.",
      lessonsLearned: "Through building this project, I was able to develop my skills in front-end development, particularly in the areas of \
                   responsive design and infinite scrolling. Through using flexbox, I was able to create a layout that was flexible and adaptable \
                   to different screen sizes and resolutions. Additionally, I implemented infinite scrolling, which allowed the app to load more data \
                   dynamically as the user scrolled through the results. This not only improved the user experience by reducing the need for manual \
                   pagination, but also helped optimize the app's performance by reducing the amount of data that needed to be loaded at once. Overall \
                   this project helped me to improve my skills in front-end development and gain a deeper understanding of the importance of responsive \
                   design and performance optimization.",
      repository: "https://github.com/bdomingu/Movie-Search-Engine"
    },

    {
      id: 4,
      title: "Modern Life Dating University",
      shortSummary: "Responsive and dynamic full stack video library implemented with Next.js, \
                  Typescript, and MySQL.",
      summary: "Modern Life Dating University is a Next.js Application built for an esteemed client to offer his customers \
                a seamless and secure learning experience. I built this project from scratch alongside a designer with Figma, \
                Next.js, MongoDB, and Vimeo's API. The platform provides a responsive and dynamic full-stack video library, ensuring an interactive \
                and engaging user experience.",
      stack: ["Next.js", "React", "Axios", "MongoDB", "JSON Web Tokens", "bcrypt"],
      thumbnail: "/images/mld.png",
      image: "/images/mlduniversity.png",
      purpose: "My mission with this project was to craft a high-tech learning platform that our valued clients' customers \
       could truly connect with. I wanted to provide a secure and hassle-free learning experience. Hand in hand with a designer and using tools like Figma and \
       Next.js, I built this project from the ground up. The heart of this project was to develop a responsive and dynamic video \
       library that would engage users and make learning an enjoyable journey.",
      problems: "One notable challenge during the development of this project was the initial choice of MongoDB as the database solution. While \
      MongoDB is a powerful NoSQL database, I soon realized that it wasn't the most practical or cost-effective choice for deployment on Google Cloud Platform \
      and Cloud Run. Adapting to this challenge, I made the decision to switch to MySQL, a relational database that better suited the deployment requirements. This \
      transition required a significant adjustment in the backend architecture, but it was a necessary step to ensure the project's long-term scalability and \
      cost-efficiency. The ability to pivot and make informed decisions in response to changing project needs was a valuable lesson from this experience.",
      lessonsLearned: "Through this project, I discovered some real-life lessons that I carry with me. I learned that being adaptable is \
       crucial, especially when I had to switch from MongoDB to MySQL. The experience taught me the importance of making well-informed choices right from the start, \
       considering factors like scalability and cost. I also realized that effective communication with clients and the team is the key to overcoming any challenge. \
        It renewed my passion for staying updated with the ever-evolving tech landscape, and, above all, it reinforced my dedication to always being flexible, thinking \
        strategically, and collaborating closely with clients.",
      repository: ""
    },
    
  ];
  
  export default projectsData;
  