import { MakeGenerics, useMatch, useNavigate } from '@tanstack/react-location';
import { FC } from 'react';
import { graphql, PreloadedQuery, usePreloadedQuery } from 'react-relay';
import { UserItem } from 'ui';
import { Users } from '../components';
import { UsersPageQuery } from './__generated__/UsersPageQuery.graphql';

const query = graphql`
  query UsersPageQuery {
    users {
      data {
        id
        name
        ...UserItem_user
      }
    }
  }
`;

type LocationGenerics = MakeGenerics<{
  LoaderData: {
    usersQuery: PreloadedQuery<UsersPageQuery>;
  };
}>;

export const UsersList: FC<{ queryRef: PreloadedQuery<UsersPageQuery> }> = ({
  queryRef,
}) => {
  const navigate = useNavigate();
  const data = usePreloadedQuery<UsersPageQuery>(query, queryRef!!);

  const rows = (data?.users?.data ?? []).map(u => {
    if (!u) {
      return null;
    }
    return (
      <UserItem 
        key={u?.id} userRef={u} 
        onSelect={(i) => {
          navigate({ to: `../user/${i.id}`, replace: true })
        }}
      />
    )
  });
  return (
    <div className='border bg-blue-100 p-4'>
      <div>{rows}</div>
    </div>
  );
};

// export const UsersPage: FC<{ queryRef: PreloadedQuery<UsersPageQuery> | undefined | null }> = ({
//   queryRef,
// }) => {

export const UsersPage: FC =()=> {
  const {
    data: { usersQuery },
  } = useMatch<LocationGenerics>();

  if (!usersQuery) {
    return <div>Loading....</div>;
  }

  return (
    <>
      <div className='border-b bg-white p-4'>Users</div>

      <UsersList queryRef={usersQuery} />
    </>
  );
};


