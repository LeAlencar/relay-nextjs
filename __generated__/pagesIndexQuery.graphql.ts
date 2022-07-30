/**
 * @generated SignedSource<<378edc6d18d94aa5cf1f3793e3f46d28>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type pagesIndexQuery$variables = {};
export type pagesIndexQuery$data = {
  readonly repository: {
    readonly name: string;
    readonly owner: {
      readonly login: string;
    };
  } | null;
};
export type pagesIndexQuery = {
  response: pagesIndexQuery$data;
  variables: pagesIndexQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "name",
    "value": "relay"
  },
  {
    "kind": "Literal",
    "name": "owner",
    "value": "facebook"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "login",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pagesIndexQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "owner",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "repository(name:\"relay\",owner:\"facebook\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pagesIndexQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": null,
            "kind": "LinkedField",
            "name": "owner",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "__typename",
                "storageKey": null
              },
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": "repository(name:\"relay\",owner:\"facebook\")"
      }
    ]
  },
  "params": {
    "cacheID": "081df18eaa4dbe38df8a1cc3fcfbc897",
    "id": null,
    "metadata": {},
    "name": "pagesIndexQuery",
    "operationKind": "query",
    "text": "query pagesIndexQuery {\n  repository(owner: \"facebook\", name: \"relay\") {\n    name\n    owner {\n      __typename\n      login\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "03e30e32f9a4c77eb1e27c429f5fb6d8";

export default node;
