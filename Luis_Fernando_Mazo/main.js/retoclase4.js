const user = "luis";
const pass = "1234";
const rol = "Administrador";

const userEnter = "luis";
const passEnter = "1234";
const rolEnter = "Admin";

const evaluator = (userEnter===user && passEnter===pass) ? (rolEnter===rol) ? "Bienvenido" : "Tu rol no tiene permiso": "usuario o ocontraseña incorecta"; 
console.log(evaluator);