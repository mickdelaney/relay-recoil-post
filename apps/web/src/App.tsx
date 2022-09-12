import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { loadQuery } from 'react-relay';
import { ReactLocationDevtools } from '@tanstack/react-location-devtools';
import {
  Outlet,
  ReactLocation,
  Router,
} from '@tanstack/react-location';

import './App.css';
import Environment from './RelayEnvironment';

import { HomePage, UsersPage, UserPage } from './pages';
import { ErrorFallback, Layout, Loading, myErrorHandler } from './components';

import UsersPageQueryDef, { UsersPageQuery } from './pages/__generated__/UsersPageQuery.graphql';
import UserPageQueryDef, { UserPageQuery } from './pages/__generated__/UserPageQuery.graphql';

const location = new ReactLocation();

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
              usersQuery: loadQuery<UsersPageQuery>(
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
        {
          path: '/user/:id',
          element: <UserPage  />,
          loader: async ({ params }: any) => {
            return {
              userQuery: loadQuery<UserPageQuery>(
                Environment,
                UserPageQueryDef,
                { id: params.id },
                {
                  fetchPolicy: 'network-only',
                },
              ),
            };
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
