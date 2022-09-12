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
    address {
      street
      suite
      city
      zipcode
    }
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
      <div className='flex items-center justify-between'>
        <div className='text-xl text-blue-500 font-medium'>
          <h3>{data.name}</h3>
        </div>
        {data.company ? (
        <div className='text-lg text-gray-500 font-medium py-2'>
          <h4>{data.company.name}</h4>
        </div>
        ) : null }
      </div>
      <div className='flex items-center justify-between text-gray-500 pt-2'>
        <div>
          <p>{data.email}</p>
        </div>
        <div>
          <p>{data.phone}</p>
        </div>
      </div>
      {data.address ? (
        <div className='flex items-center space-x-2 text-gray-600 py-2'>
        <div>
          <p>{data.address.street}</p>
        </div>
        <div>
          <p>{data.address.city}</p>
        </div>
      </div>
      ) : (
        <div>No Address</div>
      )}
      
    </div>
  );
};
