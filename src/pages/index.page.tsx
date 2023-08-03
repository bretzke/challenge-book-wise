import { GetServerSideProps, Redirect } from "next";
import { getServerSession } from "next-auth";
import { buildNextAuthOptions } from "./api/auth/[...nextauth].api";

export { default } from "./home";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res)
  );

  let redirectUser: boolean | Redirect = false;

  if (session) {
    // REDIRECIONAR
    // redirectUser = {
    //   destination: "/path",
    //   permanent: true,
    // };
  }

  return {
    redirect: redirectUser,
    props: {},
  };
};
