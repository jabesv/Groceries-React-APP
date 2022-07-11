const ProductItem = (props) => {
    const { item,brand, units, quantity } = props.product
    return(
        <div> 
            <h2> Item: {item}</h2>
            <h2> Brand: {brand}</h2>
            <h2> Quantity: {quantity} {units}</h2>
            <button onClick={ () => props.handleRemove(props.product) }>Remove</button>
        </div>
    )
} 

export default ProductItem