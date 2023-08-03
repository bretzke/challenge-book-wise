import { styled } from "@/styles";

export const HomeContainer = styled("div", {
  padding: "$5",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100vh",
});

export const ImageContainer = styled("div", {
  width: "35vw",
  height: "100%",
  position: "relative",

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
});

export const LoginContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "65vw",

  div: {
    h1: {
      color: "$gray100",
      fontSize: "$2xl",
    },

    p: {
      color: "$gray200",
      fontSize: "$md",
    },
  },
});

export const ButtonsContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  marginTop: "$10",
});
