import React from "react";
import { FunctionComponent } from "react";
import { graphql, useFragment, useLazyLoadQuery } from "react-relay";
import type { UserItem_user$key } from "./__generated__/UserItem_user.graphql";

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
};

export const UserItem: FunctionComponent<Props> = ({ userRef }) => {
  const data = useFragment<UserItem_user$key>(fragment, userRef);
  return (
    <div className='border bg-white p-2 mb-2' key={data.id}>
      <h3>{data.name}</h3>
      <div className='flex items-center justify-between text-gray-500'>
        <div><p>{data.email}</p></div>
        <div><p>{data.phone}</p></div>
      </div>
    </div>
  );
};
