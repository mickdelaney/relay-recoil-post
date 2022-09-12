import { FC } from 'react';
import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { UserDetails } from 'ui/src';
import { UserPageQuery } from './__generated__/UserPageQuery.graphql';
import { MakeGenerics, useMatch, useNavigate } from '@tanstack/react-location';

const query = graphql`
  query UserPageQuery($id: ID!) {
    user(id: $id) {
      id
      ...UserDetails_user
    }
  }
`;

type LocationGenerics = MakeGenerics<{
  LoaderData: {
    userQuery: PreloadedQuery<UserPageQuery>;
  };
}>;

export const UserPage: FC = () => {
  const navigate = useNavigate();
  const {
    data: { userQuery },
  } = useMatch<LocationGenerics>();

  if (!userQuery) {
    return <div>Loading....</div>;
  }

  const data = usePreloadedQuery<UserPageQuery>(query, userQuery);

  return (
    <div className='border bg-blue-100 p-4'>
      <div className='flex justify-end pb-2'>
        <button
          className='text-gray-900'
          onClick={() => {
            navigate({ to: `../../users`, replace: true });
          }}>
          Back
        </button>
      </div>
      {data.user ? (
        <UserDetails userRef={data.user} />
      ) : (
        <div>User Not Found</div>
      )}
    </div>
  );
};
