import './App.css';
import { ReactLocationDevtools } from '@tanstack/react-location-devtools';
import {
  Link,
  MakeGenerics,
  Outlet,
  ReactLocation,
  Router,
  useMatch,
} from '@tanstack/react-location';

import { HomePage } from './pages';

const location = new ReactLocation();

function App() {
  return (
    <Router
      location={location}
      routes={[{ path: '/', element: <HomePage /> }]}
    />
  );
}

export default App;
