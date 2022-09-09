/**
 * @generated SignedSource<<355fb980857bffc9e4f91742b858e533>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserItem_user$data = {
  readonly id: string | null;
  readonly name: string | null;
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
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "f416a3f16fe593c5d046b1bf13cedead";

export default node;
