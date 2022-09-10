import { Link } from '@tanstack/react-location';
import { CounterButton } from 'ui';
import { Viewer } from '../components';

export function HomePage() {
  return (
    <div className='container'>
      <main className='m-8'>
        <div className='mb-4 flex bg-gray-100 p-4'>
          <Viewer />
        </div>
        <div className='mb-4 flex bg-gray-100 p-4'>
          <CounterButton />
        </div>
      </main>
    </div>
  );
}
