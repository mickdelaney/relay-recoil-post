/**
 * @generated SignedSource<<7d21ab003a44c41978d47aa82894273c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ViewerQuery$variables = {};
export type ViewerQuery$data = {
  readonly user: {
    readonly id: string | null;
    readonly name: string | null;
  } | null;
};
export type ViewerQuery = {
  response: ViewerQuery$data;
  variables: ViewerQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "id",
        "value": 1
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      }
    ],
    "storageKey": "user(id:1)"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ViewerQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ViewerQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "9cef87b02e40173bfb49905ad3d8d62d",
    "id": null,
    "metadata": {},
    "name": "ViewerQuery",
    "operationKind": "query",
    "text": "query ViewerQuery {\n  user(id: 1) {\n    id\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "1ae90a623abe6398e46fb47a350b5edd";

export default node;
