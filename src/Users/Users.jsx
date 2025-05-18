import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import User from './User';

const Users = () => {
    const initialUsers=useLoaderData()
       const [ users,setUsers]=useState(initialUsers)
    
// console.log(initialUsers)
    return (
        <div>
            <h1 className="text-3xl">Users:{initialUsers.length}</h1>
           
       
            {
                 
               users.map((user, index) => (
                <User
                    key={user._id}
                    user={user}
                    users={users}
                    setUsers={setUsers}
                    index={index}
                />
                ))


            }
        </div>
    );
};

export default Users;