'use client'

import React, { useEffect, useState } from 'react'

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
  };
}

export default function UsersTable() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
    };
  
    fetchUsers();
  }, []);

  return (
    <table className="min-w-full divide-y divide-gray-200 rounded-xl overflow-hidden">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Name</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">Email</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border">City</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {users.map(user => (
        <tr key={user.id}>
          <td className="px-6 py-4 whitespace-nowrap text-slate-950 border">{user.name}</td>
          <td className="px-6 py-4 whitespace-nowrap text-slate-950 border">{user.email}</td>
          <td className="px-6 py-4 whitespace-nowrap text-slate-950 border">{user.address.city}</td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}