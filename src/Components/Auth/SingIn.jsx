import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const SingIn = () => {
    const{ signInUser}=useContext(AuthContext)
    const handleSingIn=e=>{
        e.preventDefault()
        const form=e.target
        const email=form.email.value
        const password=form.password.value
        console.log(email,password)
        // firebase auth 
             signInUser(email, password)
      .then((result) => {
        const signInInfo = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        // PATCH request to backend
        fetch('http://localhost:3000/user', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(signInInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log('Data after update:', data);
          });
      })
        
        .catch((error) => {
          console.log(error)
        });

    }
    return (
         <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sing In now!</h1>
        <form onSubmit={handleSingIn} className="fieldset">
    
          
          <label className="label">Email</label>
          <input type="email"  name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">SingIn</button>
        </form>
        <p>Already  have an account?Please <span><Link to='/singup'>SingUP</Link></span></p>
      </div>
    </div>
    );
};

export default SingIn;