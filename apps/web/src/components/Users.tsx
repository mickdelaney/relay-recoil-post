import { useNavigate } from "@tanstack/react-location";
import { graphql, useLazyLoadQuery } from "react-relay";
import { UserItem } from "ui";
import type { UsersQuery } from "./__generated__/UsersQuery.graphql";

const query = graphql`
  query UsersQuery {
    users {
      data {
        id
        name
        ...UserItem_user
      }
    }
  }
`;

export function Users() {
  const navigate = useNavigate();
  const data = useLazyLoadQuery<UsersQuery>(
    query,
    {},
    {
      fetchPolicy: "store-and-network",
    }
  );

  const rows = (data?.users?.data ?? []).map((u) => {
    if (!u) {
      return null;
    }
    return (
      <UserItem 
        key={u?.id} userRef={u} 
        onSelect={(i) => {
          navigate({ to: './user', replace: true })
        }}
      />
    )
  });

  return <div>{rows}</div>;
}
