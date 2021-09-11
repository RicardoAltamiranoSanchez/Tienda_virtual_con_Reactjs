import React,{Fragment} from 'react';




const Inicio=({Categorias,guardarConsulta},props)=>{
  console.log(Categorias)
    if(Categorias.length === 0){return null}
    console.log(Categorias.msg);
    console.log(Categorias.categoria);
    Categorias.productos.forEach(c=>{
        console.log(c)
    })
const n1=Categorias.productos[1];
const n2=Categorias.productos[2];
const n3=Categorias.productos[3];
const n4=Categorias.productos[4];
const n5=Categorias.productos[5];

return (
   <Fragment>
<header>

<nav class="nav">
<ul class="menu">
<li><a href="#">Inicio</a></li>

<li><a href="#">Tienda</a></li>
<li><a href="#">Contacto</a></li>
<li><a href="#">Acerca de</a></li>
</ul>

</nav>

</header>
<div class="scrol">

<div class="wrapper">

      <div class="cart-nav">
        <div class="icon">
          <i class="fas fa-shopping-cart"></i>
          <span>Carrito</span>
        </div>
        <div class="item-count">0</div>
      </div>

      <div class="card">
        <img src={n1.img} width="290" height="290" alt=""/>
        <div class="content">
          <div class="row">
            <div class="details">
              <span>{n1.nombre}</span>
              <p>{n1.descripcion}</p>
            </div>
            <div class="price">${n1.precio}</div>
          </div>
          <div class="buttons">
            <button>Comprar Ahora</button>
            <button class="cart-btn">Añadir al carrito</button>
          </div>
        </div>
      </div>




      <div class="card">
        <img src={n2.img} width="290" height="290" alt=""/>
        <div class="content">
          <div class="row">
            <div class="details">
              <span>{n2.nombre}</span>
              <p>{n2.descripcion}</p>
            </div>
            <div class="price">${n2.precio}</div>
          </div>
          <div class="buttons">
            <button>Comprar Ahora</button>
            <button class="cart-btn">Añadir al carrito</button>
          </div>
        </div>
      </div>


<div class="card">
        <img src={n3.img} width="290" height="290" alt=""/>
        <div class="content">
          <div class="row">
            <div class="details">
              <span>{n3.nombre}</span>
              <p>{n3.descripcion}</p>
            </div>
            <div class="price">${n3.precio}</div>
          </div>
          <div class="buttons">
            <button>Comprar Ahora</button>
            <button class="cart-btn">Añadir al carrito</button>
          </div>
        </div>
      </div>
<div class="card">
        <img src={n4.img} width="290" height="290" alt=""/>
        <div class="content">
          <div class="row">
            <div class="details">
              <span>{n4.nombre}</span>
              <p>{n4.descripcion}</p>
            </div>
            <div class="price">${n4.precio}</div>
          </div>
          <div class="buttons">
            <button>Comprar Ahora</button>
            <button class="cart-btn">Añadir al carrito</button>
          </div>
        </div>
      </div>
</div>


  </div>

    

   
  



</Fragment>
 

)



}
export default Inicio;