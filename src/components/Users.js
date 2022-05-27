import { useState, useEffect } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');

    if (!storedUsers) return;

    setUsers(JSON.parse(storedUsers));
  }, []);

  function formatAddress(adr_obj) {
    return `${adr_obj.street} ${adr_obj.suite} ${adr_obj.city} - ${adr_obj.zipcode}`;
  }

  return (
    users.length > 0 && (
      <table className='max-w-7xl mx-auto'>
        <thead>
          <tr className='bg-white'>
            <th className='px-4 py-2 border border-1 border-black'>ID</th>
            <th className='px-4 py-2 border border-1 border-black'>Name</th>
            <th className='px-4 py-2 border border-1 border-black'>Username</th>
            <th className='px-4 py-2 border border-1 border-black'>Email</th>
            <th className='px-4 py-2 border border-1 border-black'>Address</th>
            <th className='px-4 py-2 border border-1 border-black'>Phone</th>
            <th className='px-4 py-2 border border-1 border-black'>Website</th>
            <th className='px-4 py-2 border border-1 border-black'>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.name}>
                <td className='px-4 py-2 border border-1 border-black'>
                  {user.id}
                </td>
                <td className='px-4 py-2 border border-1 border-black'>
                  {user.name}
                </td>
                <td className='px-4 py-2 border border-1 border-black'>
                  {user.username}
                </td>
                <td className='px-4 py-2 border border-1 border-black'>
                  {user.email}
                </td>
                <td className='px-4 py-2 border border-1 border-black'>
                  {formatAddress(user.address)}
                </td>
                <td className='px-4 py-2 border border-1 border-black'>
                  {user.phone}
                </td>
                <td className='px-4 py-2 border border-1 border-black'>
                  {user.website}
                </td>
                <td className='px-4 py-2 border border-1 border-black'>
                  {user.company.name}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    )
  );
};

export default Users;
