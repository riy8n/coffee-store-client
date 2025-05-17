import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
   
     const {photoUrl,
        price,
        category,
        _id,
        chef,
        details,
        taste,
        name,}=useLoaderData()
        
       
    const handleUpdateCoffee=e=>{
        e.preventDefault()
          const form=e.target;
    const formData=new FormData(form)
    const updateCoffee=Object.fromEntries(formData.entries())
    console.log(updateCoffee)

     fetch(`http://localhost:3000/coffees/${_id}`,{
        method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },

  body: JSON.stringify(updateCoffee)
    })
    .then(res=>res.json())
    .then(data=>
        {
            if(data.modifiedCount){
                 
                Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Coffee has been updated successfully",
                showConfirmButton: false,
                timer: 1500
                });
                console.log("data after update data",data)
            }
        })
    }
    return (
      <div className='bg-[#F4F3F0]'>
           <h1 className='text-[#374151] text-4xl'>Update Coffee</h1> 
        
           <form onSubmit={handleUpdateCoffee} >
            <div className='grid grid-cols-1  md:grid-cols-2 gap-6 my-4 mx-2'>
                
                <fieldset className="fieldset   rounded-box  border w-full p-4">
               <label className="label text-[rgba(27,26,26,0.8)]">Name</label>
                <input name='name' type="text " className="  bg-[#FFFFFF] input w-full text-[rgba(27,27,26,0.6)]" placeholder="Coffee name" defaultValue={name} />
                </fieldset>
                <fieldset className="fieldset  rounded-box  border w-full p-4">
               <label className="label text-[rgba(27,26,26,0.8)]">Chef</label>
                <input name='chef' type="text " className="input w-full text-[rgba(27,27,26,0.6)]  bg-white" placeholder="Chef Name" defaultValue={chef} />
                </fieldset>
    
                <fieldset className="fieldset    text-[rgba(27,26,26,0.8)] rounded-box   w-full p-4">
               <label className="label">Price</label>
                <input name='price' type="number " className="input w-full text-[rgba(27,27,26,0.6)] bg-white" placeholder="coffee price" defaultValue={price} />
                </fieldset>
                <fieldset className="fieldset rounded-box  border w-full p-4">
               <label className="label text-[rgba(27,26,26,0.8)]">Taste</label>
                <input name='taste' type="text " className="input w-full text-[rgba(27,27,26,0.6)] bg-white" placeholder="Enter coffee taste" defaultValue={taste} />
                </fieldset>
                <fieldset className="fieldset rounded-box  border w-full p-4">
               <label className="label text-[rgba(27,26,26,0.8)]">Category</label>
                <input name='category' type="text " className="input w-full bg-white text-[rgba(27,27,26,0.6)]" placeholder=" Enter your Category" defaultValue={ category} />
                </fieldset>
                <fieldset className="fieldset rounded-box  border w-full p-4">
               <label className="label text-[rgba(27,26,26,0.8)]">Details</label>
                <input name='details' type="text " className="bg-white text-[rgba(27,27,26,0.6)] input w-full" placeholder="Enter Details" defaultValue={details} />
                </fieldset>
            </div>
                <fieldset className="fieldset rounded-box  border w-full p-4 my-6">
               <label className="label text-[rgba(27,26,26,0.8)]">Photo</label>
                <input name='photoUrl' type="text " className="bg-white text-[rgba(27,27,26,0.6)]  input w-full" placeholder="Photo URL" defaultValue={photoUrl} />
                </fieldset>
              <input type="submit" className='btn w-full border-[#331A15] bg-[#D2B48C] text-[#331A15] my-4' value="Update coffee" />
           </form>
             
        </div>
    );
};

export default UpdateCoffee;