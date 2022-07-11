import './App.css';
import groceriesData from './data/groceriesData'
import { Component }from 'react'
import Navbar from './components/Navbar'
import ProductsList from './components/ProducstList' 
import Form from './components/Form'

class App extends Component {
  state = {
    groceriesData: groceriesData,
    item: '',
    brand: '',
    units: '',
    quantity: 1

  }

  handleChange = (event) => {
    this.setState({ [event.target.id] : event.target.value } )
  }
  
  handleSubmit = (event) => {
    event.preventDefault()

//create a new product object 
    const newProduct = {
      item: this.state.item,
      brand: this.state.brand,
      units: this.state.units,
      quantity: this.state.quantity,
      isPurchased: this.state.isPurchased
    }

    // set the new values in the state
this.setState({
  groceriesData: [newProduct, ...this.state.groceriesData],
  item: '',
  brand: '',
  units: '',
  quantity: '',
  isPurchased: false
 })
}

handleRemove = (product) => {  // remove item from original array
   const items = this.state.items.filter(i => i.item !== product.item)
   this.setState({items}) 
}


render(){
    return (
    <div className="App">
      <Navbar text='Groceries List React App'/>
      
      <Form
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        item={this.state.item}
        brand={this.state.brand}
        units={this.state.units}
        quantity={this.state.quantity}
      />
     <ProductsList products={this.state.items} handleRemove={this.handleRemove} />
    </div>
  )
  }
}

export default App;
