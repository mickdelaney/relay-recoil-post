import React from 'react';
import { FunctionComponent } from 'react';
import { graphql, useFragment } from 'react-relay';
import type {
  UserItem_user$data,
  UserItem_user$key,
} from './__generated__/UserItem_user.graphql';

const fragment = graphql`
  fragment UserItem_user on User {
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
  userRef: UserItem_user$key;
  onSelect: (item: UserItem_user$data) => void;
};

export const UserItem: FunctionComponent<Props> = ({ userRef, onSelect }) => {
  const data = useFragment<UserItem_user$key>(fragment, userRef);
  return (
    <div
      onClick={() => onSelect(data)}
      className='mb-2 border bg-white px-3 py-2 cursor-pointer hover:border-gray-300 hover:bg-gray-50' key={data.id}>
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
