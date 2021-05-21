import {Cards, Charts, CountryPicker} from './components'
import styles from './App.module.css'
import React, { Component } from 'react';
import {fetchData} from './api/'
import corona from './image.png'
class App extends Component {
 state={
data:[],
country:''
 }

  async componentDidMount(){
    const data=await fetchData()
    this.setState({data})
    
  }
  handleCountryChange=async(country)=>{
    const data=await fetchData(country)
    this.setState({data,country})
  }
  render() {
    return (
      <div className={styles.container}>
        <img  class={styles.image} src={corona} alt=""/>
        <Cards {...this.state.data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />

        <Charts {...this.state} />
      
    </div>
    );
  }
}

export default App;
