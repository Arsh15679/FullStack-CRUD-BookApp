import React from 'react';
import './App.css';
import Axios from 'axios';
class addVehicle extends React.Component{
   
    state = {
        Name:"",
        vehicleName:""
    };

    render(){
        
      const insertParking = () =>{
        Axios.post('http://localhost:3001/addParking',{
          name:this.state.Name,
          vehicle:this.state.vehicleName
        }).then(()=>{
          alert('Success!');
          window.location.reload(false);
        })
      };
      return(
           
            <div>
                <div className='col-sm-12'>
     <div className='container'>
            <div className='row'>
              
               <div className='card' >

                 <div className='form-group'>
                  <label>Name :</label>
              <input type='text' className='form-control' placeholder='Enter Name' 
              value={this.state.Name}
              onChange={(e)=> this.setState({Name:e.target.value})} />
              </div>

              <div className='form-group'>
                <br/>
              <label>Author Name :</label>
              <input type='text' className='form-control' placeholder='Enter Author Name'
               value={this.state.vehicleName}
               onChange={(e)=> this.setState({vehicleName:e.target.value})}  />
              <br/>
              </div>

              <button className='btn btn-primary' onClick={insertParking}> Enter</button>
              
              </div>

             
              </div>
              </div>
    </div>
            </div>
        )
    }
}

export default addVehicle;