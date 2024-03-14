import { useContext, useState } from "react"
import { listProducts } from "./listProducts"

function Products() {

    const [list, setListProducts] = useState(listProducts.pagina1);
    const [currentPage, setCurrentPage] = useState(1);
    const [cartProducts, setCartProducts] = useState([]);


    function handlePagination() {
        setCurrentPage(2);
        setListProducts(listProducts.pagina2);
    }

    function handleAddToCart(product) {
        let copy = [...cartProducts];
        copy.push(product)        
        setCartProducts(copy);
    }

    return (
        <>
            {list.map((product) => {
                return (
                    <>
                        <div key={product.id}>
                            <p>{product.nombre} ${product.precio}</p>
                            <button onClick={() => {handleAddToCart(product)}}>Anadir</button>
                        </div>
                    </>
                )
            })}
            <button type="button" onClick={handlePagination}>2</button>
            <h1>cart</h1>
            <ul>
            {cartProducts.map((product) => {
                return(
                    <li key={product.nombre}>{product.nombre}</li>
                )
            })}
            </ul>
        </>
    )
}

export default Products;