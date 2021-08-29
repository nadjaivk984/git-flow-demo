
import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

import {Header} from '../src/components/Header.js';
import {ListView} from '../src/components/ListView.js';
import {Fragment}  from 'react';
class SmartApp extends React.Component {
   constructor(props){
     super(props);
     this.state={
         isListview:true,
         users:[],
       
     };


   }

   componentDidMount(){
      fetch('https://randomuser.me/api/?results=15').then(response=>{

        return response.json()
  
        
      }).then(resolt=>{
     
        this.setState({users:resolt.results})
       
      })

    }
   

   render(){
    console.log(this.state.users)
    return (
  <Fragment>
    <Header />
    <ListView props1={this.state.users} />
</Fragment>


    

    )

  }


}

  
   

export default SmartApp;
