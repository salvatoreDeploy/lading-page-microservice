/* Pasta initProject -  antiga pasta app - para inicio do projeto */
/* eslint-disable @next/next/no-html-link-for-pages */
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useMeQuery } from "../../graphql/generated/graphql";

import {
  getServerPageGetProducts,
  ssrGetProducts,
} from "../../graphql/generated/page";
import { withApollo } from "../../lib/withApollo";

function Home({ data }: any) {
  const { user } = useUser();
  //const { dato, loading, error } = useGetProductsQuery();
  const { data: me } = useMeQuery();

  return (
    <div className="text-blue-500">
      <h1>Bem Vindo</h1>
      <pre>{JSON.stringify(me, null, 2)}</pre>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <a href="/api/auth/logout">Logout</a>
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async (ctx) => {
    //return await getServerPageGetProducts({}, ctx);
    return {
      props: {},
    };
  },
});

export default withApollo(ssrGetProducts.withPage()(Home));
