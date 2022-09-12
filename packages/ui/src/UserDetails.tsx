import React from 'react';
import { FunctionComponent } from 'react';
import { graphql, useFragment } from 'react-relay';
import type {
  UserDetails_user$key,
} from './__generated__/UserDetails_user.graphql';

const fragment = graphql`
  fragment UserDetails_user on User {
    id
    name
    email
    phone
    company {
      name
    }
  }
`;

type Props = {
  userRef: UserDetails_user$key;
};

export const UserDetails: FunctionComponent<Props> = ({ userRef }) => {
  const data = useFragment<UserDetails_user$key>(fragment, userRef);
  return (
    <div className='mb-2 border bg-white p-2' key={data.id}>
      <h3>{data.name}</h3>
      <div className='flex items-center justify-between text-gray-500'>
        <div>
          <p>{data.email}</p>
        </div>
        <div>
          <p>{data.phone}</p>
        </div>
      </div>
    </div>
  );
};
