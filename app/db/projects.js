import mimate from '../../public/images/projects/mimate.png'
import dombomCrafts from '../../public/images/projects/DOMBOM-crafts.png'
import cssLoginInterface from '../../public/images/projects/CSSLogin-interface.png'
import guitarla from '../../public/images/projects/guitarla.png'
import easybank from '../../public/images/projects/easybank.png'
import sassRestaurant from '../../public/images/projects/sass-restaurant.png'
import MERNTasksManager from '../../public/images/projects/MERN-tasks-manager.png'
import webx from '../../public/images/projects/webx.png'
import MERNInventoryApp from '../../public/images/projects/MERN-inventory-app.png'
import cryptoQuotingSystem from '../../public/images/projects/crypto-quoting-system.png'
import vetPatients from '../../public/images/projects/vet-patients.png'
import expensePlanner from '../../public/images/projects/expense-planner.png'

export const projectsData = [
  {
    title: 'GuitarLA',
    description: 'Using the Headless CMS Strapi for the backend, PostgreSQL created on render.com for the database, Cloudinary for the images, and Remix Run for the frontend, GuitarLA is an online guitar store.',
    image: guitarla,
    url: 'guitarla',
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Zk7-EKWSJtA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
    stack: ['Strapi', 'PostgreSQL', 'Remix Run'],
    backend: 'https://github.com/Sparx27/guitarla-strapi-bckend',
    frontend: 'https://github.com/Sparx27/guitarla-frend'
  },
  {
    title: 'Crypto Quoting System',
    description: 'Using the frontend tool Vite for React, styled with Styled-Components, and powered by the CryptoCompare API, you can get real-time quotes for cryptocurrencies.',
    image: cryptoQuotingSystem,
    url: 'https://vite-react-styled-components-crypto-quoting-system.vercel.app/'
  },
  {
    title: 'WebX Agency',
    description: 'Static site created with some interesting CSS animations',
    image: webx,
    url: 'https://sparx-webx.netlify.app'
  },
  {
    title: 'MERN Inventory App',
    description: 'Full-stack project made with Node.js + Express, MongoDB + Mongoose, Cloudinary for images, and React + Redux. This application has several features, such as user registration (with bcrypt for encrypting passwords in the database), the ability to change their password, and password reset functionality in case they forget it. It also uses jsonwebtoken to maintain users logged in, and with nodemailer, the user can report a bug directly to my email from within the app. Nodemailer is also used to send the token for password reset if a user forgets it. Users can add items to their stock with images, descriptions, quantities, prices, and a description using a rich text editor (ReactQuill).',
    image: MERNInventoryApp,
    url: 'merninventoryapp',
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/h00AKmTtspk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    stack: ['Node.js', 'MongoDB', 'React'],
    backend: 'https://github.com/Sparx27/sparx-mern-inventory-app-backend',
    frontend: 'https://github.com/Sparx27/sparx-mern-inventory-app-frontend'
  },
  {
    title: 'DOM BOM Crafs',
    description: 'This project was created to study and learn about the DOM and BOM, as well as how to manipulate them using JavaScript.',
    image: dombomCrafts,
    url: 'https://dombom-crafts.netlify.app/'
  },
  {
    title: 'Expense Management Application',
    description: 'App created with Vite + React, local storage API, and some interesting libraries, such as react-circular-progressbar and react-swipeable-list. You can add a starting budget and expenses filtered by categories.',
    image: expensePlanner,
    url: 'https://sparx27-expenses-control.vercel.app'
  },
  {
    title: 'MERN Tasks Manager',
    description: 'Simple full-stack app built in a monorepo architecture (both frontend and backend in the same repository) using Node.js + Express on the backend, MongoDB + Mongoose for the database, React on the frontend and styled with SASS using the 7-1 pattern architecture.',
    image: MERNTasksManager,
    url: 'merntasksmanager',
    video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/X6C-7VpEwUo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
    stack: ['Node.js', 'MongoDB', 'React', 'SASS'],
    monorepo: 'https://github.com/Sparx27/MERN-tasks-manager-monorepo/tree/master'
  },
  {
    title: 'SASS Restaurant',
    description: 'Static site styled with SASS using the 7-1 pattern architecture.',
    image: sassRestaurant,
    url: 'https://sparx-sass-restaurant.onrender.com'
  },
  {
    title: 'Mate Page',
    description: 'This was my very first page built with HTML and CSS.',
    image: mimate,
    url: 'https://mi-mate-uy.netlify.app/'
  },
  {
    title: 'CSS Login Interface',
    description: 'A little practice using CSS to style a form withouth JavaScript',
    image: cssLoginInterface,
    url: 'https://sparx-login-interface.netlify.app/'
  },
  {
    title: 'Veterinary Clinic Patients Tracker',
    description: 'Using the frontend tool Vite for React, styled with Tailwind CSS, and utilizing the local storage API, this is an application for tracking veterinary clinic patients.',
    image: vetPatients,
    url: 'https://vite-react-tailwind-vet-patients.vercel.app/'
  },

  {
    title: 'Easybank',
    description: 'Static site created to improve my CSS and HTML structure',
    image: easybank,
    url: 'https://sparx-easybank.netlify.app'
  }
]