// 05/09

/* Hereda las propiedades de EventTarget

    -   open(); - Carga un recurso en el contexto de un nuevo navegador o uno que ya existe
    -   close(); - Cierra el contexto de un navegador o la que se llamó
    -   closed - Indica si la ventana referenciada está cerrada o no. Devuelve valor booleano
    -   name - Obtiene / establece el nombre del contexto de exploracion de la ventana
    -   stop() - Detiene la carga de recursos en el contexto de navegacion actual
    -   alert() - Muestra un cuadro de alerta con el contenido especificado y un boton Aceptar
    -   print() - Abre el cuadro de dialogo Imprimir para imprimir el documento actual
    -   prompt() - Abre el cuadro de dialogo con un mensaje que solicita al usuario un dato (String)
    -   confirm() - Abre un cuadro de diañogo con un mensaje y dos botones: Aceptar y Cancelar


    -   screen - Devuelve una REFERENCIA al objetio de pantalla asociado a la ventana
    -   screenLeft - Devuelve la DISTANCIA HORIZONTAL entre el borde izquierdo del navegador y el borde izquierdo  de la pantalla.
    -   screenTop - Devuelve la DISTANCIA VERTICAL entre el borde superior del navegador y el borde superior de la pantalla.
    -   scrollX - Devuelve el numero de pixeles que el documento se desplaza actualmente horizontalmente.
    -   scrollY - Devuelve el numero de pixeles que el documento se desplaza actualmente verticalmente.
    -   scroll() - Desoplaza la ventana a un lugar particular en el documento. (con options y posiciones)


    -   minimize() - Minimiza la ventana.
    -   resizeBy() - Cambia el tamaño de la ventana actual en una CANTIDAD especifica.
    -   resizeTo() - Redimensiona dinamicamente la ventana.
    -   moveBy() - Mueve la ventana en una ubicacion RELATIVA
    -   moveTo() - Mueve la ventana a una ubicacion ABSOLUTA


    - objetos barprop
            - locationbar
            - menubar
            - personalbar
            - scrollbars
            - statusbar
            - toolbar
*/


// OPEN
/* window.open("https://youtube.com"); */ //Abre una ventana de youtube

/* let youtubeURL = "https://youtube.com"
    let ventana = window.open(youtubeURL)
    */



// CLOSE
/*  para cerrar
    ventana.close()  
    
La ventana de youtube, no llegaria a abrir, porque directamente hace ambas acciones al mismo tiempo
 */



// CLOSED
/* ventana.closed */ //Devuelve true si la ventana está cerrada, false si no



// STOP
/* ventana.stop() */ //Detiene la ejecución de la ventana, es decir que toca la cruz que aparece cuando esta cargando una pagina para dejar de cargarla



// ALERT
/* ventana.alert("Hola") */ //Muestra un mensaje de alerta en la ventana, ya solo puede hacerse sin usar window, pero sale desde ahi


// PRINT
/* ventana.print() */ //Imprime la ventana actual, es la opcion para imprimir


// PROMPT
/* ventana.prompt("¿Qué es tu nombre?", "Nombre") */ //Pide un input al usuario y devuelve SIEMPRE un string


// CONFIRM
/* ventana.confirm("¿Estás seguro de que quieres cerrar la ventana?") */ //Devuelve un true o false dependiendo de la respuesta que dé el usuario





                                    // SCREEN
// SCREENLEFT
/* ventana.screenLeft */ //Devuelve la distancia entre el borde izquierdo de la ventana y la pantalla

// SCREENTOP
/* ventana.screenTop */ //Devuelve la distancia entre el borde superior de la ventana y la pantalla

// AMBOS SON SOLO PROPIEDADES DE LECTURA, NO PUEDEN SER MODIFICADOS



// SCROLLX & SCROLLY
// Al mostrarlos en pantalla, dicen cuanto se ha desplazado el usuario en los ejes. Tambien se les puede asignar un valor en consola y va al punto de coordenada.

// SCROLL
// Al usarlo en consola, toma los parametros (x,y), en los que toma la coordenada de los dos y va al punto deseado. 




// MINIMIZE
/* ventana.minimize() */ //Minimiza la ventana, PERO YA NO TIENE SOPORTE







                            // LOCATION
                                    /* 
                                    window.location.href  -   Devuelve el href (URL) de la pagina actual
                                    window.location.reload() -   Recarga la pagina actual
                                    window.location.assign() -   Carga un nuevo documento
                                    window.location.hostname -   Devuelve el nombre de dominio del servidor
                                    window.location.pathname -   Devuelve la ruta de la pagina actual, la ruta origen
                                    window.location.port -   Devuelve el puerto de la pagina actual
                                    window.location.protocol -   Devuelve el protocolo de la pagina actual (HTTPS o HTTP)
                                    */

// HISTORIA 7