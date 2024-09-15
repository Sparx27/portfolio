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


export const es = {
  language: 'es',
  header: {
    prof: 'Desarrollo Web',
    a1: 'Sobre mí',
    a2: 'Proyectos'
  },
  _index: {
    intro: [
      'A principios de 2022, comenzó mi viaje en la programación, cuando me topé con algo que realmente despertó mi interés: un curso en línea titulado "JavaScript Algorithms and Data Structures" en freecodecamp.com. Desde entonces, he estado avanzando continuamente en mis conocimientos en desarrollo web, a través de la lectura y puesta en práctica de documentación y participando en cursos en línea de distintas plataformas. Además, <span class="text-decoration-underline">comencé mis estudios formales en la Universidad ORT Uruguay en agosto de 2023, cursando la carrera "Analista en Tecnologías de la Información"</span>, completando primer año con una escolaridad de 99/100. Actualmente continúo expandiendo de forma independiente mis conocimientos en programación mientras curso mis estudios formales.',
      'Tengo 29 años, nací en los Estados Unidos y vine a vivir a Uruguay cuando era niño. Ahora resido en Montevideo. Mis intereses son diversos e incluyen el deporte, la filosofía, la psicología y las artes visuales. Soy una persona responsable, me gustan las actividades en grupo y disfruto mucho de aprender tecnologías y técnicas nuevas para programar.'
    ],
    portfolio: 'Hecho con gusto en Remix Run. Código del Portfolio:'
  },
  projects: {
    t1: 'Proyectos',
    linksTxt: 'Links de mi código:',
    watchTxt: 'Ver Vídeo',
    projectsList: [
      {
        title: 'Preguntame.com',
        description: 'Proyecto Full-stack desarrollado con SQL Server, ASP.NET 8 Web API en el backend y React en el frontend. Es una red social que permite a los usuarios registrarse, personalizar sus perfiles (incluyendo la opción de agregar o cambiar su foto de perfil) e interactuar mediante el envío de preguntas. Estas pueden ser enviadas desde un usuario hacia otro usuario, o de forma anónima, y las respuestas se muestran en el perfil del usuario receptor. Estas respuestas a su vez pueden recibir "likes" de otros usuarios, y la aplicación cuenta con una función de búsqueda para encontrar y acceder a los perfiles de otros miembros.\nLa gestión de sesiones se realiza mediante JSON Web Tokens (JWT) utilizando cookies HttpOnly, asegurando que el token no sea accesible desde el frontend y las contraseñas se encriptan antes de ser almacenadas en la base de datos. Además, implementé yo mismo el enrutado de la Single Page Application (SPA) en el frontend, incluyendo rutas protegidas, rutas con parámetros de consulta (queries) y funcionalidades adicionales, como la recepción de notificaciones mientras el usuario navega por la aplicación.\nEl diseño es completamente responsivo, y en su mayoría está realizado con CSS propio, aunque integré algunas clases de Bootstrap para agilizar el desarrollo.',
        image: preguntameapp,
        imageMuestras: [preguntameapp1, preguntameapp2, preguntameapp3, preguntameapp4],
        url: 'preguntameApp',
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/q9FdjuWJxJI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        stack: ['SQL Server', 'C#', 'React', 'Bootstrap'],
        backend: 'https://github.com/Sparx27/PreguntameAPIv3',
        frontend: 'https://github.com/Sparx27/PreguntameAppv3'
      },
      {
        title: 'MERN Inventory App',
        description: 'Proyecto Full-stack hecho con el stack MERN, Cloudinary para el almacenamiento de imágenes y estilizado con SASS. Esta aplicación tiene varias funciones, como el registro de usuarios (con bcrypt para encriptar contraseñas en la base de datos), la capacidad de cambiar su contraseña y la funcionalidad de restablecimiento de contraseña en caso de que la olviden. También utiliza jsonwebtoken para mantener a los usuarios conectados, y con nodemailer, el usuario puede reportar un error directamente a mi correo electrónico desde la aplicación. Nodemailer también se utiliza para enviar el token de restablecimiento de contraseña si un usuario lo olvida. Los usuarios pueden agregar artículos a su inventario con imágenes, descripciones, cantidades, precios y una descripción utilizando un editor de texto enriquecido.',
        image: MERNInventoryApp,
        url: 'merninventoryapp',
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/h00AKmTtspk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        stack: ['Node.js', 'MongoDB', 'React', 'SASS'],
        backend: 'https://github.com/Sparx27/sparx-mern-inventory-app-backend',
        frontend: 'https://github.com/Sparx27/sparx-mern-inventory-app-frontend'
      },
      {
        title: 'GuitarLA',
        description: 'Utilizando el CMS Headless Strapi para el backend, PostgreSQL creado en render.com para la base de datos, Cloudinary para el almacenamiento en la nube de imágenes y Remix Run para el frontend, GuitarLA es un proyecto de tienda en línea de guitarras. Es un proyecto centrado en el Front-End, la información (texto e imágenes) de las guitarras en venta y los posts del blog, proviene de requests hechas a la API creada con Strapi.',
        image: guitarla,
        url: 'guitarla',
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Zk7-EKWSJtA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        stack: ['Strapi', 'PostgreSQL', 'Remix Run'],
        backend: 'https://github.com/Sparx27/guitarla-strapi-bckend',
        frontend: 'https://github.com/Sparx27/guitarla-frend'
      },
      {
        title: 'MERN Public Notes App',
        description: 'Este fue mi primer proyecto full-stack realizado, utilizando el stack MERN y estilizado con Bootstrap + CSS. Es un CRUD básico el cual mediante manejo de sesión de usuario con JSON Web Token y bcrypt para el encriptado de contraseñas, un usuario logueado puede ver, crear, editar y borrar notas. Las notas son compartidas entre todos los usuarios en una misma sección de la aplicación. Un agradecimiento especial a midudev y Full Stack Open por el curso en línea.',
        image: MERNNotesApp,
        url: 'mernnotesapp',
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/KqAzVxT402s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        stack: ['Node.js', 'MongoDB', 'React', 'Bootstrap'],
        monorepo: 'https://github.com/Sparx27/sparx-mern-notes-app'
      },
      {
        title: 'Crypto Quoting System',
        description: 'Hecho con Vite + React y estilizado con Styled-Components. A través de consultas a una API se obtienen los precios de diferentes criptomonedas en distintas monedas.',
        image: cryptoQuotingSystem,
        url: 'https://vite-react-styled-components-crypto-quoting-system.vercel.app/'
      },
      {
        title: 'Expense Management App',
        description: 'Creado con Vite + React y estilizado con CSS, mediante el uso de Local Storage API para el CRUD y persistir los datos del usuario, esta aplicación permite agregar un presupuesto inicial y luego añadir gastos filtrados por categorías.',
        image: expensePlanner,
        url: 'https://sparx27-expenses-control.vercel.app'
      },
      {
        title: 'Drinks Finder',
        description: 'Proyecto generado con Vite + React y estilizado con Styled-Components. A través de consultas a una API, se pueden buscar recetas para tragos a través de un ingrediente o por categorías.',
        image: drinkFinder,
        url: 'https://sparx-react-drinkfinder.vercel.app/'
      },
      {
        title: 'Weather App',
        description: 'Aplicación hecha con Vite + React y estilizada con CSS. Mediante la selección de una ciudad y un país, a través de una consulta hacía una API, se obtienen datos sobre el clima actual del lugar.',
        image: weatherApp,
        url: 'https://sparx27-weatherapp.vercel.app/'
      },
      {
        title: 'WebX Agency',
        description: 'Sitio creado con HTML + CSS (responsive) con la finalidad de implementar algunas animaciones básicas y un buen estructurado del HTML.',
        image: webx,
        url: 'https://sparx-webx.netlify.app'
      },
      {
        title: 'DOM BOM Crafs',
        description: 'Este proyecto fue creado para estudiar y aprender sobre el DOM y el BOM (Browser Object Model) y manipularlos usando JavaScript.',
        image: dombomCrafts,
        url: 'https://dombom-crafts.netlify.app/'
      },
      {
        title: 'Easybank',
        description: 'Sitio estático creado para mejorar mi estructura de CSS y HTML.',
        image: easybank,
        url: 'https://sparx-easybank.netlify.app'
      },
      {
        title: 'Mate Page',
        description: 'Esta fue mi primera página completa construida con HTML y CSS.',
        image: mimate,
        url: 'https://mi-mate-uy.netlify.app/'
      }
    ]
  }
}