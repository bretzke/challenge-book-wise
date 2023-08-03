import DefaultLayout from "@/layout/Default";
import { NextSeo } from "next-seo";

export default function Books() {
  return (
    <>
      <NextSeo title="Livros | BookWise" description="Página inicial dos" />
      <DefaultLayout>Books</DefaultLayout>
    </>
  );
}
