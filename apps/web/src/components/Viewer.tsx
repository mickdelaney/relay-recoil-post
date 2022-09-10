import { FC } from 'react';
import { graphql, useLazyLoadQuery } from 'react-relay';
import { ViewerQuery } from './__generated__/ViewerQuery.graphql';

const query = graphql`
  query ViewerQuery {
    user(id: 1) {
      id
      name
    }
  }
`;

export const Viewer: FC = () => {
  const data = useLazyLoadQuery<ViewerQuery>(
    query,
    {},
    {
      fetchPolicy: 'store-and-network',
    },
  );

  return (
    <div>
      <div>Username</div>
      <div>{data.user?.name}</div>
    </div>
  );
};
