import ecommerceLogo from "/Users/Mauro/Desktop/Proyecto React/Proyecto-React/src/componentes/img/Screenshot_26.png";
import "./styles.css";

const Layout = (props) => {
  return (
    <div className="layout-container">
      
      <header>
        <div>
          <img src={ecommerceLogo} className="elogo " alt="Ecommerce logo" />
        </div>

        <div>
          <nav className="nav">
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Productos</a>
              </li>
              <li>
                <a href="">Carrito de Compras</a>
              </li>
            </ul>
          </nav>
          <a href="" class="btn">
            Login
          </a>
        </div>
      </header>
  

      
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
