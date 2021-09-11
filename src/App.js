
//para consumir las apis es con useEffect y useState
import React, { useEffect, useState } from 'react';
//importamos la libreria para el envio de rutas o los paths
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Axios from './config/Axios';
import Inicio from './componentes/Inicio';
function App() {

const [Categorias,GuardarCategoria]=useState([]);
const [Consulta,GuardarConsulta]=useState(true);
console.log(process.env.REACT_APP_BACKEND_URL);

useEffect(()=>{

     if(Consulta){
      
            const ConsultarCategoria = () => {
                console.log("Desde la api");
                Axios.get('Api/productos')
                    .then((response) => {

                        GuardarCategoria(response.data)
                        console.log(response.data)
console.log("Desde la api2");
            })
                    .catch(err => console.log(err))
            }

  ConsultarCategoria();

    }

 


},[Consulta])




  return (
      <Router>

      <Switch>
        <Route

      exact path='/'
     component={() => <Inicio
      Categorias={Categorias}
      guardarconsulata={GuardarConsulta}

/>
     



     }/>

</Switch>


</Router>
  );
}

export default App;
