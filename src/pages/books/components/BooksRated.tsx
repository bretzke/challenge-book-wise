import { useEffect, useState } from "react";
import { api } from "@/lib/axios";
import IBookRated from "@/interfaces/IBookRated";
import Image from "next/image";
import {
  BookInformations,
  BooksRatedContainer,
  Card,
  CardBody,
  CardHeader,
  RoundedBorderImage,
} from "./styles";
import { Star } from "@phosphor-icons/react";

export default function BooksRated() {
  const [booksRated, setBooksRated] = useState<IBookRated[]>([]);

  useEffect(() => {
    const fetchRatings = async () => {
      const {
        data: { ratings },
      } = await api.get("/books/rated");
      console.log(ratings);
      setBooksRated(ratings);
    };

    fetchRatings();
  }, []);

  return (
    <BooksRatedContainer>
      {booksRated.map((bookRated) => {
        const starsToRender = [];

        for (let index = 1; index <= 5; index++) {
          starsToRender.push(
            <Star
              weight={index <= bookRated.rate ? "fill" : "regular"}
              size={16}
            />
          );
        }

        return (
          <Card key={bookRated.id}>
            <CardHeader>
              <RoundedBorderImage
                src={bookRated.user.avatar_url}
                width={40}
                height={40}
                alt={bookRated.user.name}
              />
              <div>
                <p>{bookRated.user.name}</p>
                <span>{new Date(bookRated.created_at).toISOString()}</span>
              </div>
              <div>{starsToRender.map((starToRender) => starToRender)}</div>
            </CardHeader>
            <CardBody>
              <Image
                src={bookRated.book.cover_url}
                width={108}
                height={152}
                alt={bookRated.book.name}
              />
              <BookInformations>
                <div>
                  <h4>{bookRated.book.name}</h4>
                  <span>{bookRated.book.author}</span>
                </div>
                <p>{bookRated.book.summary}</p>
              </BookInformations>
            </CardBody>
          </Card>
        );
      })}
    </BooksRatedContainer>
  );
}
