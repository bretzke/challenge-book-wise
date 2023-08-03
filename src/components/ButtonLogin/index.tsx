import Image from "next/image";
import { StylizedLoginButton } from "./styles";
import GithubIconSVG from "@/assets/icons/GitHub.svg";
import GoogleIconSVG from "@/assets/icons/Google.svg";
import RocketIconSVG from "@/assets/icons/RocketLaunch.svg";
import { useCallback } from "react";

interface LoginButtonProps {
  type: "google" | "github" | "guest";
  handleOnClick: () => void;
}

const LoginButton: React.FC<LoginButtonProps> = ({ type, handleOnClick }) => {
  const buttonInfo = useCallback(() => {
    switch (type) {
      case "github":
        return {
          icon: GithubIconSVG,
          label: "Entrar com Github",
        };
      case "google":
        return {
          icon: GoogleIconSVG,
          label: "Entrar com Google",
        };
      default:
        return {
          icon: RocketIconSVG,
          label: "Acessar como visitante",
        };
    }
  }, [type]);

  const { icon, label } = buttonInfo();

  return (
    <StylizedLoginButton onClick={handleOnClick}>
      <Image
        src={icon}
        quality={100}
        priority
        width={32}
        height={32}
        alt="Ícone da marca"
      />
      <span>{label}</span>
    </StylizedLoginButton>
  );
};

export default LoginButton;
