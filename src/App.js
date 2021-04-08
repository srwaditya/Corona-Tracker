import React from 'react';
import{ Cards, Charts, CountryPicker} from './components' ;
import styles from './App.module.css';

import {fetchData}  from './api';


class App extends React.Component{
state ={
    data :{},
}

    async componentDidMount(){
    const data = await fetchData();
    this.setState({data});
    
    
}
    render(){

        const  {data, country}= this.state;
        return(
    <div  className= {styles.container} >
      <Cards data={data}/>
      <Charts data={data} country={country}/>
       <CountryPicker/>

</div>
        )
    }
}

export default App;