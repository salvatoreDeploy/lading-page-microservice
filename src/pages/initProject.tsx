/* Aquivo initProject -  antigo index - para inicio do projeto */
/* eslint-disable @next/next/no-html-link-for-pages */
import { getAccessToken, getSession } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next/types";

export default function Home() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getSession(req, res);

  const token = await getAccessToken(req, res);
  console.log(token);

  if (!session || !token) {
    return {
      redirect: {
        destination: "/api/auth/login",
        permanent: false,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/app",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
