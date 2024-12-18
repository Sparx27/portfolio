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
    /*
    Luego en 2023, donde ya tenía claro que realmente me gustaba esta profesión, decidí comenzar la carrera Analista en Tecnologías de la Información en la Universidad ORT.
    */
    intro: [
      'A mediados de 2022, di mis primeros pasos en el mundo de la programación cuando me topé con un curso llamado "JavaScript Algorithms and Data Structures", en freecodecamp.com. Desde entonces he estado avanzando continuamente en mis conocimientos en desarrollo web, aprendiendo a través de documentación y participando en distintos cursos en línea. En 2023, teniendo claro que realmente me gustaba esta profesión, <span class="text-decoration-underline">comencé mis estudios formales en la Universidad ORT Uruguay, cursando la carrera "Analista en Tecnologías de la Información"</span>.<br /><br />Desde mis comienzos hasta hoy, siempre intento llevar a la práctica lo que voy aprendiendo, por lo que he trabajo en distintos proyectos personales para que además de consolidar lo que voy aprendiendo, ir desarrollando una mejor lógica y también una mayor creatividad para resolver problemas.'
    ],
    portfolio: 'Hecho con dedicación en Remix Run. Código del Portfolio:'
  },
  projects: {
    t1: 'Proyectos',
    linksTxt: 'Links a mi código:',
    watchTxt: 'Ver Más',
    goToPage: 'Link al Proyecto',
    projectsList: [
      {
        title: 'Preguntame.com (Beta)',
        description: 'Red social que permite a los usuarios registrarse, personalizar sus perfiles (incluyendo la opción de agregar o cambiar su foto de perfil) e interactuar mediante el envío de preguntas o seguimiento entre usuarios. Las preguntas pueden ser enviadas desde un usuario hacia otro usuario, o de forma anónima, y las respuestas se muestran en el perfil del usuario receptor. Estas respuestas a su vez pueden recibir "likes" de otros usuarios, y la aplicación cuenta con una función de búsqueda para encontrar y acceder a los perfiles de otros miembros.<br/><br/><strong>Base de datos: </strong>Implementada con SQL Server, además del diseño de las tablas, cree <u>types</u> para algunos campos que repiten su formato (ej. "descripcion" (nvarchar(300) not null) que es el estándar para Preguntas y Respuestas), <u>procedimientos almacenados</u>, <u>funciones</u> (ej. contar MeGustas y Seguimientos hechos por un Usuario, lo cual se utilizada en un SP que selecciona a los Usuarios más activos en los últimos 7 días.), <u>triggers</u> (ej. cuando se elimina una o varias respuestas, se eliminan también las preguntas asociadas), <u>jobs</u> (ej. para eliminar notificaciones que hayan sido vistas por el usuario y haya pasado un cierto tiempo).<br/><br/><strong>Back-end: </strong>Implementado con una arquitectura en capas (Logica de Negocio, Acceso a Datos, Servicios/Casos de Uso, Web API y Compartidos) con inyección de dependencias. Utilicé Entity Framework para la conección y manipulación de la base de datos, JSON Web Tokens (HttpOnly) para el manejo de sesión de usuarios y BCrypt para el encriptado de las contraseñas.<br/><br/><strong>Front-end: </strong>Implementado con Vite + React y con un estilizado totalmente responsivo con CSS y algunas clases de Bootstrap para agilizar el desarrollo. Yo mismo hice el enrutado para la Single Page Application, incluyendo las configuraciones para rutas protegidas, rutas con parámetros de consulta (queries) y funcionalidades adicionales como la recepción de notificaciones mientras el usuario navega por la aplicación.',
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
        description: 'Aplicación de gestión de inventarios. Cuenta con varias funcionalidades, como el registro de usuarios (con bcrypt para encriptar contraseñas en la base de datos), la capacidad de cambiar su contraseña y la funcionalidad de restablecimiento de contraseña en caso de que la olviden. Implementa JSON Web Token (JWT) para la sesión usuarios, y con nodemailer, el usuario puede reportar un error directamente a mi correo electrónico desde la aplicación. Nodemailer también se utiliza para enviar el token de restablecimiento de contraseña si un usuario lo olvida.<br/><br/>Los usuarios pueden agregar artículos a su inventario con imágenes, descripciones, cantidades, precios y una descripción utilizando un editor de texto enriquecido.',
        image: MERNInventoryApp,
        url: 'merninventoryapp',
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/h00AKmTtspk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        stack: ['Node.js', 'MongoDB', 'React', 'SASS'],
        backend: 'https://github.com/Sparx27/sparx-mern-inventory-app-backend',
        frontend: 'https://github.com/Sparx27/sparx-mern-inventory-app-frontend'
      },
      {
        title: 'GuitarLA',
        description: 'Tienda en línea de guitarras. La información (texto e imágenes) de las guitarras en venta y los posts del blog, proviene de requests hechas a la API creada con Strapi. Implementa un carrito de compras.',
        image: guitarla,
        url: 'guitarla',
        video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/Zk7-EKWSJtA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
        stack: ['Strapi', 'PostgreSQL', 'Remix Run', 'CSS'],
        backend: 'https://github.com/Sparx27/guitarla-strapi-bckend',
        frontend: 'https://github.com/Sparx27/guitarla-frend'
      },
      {
        title: 'MERN Public Notes App',
        description: 'Este fue mi primer proyecto full-stack. Implementa un CRUD, el cual mediante manejo de sesión de usuario con JSON Web Token (JWT) y bcrypt para el encriptado de contraseñas, un usuario logueado puede ver, crear, editar y borrar notas. Las notas son compartidas entre todos los usuarios en una misma sección de la aplicación. Un agradecimiento especial a midudev y Full Stack Open por el curso en línea.',
        image: MERNNotesApp,
        url: 'mernnotesapp',
        video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/KqAzVxT402s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        stack: ['Node.js', 'MongoDB', 'React', 'Bootstrap'],
        monorepo: 'https://github.com/Sparx27/sparx-mern-notes-app'
      },
      {
        title: 'Crypto Quoting System',
        description: 'Aplicación para obtener cotizaciones de criptomonedas. A través de consultas a una API ,se obtienen los precios de diferentes criptomonedas en distintas monedas.',
        image: cryptoQuotingSystem,
        url: 'https://vite-react-styled-components-crypto-quoting-system.vercel.app/',
        stack: ['React', 'Styled-Components']
      },
      {
        title: 'Expense Management App',
        description: 'Aplicación para gestión de gastos y presupuestos. Mediante el uso de Local Storage API para el CRUD y persistencia de datos, esta aplicación permite agregar un presupuesto inicial y luego añadir gastos filtrados por categorías.',
        image: expensePlanner,
        url: 'https://sparx27-expenses-control.vercel.app',
        stack: ['React', 'CSS']
      },
      {
        title: 'Drinks Finder',
        description: 'Aplicación de recetas para tragos. A través de consultas a una API, se pueden buscar recetas para tragos a través de un ingrediente o por categorías.',
        image: drinkFinder,
        url: 'https://sparx-react-drinkfinder.vercel.app/',
        stack: ['React', 'Styled-Components']
      },
      {
        title: 'Weather App',
        description: 'Aplicación para pronósticos del clima. Mediante la selección de una ciudad y un país, y a través de consultas hacía una API, se obtienen datos sobre el clima actual del lugar.',
        image: weatherApp,
        url: 'https://sparx27-weatherapp.vercel.app/',
        stack: ['React', 'CSS']
      },
      {
        title: 'WebX Agency',
        description: 'Sitio estático con algunas animaciones interesantes hechas en CSS.',
        image: webx,
        url: 'https://sparx-webx.netlify.app',
        stack: ['HTML', 'CSS']
      }
      /* {
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
      } */
    ]
  }
}