import './App.css';
import Navbar from './Components/Navbar';

function App() {
  return (
    <html lang="es-MX">
            <head>
                // SEO
                <meta name="author" lang="es-MX" content="Omar"/> 
                <meta name="title" lang="es-MX" content="MXTramiteDirecto"/>
                <meta name="description" lang="es-MX" content=""/>
                <meta name="keywords" lang="es-MX" content=""/>

                // COMPATIBILIDAD
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta http-equiv="X-UA-Compatible" content="chrome=1"/>
                <meta http-equiv="X-UA-Compatible" content="firefox=1"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

                // LINKS
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
    
                // SCRIPTS
                <script src="https://code.jquery.com/jquery-3.7.0.slim.min.js"></script>
                <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>        

            </head>
            <body>
                <Navbar></Navbar>
            </body>
        </html>
  );
}

export default App;
