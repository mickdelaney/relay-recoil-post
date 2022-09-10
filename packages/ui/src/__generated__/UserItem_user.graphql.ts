/**
 * @generated SignedSource<<ea3485be2cf3616d1e81157bdf73306f>>
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
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "b50e6a4180d9e7c2b6006463e8a7800c";

export default node;
