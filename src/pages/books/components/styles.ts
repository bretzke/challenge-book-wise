import { styled } from "@/styles";
import Image from "next/image";

export const BooksRatedContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

export const RoundedBorderImage = styled(Image, {
  borderRadius: 99999,
});

export const Card = styled("div", {
  backgroundColor: "$gray700",
  padding: "$6",
  display: "flex",
  flexDirection: "column",
  gap: "$8",
});

export const CardHeader = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: "$4",

  svg: {
    fill: "$purple100",
  },
});

export const CardBody = styled("div", {
  display: "flex",
  alignItems: "flex-start",
  gap: "$5",
});

export const BookInformations = styled("div", {
  display: "flex",
  flexDirection: "column",
  maxWidth: 300,
  gap: "$5",
});
