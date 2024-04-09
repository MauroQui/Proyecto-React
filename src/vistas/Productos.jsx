import { useEffect } from "react";
import { useState } from "react";

const Productos = () => {

    const [productos, setProductos] = useState([]);

    useEffect (() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
            setProductos(data);
        }); 
    }, []);

    return ( 
    <div style={{ display:"flex", flexDirection:"column"}}> 
        <h1>Productos</h1>
        <ul>
            {productos.map((producto, posicion) => {
                return(
                    <li key={producto.id ?? posicion.toString()}>
                        <h2>{producto.title}</h2>
                        <p>{producto.description}</p>
                        <img src={producto.image} alt={producto.title} />
                        <br />
                        <button>Agregar al carrito</button>
                    </li>
                );
            })}
        </ul>
    </div>
  );
};

export default Productos