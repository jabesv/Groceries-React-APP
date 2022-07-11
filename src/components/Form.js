const Form = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <label htmlFor="item"> Product Name</label>
            <input 
                type='text'
                value={props.item}
                onChange={props.handleChange}
                id="item"
            />
            <label htmlFor="brand">Brand</label>
            <input
                type='text'
                value={props.brand}
                onChange={props.handleChange}
                id='brand'
            />
            <label htmlFor="units">Units</label>
            <input
                type='text'
                value={props.units}
                onChange={handleChange}
                id='units'
            />
            <label htmlFor="quantity">Quantity</label>
            <input
                type='text'
                value={props.quantity}
                onChange={props.handleChange}
                id='quantity'
            />

            <input type='submit' />


        </form>
    )

}

export default Form