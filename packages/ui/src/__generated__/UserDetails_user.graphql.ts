/**
 * @generated SignedSource<<d5026a096f05b32639f6643a8184d459>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserDetails_user$data = {
  readonly company: {
    readonly name: string | null;
  } | null;
  readonly email: string | null;
  readonly id: string | null;
  readonly name: string | null;
  readonly phone: string | null;
  readonly " $fragmentType": "UserDetails_user";
};
export type UserDetails_user$key = {
  readonly " $data"?: UserDetails_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserDetails_user">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserDetails_user",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "phone",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Company",
      "kind": "LinkedField",
      "name": "company",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
})();

(node as any).hash = "4723d31d55015ec89e4ceb122d8bd0b0";

export default node;
