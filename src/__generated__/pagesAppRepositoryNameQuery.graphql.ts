/**
 * @generated SignedSource<<4f07cd0e0c33110b560f00a246fd450b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type pagesAppRepositoryNameQuery$variables = {};
export type pagesAppRepositoryNameQuery$data = {
  readonly repository: {
    readonly name: string;
  } | null;
};
export type pagesAppRepositoryNameQuery = {
  response: pagesAppRepositoryNameQuery$data;
  variables: pagesAppRepositoryNameQuery$variables;
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
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pagesAppRepositoryNameQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "Repository",
        "kind": "LinkedField",
        "name": "repository",
        "plural": false,
        "selections": [
          (v1/*: any*/)
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
    "name": "pagesAppRepositoryNameQuery",
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
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": "repository(name:\"relay\",owner:\"facebook\")"
      }
    ]
  },
  "params": {
    "cacheID": "c880beaa4838118c44e770c8c38fb8d1",
    "id": null,
    "metadata": {},
    "name": "pagesAppRepositoryNameQuery",
    "operationKind": "query",
    "text": "query pagesAppRepositoryNameQuery {\n  repository(owner: \"facebook\", name: \"relay\") {\n    name\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "f799947ecb0a91314559933437857cf3";

export default node;
