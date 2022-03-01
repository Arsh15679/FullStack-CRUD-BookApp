import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './Header';
import  ReactDOM  from 'react-dom';
import Axios from 'axios';
import AddVehicle from './AddVehicle';
import ListVehicle from './ListVehicle';

function App() {
  
 
  const [parking,setPark] = useState([]);
  
  
   useEffect(()=>{
        Axios.get('http://localhost:3001/getParking')
        .then((response)=>{
          console.log(response.data[0]);
          setPark(response.data[0]);
          
        });
      },[]);
      
    return(
     
      <div>
      <Header/>
      <div className='col-sm-12'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-4'>
            <AddVehicle />
            </div>
         <div className='col-sm-8'>
           <br/>
           <br/>
           <br/>
           
             <ListVehicle parks={parking} /> 
 
    
 
         </div>
          </div>
        </div>
      </div>
    
    </div>
    )}
  

 


export default App;


{/*  */}