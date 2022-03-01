import React from 'react';
import Axios  from 'axios';
function ListVehicle(props){
    console.log(props);

    const onDeleteUser = async (id) =>{
        if(window.confirm('Are You Sure?')){
            await Axios.delete(`http://localhost:3001/deleteParking/${id}`)
            .then((response)=>{
                alert('Delete Success');
                window.location.reload(false);
            })
        }
    }
 return (
      
        <div>
            
            <table className='table'>
  <thead>
    <tr>
     
      <th scope="col">Name</th>
      <th scope="col">Author</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
 {
 props.parks.map((dataa)=>{
     return(
     <tr>
         
         <td>{dataa.Name}</td>
         <td>{dataa.vehicleName}</td>
         <td><a href='javascript:void(0)' onClick={()=> onDeleteUser(dataa.RNID)}>Delete
         </a></td>
     </tr>
     );
 })
 }
    
 </tbody>
</table>
        </div>
    )
}

export default ListVehicle;