import { FunctionComponent, PropsWithChildren } from "react";

export const Shell: FunctionComponent<PropsWithChildren<{}>> = ({
    children,
  }) => {
    return (
      <div>
        <div></div>
        <div>{children}</div>
      </div>
    );
  }
  