import { FunctionComponent } from "react";
import { graphql, useFragment, useLazyLoadQuery } from "react-relay";
import type { UserItem_user$key } from "./__generated__/UserItem_user.graphql";


const fragment = graphql`
  fragment UserItem_user on User {
    id
    name
  }
`;


type Props = {
  userRef: UserItem_user$key;
};

export const UserItem: FunctionComponent<Props> = ({
  userRef,
}) => {
  const data = useFragment<UserItem_user$key>(
    fragment,
    userRef,
  );

  return <div key={data.id}>{data.name}</div>;
}
