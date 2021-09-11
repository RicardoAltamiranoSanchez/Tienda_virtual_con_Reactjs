//importamos axios
import axios from 'axios';
//es una funcion ya de axios creamos un objeto de pasamos como base la url 
//lo hacemos para no escribir el dominio
const Axios=  axios.create({
   
   baseURL:process.env.REACT_APP_BACKEND_URL
  
//Aqui el erro donde no se puede ennviar el dominio solo lo estoy haciendo asi para no peder tiempo y continuar
//NOTA importante se debe declarar en baseURL con mayusculas la URL yo tenia el error de ponerlo asi Url
});
export default Axios;