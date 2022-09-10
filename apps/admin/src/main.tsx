import * as React from "react";
import { createRoot } from 'react-dom/client';
import { RelayEnvironmentProvider } from "react-relay";
import {
  RecoilRoot,
} from 'recoil';

import "./index.css";
import RelayEnvironment from "./RelayEnvironment";
import App from "./App";

const container = document.getElementById('root');
if (container === null) {
  throw Error('No Root Element To Render React');
}
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <App />
      </RelayEnvironmentProvider>    
    </RecoilRoot>
  </React.StrictMode>,
);
