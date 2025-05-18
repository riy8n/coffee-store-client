import React, { use, useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const SingUp = () => {
     const { createUser } = useContext(AuthContext);

    const handleSingUp=e=>{
        e.preventDefault()
        const form=e.target
        const formData=new FormData(form)
        const {email,password, ...restData}=Object.fromEntries(formData.entries())
      console.log(email,password )
        // firebase create
          createUser(email, password)
      .then(result => {
       
        console.log("User created:", result.user);
        const userProfile={
          email,...restData,
          
          creationTime: result.user?.metadata?.creationTime,
          
          
        lastSignInTime: result.user?.metadata?.
          lastSignInTime

        }
        // data send to backend
          fetch('http://localhost:3000/users',{
            method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify(userProfile)
          })
      .then(result=>result.json())
      .then(data=>{
          if(data.insertedId){
            
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
          console.log("data after fetch",data)

        }
      }
       
        )
          .catch(error => console.error("Backend error:", error));
       
      })
      .catch(error => {
        console.error("Error:", error);
      });
      





    }
    return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">SingUp now!</h1>
        <form onSubmit={handleSingUp} className="fieldset">
          {/* name */}
          <label className="label">Name</label>
          <input type="text"  name='name' className="input" placeholder="Your name" />
          {/* address */}
          <label className="label">Address</label>
          <input type="test" name='address' className="input" placeholder="Your address" />
          {/* phone */}
          <label className="label">Phone</label>
          <input type="number"  name='phone' className="input" placeholder="Phone no." />
          <label className="label">Photo URL</label>
          <input type="text" name='photo' className="input" placeholder="Photo URL" />
          <label className="label">Email</label>
          <input type="email"  name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">SingUp</button>
        </form>
        <p>Don't you have any account?Please <span><Link to='/singin'>SingIn</Link></span></p>
      </div>
    </div>


       
    );
};

export default SingUp;