import ProductItem from "./ProductItem";

const ProductsList = (props) => {
return (
    <div>
        <h2>Groceries</h2>

        {
          props.products.map(
            (item, idx) => !item.isPurchased ? (<ProductItem product={item} key={idx} handleRemove ={props.handleRemove}/>) : ( <h3 key={idx}> {item.item} Purchased</h3>)
        )}
    </div>
  )

}

export default ProductsList