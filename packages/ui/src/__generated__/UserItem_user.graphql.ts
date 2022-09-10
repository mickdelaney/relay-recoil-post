/**
 * @generated SignedSource<<03c2930550d569cb6074d89d0bf73bea>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserItem_user$data = {
  readonly email: string | null;
  readonly id: string | null;
  readonly name: string | null;
  readonly phone: string | null;
  readonly " $fragmentType": "UserItem_user";
};
export type UserItem_user$key = {
  readonly " $data"?: UserItem_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserItem_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserItem_user",
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
    },
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
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "33256e8d3361664877ca416347efa06e";

export default node;
