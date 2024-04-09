import "./styles.css"

const Layout = (props) => {
    return <div className="layout-container">
      <div>
        <img
          src="./componentes/img/Screenshot_26.png"
          class="logo"
          alt="Logo de la compañia"
        />
      </div>
      <h1>Hey! peeeee</h1>  
        <nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Productos</a></li>
            <li><a href="">Carrito de Compras</a></li>
          </ul>
        </nav>
        <a href="" class="btn">Login</a>
       
       <div>{props.children}</div>
    </div>
}

export default Layout