import DefaultLayout from "@/layout/Default";
import { NextSeo } from "next-seo";
import BooksRated from "./components/BooksRated";

export default function Books() {
  return (
    <>
      <NextSeo
        title="Livros | BookWise"
        description="Página inicial | Book Wise"
      />
      <DefaultLayout>
        <BooksRated />
      </DefaultLayout>
    </>
  );
}
