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
              <li><a href="">Home</a></li>
              <li><a href="">Productos</a></li>
              <li><a href="">Carrito de Compras</a></li>
            </ul>
          </nav>
        </div>
        <div class="count-products">
            <span id="contador-productos">0</span>
        </div>
        

      </header>
      
      <div>{props.children}</div>
      <footer>
      <p>Copyright&copy;2024 | Elaborado por <a href=""><span>PMQG Solutions</span></a>
      </p>
    </footer>
    </div>
  );
};

export default Layout;
