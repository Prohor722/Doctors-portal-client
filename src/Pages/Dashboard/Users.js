import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {
    const {data:users, isLoading, refetch} = useQuery('users',()=>fetch('http://localhost:5000/user',{
        method: "GET",
        headers:{
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));

    if(isLoading){
        return <Loading/>
    }

    return (
        <div className=''>
            <h2 className='text-2xl'>All users: {users?.length}</h2>
            <div class="overflow-x-auto">
  <table class="table w-full">
      
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Email</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {
          users.map((user,index)=><UserRow key={user._id} user={user} index={index} refetch={refetch} />)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;