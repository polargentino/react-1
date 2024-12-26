import React from "react";

import { Box, Typography } from "@mui/material";

import "./About.css";



function About() {

return (

<Box

sx={{

display: "flex",

flexDirection: "column",

alignItems: "flex-start",

justifyContent: "center",

padding: 3,

height: "140vh", // Ocupa la mitad de la pantalla

backgroundColor: "#000000", // Fondo negro puro

color: "#00FF00", // Verde brillante

fontFamily: "'VTV-323'", // Fuente retro estilo consola

textAlign: "left", // Texto alineado a la izquierda para simular un prompt

}}

>

{/* Simulación de prompt */}

<Typography

variant="body1"

sx={{

fontSize: { xs: "1.1rem", sm: "1.2rem" },

marginBottom: "15px",

whiteSpace: "pre-wrap", // Conserva los saltos de línea

}}

>

{`> Bienvenido al curso de diseño web!`}

</Typography>

<Typography

variant="body1"

sx={{

fontSize: { xs: "1rem", sm: "1.1rem" },

lineHeight: 1.0,

whiteSpace: "pre-wrap",

}}

>

{`Este curso abarca:

$- HTML: Aprende a estructurar páginas web.

$- CSS: Crea diseños profesionales y responsivos.

$- JavaScript: Agrega interactividad a tus proyectos.



Alcance profesional:

$- Desarrollo Frontend.

$- Diseño de interfaces.

$- Creación de aplicaciones web modernas.



Preguntas frecuentes:

1. ¿Es necesario tener experiencia previa? -> No.

2. ¿Qué herramientas se utilizan? -> VS Code, navegadores modernos y librerías de UI.`}

</Typography>

{/* Simulación de un prompt interactivo */}

<Typography

variant="body1"

sx={{

fontSize: { xs: "1.1rem", sm: "1.2rem" },

marginTop: "10px",

whiteSpace: "pre-wrap",

}}

>

{`> Listo para comenzar? Escribe "yes" para continuar...
*Un lienzo digital, sin brocha ni pincel,
con código y diseño, un mundo virtual que crece.

De píxeles y formas, una estética sutil,
la web se despliega, bella y eficiente, que florece.

Con clicks y scrolls, la magia se revela,
un viaje de imágenes, que el alma conmueve y revela.

En cada detalle, una función, una idea,
el diseño web, un arte que guía y que crea.`}

</Typography>

</Box>

);

}



export default About;

