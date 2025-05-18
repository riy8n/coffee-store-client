import React, { useState } from 'react';
import Swal from 'sweetalert2';

const User = ({user,setUsers,users,index}) => {
  
     const handleDelete=(id)=>{
              Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {

            //  fetch data
           fetch(`http://localhost:3000/users/${id}`, {
                  method: 'DELETE'
                })
                  .then(res => {
                    if (!res.ok) throw new Error("Network response was not ok");
                    return res.json();
                  })
                 
                  .then(data => {
                    if(data.deletedCount){
                      const remainingUser=users.filter(user=>user._id!==id)
                      setUsers(remainingUser)
                         Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success"
     
            });

                    }
                     console.log("Deleted user:", data);
                  })
                  

         
          }
});
     
     }
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    
      
    <tbody>
      {/* row 1 */}
      <tr>
         {
                index+1
            }
        
        
    
        <td>
           
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={user.photo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.name}</div>
              <div className="text-sm opacity-50">{user.address}</div>
            </div>
          </div>
        </td>
      
        <td>{user.phone}</td>
        <td>{user.email}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Details</button>
          <button className="btn btn-ghost btn-xs">Edit</button>
          <button onClick={()=>handleDelete(user._id)} className="btn btn-ghost btn-xs">X</button>
        </th>
      </tr>
    
   
     
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default User;