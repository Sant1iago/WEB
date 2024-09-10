// mostrar los datos del navegador

let href = window.location.href;
let protocol = window.location.protocol;
let hostname = window.location.hostname;
let pathname = window.location.pathname;


let html = `Protocolo: <b>${protocol}</b> <br>
            Href: <b>${href}</b><br>
            Host Name: <b>${hostname}</b><br>
            Pathname: <b>${pathname}</b><br>
            `;

document.write(html);

