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
import { UsersPage, usersPageGraphQL } from './pages/UsersPage';
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';
import { ErrorFallback, Layout, Loading, myErrorHandler } from './components';
import { loadQuery } from 'react-relay';
import { useQueryLoader } from 'react-relay';
import UsersPageQueryDef, { UsersPageQuery } from './pages/__generated__/UsersPageQuery.graphql';

const location = new ReactLocation();

import Environment from './RelayEnvironment';

function App() {

  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/home', element: <HomePage /> },
        {
          path: '/users',
          element: <UsersPage  />,
          loader: async () => {
            return {
              queryRef: loadQuery<UsersPageQuery>(
                Environment,
                UsersPageQueryDef,
                {},
                {
                  fetchPolicy: 'network-only',
                },
              ), 
            }
          },
        },
      ],
    },
  ];

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onError={myErrorHandler}>
      <Suspense fallback={<Loading />}>
        <Router location={location} routes={routes}>
          <Outlet />
          <ReactLocationDevtools initialIsOpen={false} />
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
