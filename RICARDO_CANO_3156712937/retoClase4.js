let usuario = "ricardo";
let password = "contrasena1";
let rol = "admin";

const usuario1 = "ricardo";
const password1 = "contrasena1";
const rol1 = "admin";

let usuarioValido = (usuario === usuario1 && password === password1);

let resultado = usuarioValido 
    ? (rol === rol1 
        ? "Acceso permitido. ¡Bienvenido!" 
        : "Error: Rol incorrecto.") 
    : "Error: Usuario o contraseña incorrectos.";

console.log(resultado);
