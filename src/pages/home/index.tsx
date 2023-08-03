import { NextSeo } from "next-seo";
import {
  ButtonsContainer,
  HomeContainer,
  ImageContainer,
  LoginContainer,
} from "./styles";
import Image from "next/image";
import { signIn } from "next-auth/react";
import homeWallpaper from "../../assets/home-wallpaper.png";
import LoginButton from "@/components/ButtonLogin";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Website | Home"
        description="Lorem ipsum dolor sit amet"
      />
      <HomeContainer>
        <ImageContainer>
          <Image
            src={homeWallpaper}
            quality={100}
            priority
            alt="Wallpaper divulgando a marca"
          />
        </ImageContainer>

        <LoginContainer>
          <div>
            <h1>Boas vindas!</h1>
            <p>Faça seu login ou acesse como visitante.</p>

            <ButtonsContainer>
              <LoginButton
                type="google"
                handleOnClick={async () => await signIn("google")}
              />
              <LoginButton
                type="github"
                handleOnClick={async () => await signIn("github")}
              />
              <LoginButton
                type="guest"
                handleOnClick={() => console.log("entrar como visitante")}
              />
            </ButtonsContainer>
          </div>
        </LoginContainer>
      </HomeContainer>
    </>
  );
}
