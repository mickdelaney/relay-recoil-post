import { Link, Outlet } from '@tanstack/react-location';
import { FC } from 'react';

export const Layout: FC = () => {
  return (
    <div>
      <div className='p-3 border-b border-gray-200 flex space-x-3'>
        <Link to='home'>Home</Link>
        <Link to='users'>Users</Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
