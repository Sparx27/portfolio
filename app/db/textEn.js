import mimate from '../../public/images/projects/mimate.png'
import dombomCrafts from '../../public/images/projects/DOMBOM-crafts.png'
import guitarla from '../../public/images/projects/guitarla.png'
import easybank from '../../public/images/projects/easybank.png'
import webx from '../../public/images/projects/webx.png'
import MERNInventoryApp from '../../public/images/projects/MERN-inventory-app.png'
import cryptoQuotingSystem from '../../public/images/projects/crypto-quoting-system.png'
import expensePlanner from '../../public/images/projects/expense-planner.png'
import MERNNotesApp from '../../public/images/projects/MERN-notes-app.png'
import drinkFinder from '../../public/images/projects/drink-finder.png'
import weatherApp from '../../public/images/projects/weather-app.png'
import preguntameapp from '../../public/images/projects/preguntameapp.png'
import preguntameapp1 from '../../public/images/projects/preguntameapp1.png'
import preguntameapp2 from '../../public/images/projects/preguntameapp2.png'
import preguntameapp3 from '../../public/images/projects/preguntameapp3.png'
import preguntameapp4 from '../../public/images/projects/preguntameapp4.png'

export const en = {
  language: 'en',
  header: {
    prof: 'Web Developer',
    a1: 'About',
    a2: 'Projects'
  },
  _index: {
    intro: [
      'At the beginning of 2022, my journey in programming began when I stumbled upon something that truly sparked my interest: an online course titled "JavaScript Algorithms and Data Structures" on freecodecamp.com. Since then, I have been continuously advancing my knowledge in web development through reading and practicing documentation and learning in online courses from various platforms. Additionally, <span class="text-decoration-underline">I began my formal studies at ORT University Uruguay in August 2023, pursuing a degree in "Information Technology Analyst"</span>. I continue to independently expand my programming knowledge while pursuing my formal studies.',
      'I was born in the United States and moved to Uruguay when I was a child. I now live in Montevideo. My interests are diverse and include sports, philosophy, psychology, and visual arts. I am a responsible person and I greatly enjoy the process of improving day by day by practicing and learning new techniques, concepts, and technologies to become a better developer.'
    ],
    portfolio: 'Made with dedication on Remix Run. Portfolio code:'
  },
  projects: {
    t1: 'Projects',
    linksTxt: 'Feel free to check out the code:',
    watchTxt: 'Watch More',
    goToPage: 'Project Link',
    projectsList: [
      {
        title: 'Preguntame.com',
        description: 'Social network that allows users to register, customize their profiles (including the option to add or change their profile picture) and interact by sending questions or following other users. Questions can be sent from one user to another or anonymously, and the answers are displayed on the receiving user\'s profile. These answers can, in turn, receive "likes" from other users and the application includes a search function to find and access other members profiles.<br/><br/><strong>Database:</strong> Implemented with SQL Server. Besides the table design, I created <u>types</u> for certain fields with repeated formats (e.g. "description" (nvarchar(300) not null), which is the standard for Questions and Answers), <u>stored procedures</u>, <u>functions</u> (e.g. counting Likes and Follows made by a user, used in an SP that selects the most active users over the last 7 days), <u>triggers</u> (e.g., when one or more answers are deleted, the associated questions are also deleted) and <u>jobs</u> (e.g. to delete notifications that have been seen by the user and a certain time has passed).<br/><br/><strong>Back-end:</strong> Implemented with a layered architecture (Business Logic, Data Access, Services/Use Cases, Web API, and Shared) with dependency injection. I used Entity Framework for database connection and manipulation, JSON Web Tokens (HttpOnly) for session management and BCrypt for password encryption.<br/><br/><strong>Front-end:</strong> Implemented with Vite + React with fully responsive styling using CSS and some Bootstrap classes to speed up development. I set up the routing for the Single Page Application by myself, including configurations for protected routes, query parameter routes and additional features like receiving notifications while the user navigates the app.',
        image: preguntameapp,
        imageMuestras: [preguntameapp1, preguntameapp2, preguntameapp3, preguntameapp4],
        url: 'preguntameApp',
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/q9FdjuWJxJI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        stack: ['C#', 'SQL Server', 'React', 'Bootstrap'],
        database: 'https://github.com/Sparx27/preguntameDBv2',
        backend: 'https://github.com/Sparx27/PreguntameAPIv4',
        frontend: 'https://github.com/Sparx27/PreguntameAppv3'
      },
      {
        title: 'MERN Inventory App',
        description: 'Inventory management application. Includes several features, such as user registration (with bcrypt for encrypting passwords in the database), the ability to change their password, and password reset functionality in case they forget it. It implements JSON Web Token (JWT) for user sessions, and with nodemailer, users can report an error directly to my email from the application. Nodemailer is also used to send the password reset token if a user forgets it.<br/><br/>Users can add items to their inventory with images, descriptions, quantities, prices, and a description using a rich text editor.',
        image: MERNInventoryApp,
        url: 'merninventoryapp',
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/h00AKmTtspk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        stack: ['Node.js', 'MongoDB', 'React', 'SASS'],
        backend: 'https://github.com/Sparx27/sparx-mern-inventory-app-backend',
        frontend: 'https://github.com/Sparx27/sparx-mern-inventory-app-frontend'
      },
      {
        title: 'GuitarLA',
        description: 'An online guitar store project. The information (text and images) about the guitars for sale and the blog posts come from requests made to the API created with Strapi. It implements a shopping cart.',
        image: guitarla,
        url: 'guitarla',
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Zk7-EKWSJtA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        stack: ['Strapi', 'PostgreSQL', 'Remix Run', 'CSS'],
        backend: 'https://github.com/Sparx27/guitarla-strapi-bckend',
        frontend: 'https://github.com/Sparx27/guitarla-frend'
      },
      {
        title: 'MERN Public Notes App',
        description: 'This was my first full-stack project. It implements CRUD, and through user session management with JSON Web Tokens and bcrypt for password encryption, a logged-in user can view, create, edit, and delete notes. The notes are shared among all users in the same section of the application. Special thanks to midudev and Full Stack Open for the online course.',
        image: MERNNotesApp,
        url: 'mernnotesapp',
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/KqAzVxT402s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        stack: ['Node.js', 'MongoDB', 'React', 'Bootstrap'],
        monorepo: 'https://github.com/Sparx27/sparx-mern-notes-app'
      },
      {
        title: 'Crypto Quoting System',
        description: 'Application to obtain cryptocurrency quotes. Through API queries, it retrieves the prices of different cryptocurrencies in various currencies.',
        image: cryptoQuotingSystem,
        url: 'https://vite-react-styled-components-crypto-quoting-system.vercel.app/',
        stack: ['React', 'Styled-Components']
      },
      {
        title: 'Expense Management App',
        description: 'Application for expense and budget management. Using the Local Storage API for CRUD operations and persisting data, allows adding an initial budget and then adding expenses filtered by categories.',
        image: expensePlanner,
        url: 'https://sparx27-expenses-control.vercel.app',
        stack: ['React', 'CSS']
      },
      {
        title: 'Drinks Finder',
        description: 'Drink recipes application. Through API queries, you can search for drink recipes by ingredient or by categories.',
        image: drinkFinder,
        url: 'https://sparx-react-drinkfinder.vercel.app/',
        stack: ['React', 'Styled-Components']
      },
      {
        title: 'Weather App',
        description: 'Application for weather forecasts. By selecting a city and a country, through queries to an API, data about the current weather of the place is obtained.',
        image: weatherApp,
        url: 'https://sparx27-weatherapp.vercel.app/',
        stack: ['React', 'CSS']
      },
      {
        title: 'WebX Agency',
        description: 'Static site created with some interesting CSS animations',
        image: webx,
        url: 'https://sparx-webx.netlify.app',
        stack: ['HTML', 'CSS']
      },/* 
      {
        title: 'DOM BOM Crafs',
        description: 'This project was created to study and learn about the DOM and BOM (Browser Object Model), as well as how to manipulate them using JavaScript.',
        image: dombomCrafts,
        url: 'https://dombom-crafts.netlify.app/',

      }, */
      /* {
        title: 'Easybank',
        description: 'Static site created to improve my CSS and HTML structure',
        image: easybank,
        url: 'https://sparx-easybank.netlify.app'
      }, */
      /* {
        title: 'Mate Page',
        description: 'This was my very first page built with HTML and CSS.',
        image: mimate,
        url: 'https://mi-mate-uy.netlify.app/'
      } */
    ]
  }
}