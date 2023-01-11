/* eslint-disable @next/next/no-html-link-for-pages */
import { gql, useQuery } from "@apollo/client";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useGetProductsQuery } from "../../graphql/generated/graphql";
import { withApollo } from "../../lib/withApollo";

function Home() {
  const { user } = useUser();
  const { data, loading, error } = useGetProductsQuery();

  return (
    <div>
      <h1>Bem Vindo</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <a href="/api/auth/logout">Logout</a>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async ({ req, res }) => {
    return {
      props: {},
    };
  },
});

export default withApollo(Home);
