import { getRelaySerializedState } from 'relay-nextjs';
import { withHydrateDatetime } from 'relay-nextjs/date';
import { Environment, Network, Store, RecordSource } from 'relay-runtime';


export function createClientNetwork() {
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

let clientEnv: Environment | undefined;
export function getClientEnvironment() {
  if (typeof window === 'undefined') return null;

  if (clientEnv == null) {
    clientEnv = new Environment({
      network: createClientNetwork(),
      store: new Store(new RecordSource(getRelaySerializedState()?.records)),
      isServer: false,
    });
  }

  return clientEnv;
}


