import React,{Component} from 'react'
import './App.css';
import Header from "./Header/Header"
import Body from "./Body/Body"


class App extends Component {
    constructor(props){
      super(props);
      this.state={
        numberOfItems:0
      }
    }
    addToCart=()=>{
      let {numberOfItems}=this.state;
      this.setState({
        numberOfItems: ++numberOfItems
      })
    }
    removeFromCart =()=>{
      let {numberOfItems}=this.state;
      if(numberOfItems>0){
        this.setState({
          numberOfItems: --numberOfItems
        })
      }
      
    }
    wholeSale =()=>{
      let{numberOfItems}=this.state;
      this.setState({
      numberOfItems: numberOfItems+1000
    })
    }

  render() {
    const{numberOfItems}=this.state
    return(
    <div>
    <Header numberOfItems={numberOfItems}/>
    <Body addToCart={this.addToCart} removeFromCart={this.removeFromCart} wholeSale={this.wholeSale}/>
          
    </div>
    )
  }
}

export default App;
