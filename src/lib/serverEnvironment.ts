import { withHydrateDatetime } from 'relay-nextjs/date';
import { Environment, Network, Store, RecordSource, GraphQLResponse } from 'relay-runtime';



export function createServerNetwork() {
  const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_TOKEN

  return Network.create(async (params, variables) => {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${GITHUB_TOKEN}`
      },
      body: JSON.stringify({
        query: params.text,
        variables,
      }),
    });

    const json = await response.text();
    return JSON.parse(json, withHydrateDatetime);
  });
}

// Optional: this function can take a token used for authentication and pass it into `createServerNetwork`.
export function createServerEnvironment() {
  return new Environment({
    network: createServerNetwork(),
    store: new Store(new RecordSource()),
    isServer: true,
  });
}