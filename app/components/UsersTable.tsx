'use client'

import React, { useEffect, useState } from 'react'

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  address: {
    city: string;
    zipcode: string;
  };
}

export default function UsersTable() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log(data); // Log the raw JSON data
      setUsers(data);
    };
  
    fetchUsers();
  }, []);

  return (

  <div className='w-full overflow-x-auto'>
  <h1 className="mb-8 font-mono text-center mt-8 text-2xl font-semibold text-white">Tabelle gefüllt mit JSON Daten</h1>
  <table className="w-full table-auto divide-y divide-gray-200 rounded-xl xl-hidden">
  <thead className="bg-gray-50 xl:table-header-group hidden">
    <tr>
      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border ">Username</th>
      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border">Name</th>
      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border">Email</th>
      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border">City</th>
      <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border">Postleitzahl</th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
    {users.map(user => (
      <tr key={user.id} className="hidden xl:table-row">
        <td className="px-6 py-4 whitespace-nowrap text-center text-slate-950 border">{user.username}</td>
        <td className="px-6 py-4 whitespace-nowrap text-center text-slate-950 border">{user.name}</td>
        <td className="px-6 py-4 whitespace-nowrap text-center text-slate-950 border">{user.email}</td>
        <td className="px-6 py-4 whitespace-nowrap text-center text-slate-950 border">{user.address.city}</td>
        <td className="px-6 py-4 whitespace-nowrap text-center text-slate-950 border">{user.address.zipcode}</td>
      </tr>
    ))}
  </tbody>
</table>

<div className="xl:hidden space-y-4">
  {users.map(user => (
    <div key={user.id} className="bg-white divide-y divide-gray-200 flex flex-col p-4 mb-4 rounded-xl">
      <div className="flex justify-between items-start text-slate-950 space-x-7">
        <strong>Username:</strong> 
        <div className="flex justify-start w-full items-start"><span className="font-light">{user.username}</span></div>
      </div>
      <div className="flex justify-between items-start text-slate-950 space-x-16">
        <strong>Name:</strong> 
        <div className="flex justify-start w-full items-start"><span className="font-light">{user.name}</span></div>
      </div>
      <div className="flex justify-between items-start text-slate-950 space-x-16">
        <strong>Email:</strong> 
        <div className="flex justify-start w-full items-start"><span className="font-light">{user.email}</span></div>
      </div>
      <div className="flex justify-between items-start text-slate-950 space-x-20">
        <strong>City:</strong> 
        <div className="flex justify-start w-full items-start"><span className="font-light">{user.address.city}</span></div>
      </div>
      <div className="flex justify-between items-start text-slate-950 space-x-4">
        <strong>Postleitzahl:</strong> 
        <div className="flex justify-start w-full items-start"><span className="font-light">{user.address.zipcode}</span></div>
      </div>
    </div>
  ))}
</div>

  <h1 className="mb-8 font-mono text-center mt-8 text-2xl font-semibold text-white">Reine JSON Daten</h1>
  <pre className="mt-4 text-xl text-white text-center mx-auto">{JSON.stringify(users, null, 2)}</pre>
  </div>
 
  )
}