import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { graphql, useLazyLoadQuery, useFragment, loadQuery, usePreloadedQuery } from "react-relay";
import { pagesAppRepositoryNameQuery } from '../__generated__/pagesAppRepositoryNameQuery.graphql';
import { getClientEnvironment } from '../lib/clientEnvironment';
import { RelayProps, withRelay } from 'relay-nextjs';

const RepositoryNameQuery = graphql`
  query pagesAppRepositoryNameQuery {
    repository(owner: "facebook", name: "relay") {
      name
    }
  }
`;

export function Repository() {
  const query = useLazyLoadQuery<pagesAppRepositoryNameQuery>(RepositoryNameQuery,{}, {
    fetchPolicy: 'network-only'
  })

  return (
    <div>
      Repository: {query.repository?.name}
    </div>
  )
}

function Loading() {
  return <div>Loading...</div>;
}

export default withRelay(Repository, RepositoryNameQuery, {
  fallback: <Loading />,
  createClientEnvironment: () => getClientEnvironment()!,
  createServerEnvironment: async (ctx) => {
    const { createServerEnvironment } = await import('../lib/serverEnvironment');
    return createServerEnvironment();
  }
})