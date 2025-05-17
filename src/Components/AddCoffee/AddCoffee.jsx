import React from 'react';
import Swal from 'sweetalert2';

const AddCoffee = () => {
    const handleAddCoffee=e=>{
        e.preventDefault()

    const form=e.target;
    const formData=new FormData(form)
    console.log(formData.entries())
    const newCoffee=Object.fromEntries(formData.entries())
    console.log(newCoffee)
      // fetch data to server
    fetch('http://localhost:3000/coffees',{
        method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },

  body: JSON.stringify(newCoffee)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.insertedId){
            console.log('Data after adding data',data)

            Swal.fire({
            title: "Drag me!",
            icon: "success",
            draggable: true
            });
        }
        
    }) 
     

    }
  
    return (
        <div className='bg-[#F4F3F0]'>
           <h1 className='text-[#374151] text-4xl'>Add New Coffee</h1> 
           <p className='text-[#1B1A1AB3]'>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
           <form onSubmit={handleAddCoffee} >
            <div className='grid grid-cols-1  md:grid-cols-2 gap-6 my-4 mx-2'>
                
                <fieldset className="fieldset   rounded-box  border w-full p-4">
               <label className="label text-[rgba(27,26,26,0.8)]">Name</label>
                <input name='name' type="text " className="  bg-[#FFFFFF] input w-full text-[rgba(27,27,26,0.6)]" placeholder="Coffee name" />
                </fieldset>
                <fieldset className="fieldset  rounded-box  border w-full p-4">
               <label className="label text-[rgba(27,26,26,0.8)]">Chef</label>
                <input name='chef' type="text " className="input w-full text-[rgba(27,27,26,0.6)]  bg-white" placeholder="Chef Name" />
                </fieldset>
    
                <fieldset className="fieldset    text-[rgba(27,26,26,0.8)] rounded-box   w-full p-4">
               <label className="label">Price</label>
                <input name='price' type="number " className="input w-full text-[rgba(27,27,26,0.6)] bg-white" placeholder="coffee price" />
                </fieldset>
                <fieldset className="fieldset rounded-box  border w-full p-4">
               <label className="label text-[rgba(27,26,26,0.8)]">Taste</label>
                <input name='taste' type="text " className="input w-full text-[rgba(27,27,26,0.6)] bg-white" placeholder="Enter coffee taste" />
                </fieldset>
                <fieldset className="fieldset rounded-box  border w-full p-4">
               <label className="label text-[rgba(27,26,26,0.8)]">Category</label>
                <input name='category' type="text " className="input w-full bg-white text-[rgba(27,27,26,0.6)]" placeholder=" Enter your Category" />
                </fieldset>
                <fieldset className="fieldset rounded-box  border w-full p-4">
               <label className="label text-[rgba(27,26,26,0.8)]">Details</label>
                <input name='details' type="text " className="bg-white text-[rgba(27,27,26,0.6)] input w-full" placeholder="Enter Details" />
                </fieldset>
            </div>
                <fieldset className="fieldset rounded-box  border w-full p-4 my-6">
               <label className="label text-[rgba(27,26,26,0.8)]">Photo</label>
                <input name='photoUrl' type="text " className="bg-white text-[rgba(27,27,26,0.6)]  input w-full" placeholder="Photo URL" />
                </fieldset>
              <input type="submit" className='btn w-full border-[#331A15] bg-[#D2B48C] text-[#331A15] my-4' value="Add coffee" />
           </form>
             
        </div>
    );
};

export default AddCoffee;