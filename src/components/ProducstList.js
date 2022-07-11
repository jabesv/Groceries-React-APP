import ProductItem from "./ProductItem";

const ProductList = (props) => {
return (
    <div>
        <h2>Groceries</h2>

        {props.products.map(
            (item, idx) => !item.isPurchased && <ProductItem product={item} key={idx} removeItem={props.removeItem} />
        )}
    </div>
)

}

export default ProductList