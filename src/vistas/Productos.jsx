import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import  carritoSlice  from "../slices/carrito"

const { agregarProducto } = carritoSlice.actions;

const Productos = () => {

    const dispatch = useDispatch(); 

    const productosEnStore = useSelector(state => state.carrito.productos)

    const [productos, setProductos] = useState([]);

    useEffect (() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
            setProductos(data);
        }); 
    }, []);

    useEffect (() => {
        console.log("productosEnStore", productosEnStore);
    }, [productosEnStore]);

    return ( 
    <div className="products" style={{ display:"flex", flexDirection:"column"}}> 
        <h1>Productos</h1>
        <div className="product">
        <ul>
            {productos.map((producto, posicion) => {
                return(
                    <li key={producto.id ?? posicion.toString()}>
                        <h2>{producto.title}</h2>
                        <p>{producto.description}</p>
                        <img src={producto.image} alt={producto.title} />
                        <h4>Precio $ {producto.price}</h4>
                        <button onClick={(evento) => dispatch(agregarProducto(producto)) }>Agregar al carrito</button>

                    </li>
                );
            })}
        </ul>
        </div>
    </div>
  );
};

export default Productos