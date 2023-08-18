import logoSVG from "@/assets/logo.svg";
import Image from "next/image";
import { SidebarContainer, SidebarContainerItems } from "./styles";
import { Binoculars, ChartLineUp, User } from "@phosphor-icons/react";
import SidebarItem from "./components/SidebarItem";
import { useSession } from "next-auth/react";

export default function Sidebar() {
  const session = useSession();

  function renderLoginOrLogoutButton() {
    switch (session.status) {
      case "authenticated":
        return <p>Autenticado</p>;
      case "loading":
        return;
      default:
        return <p>Não logado</p>;
    }
  }

  return (
    <SidebarContainer>
      <div>
        <Image src={logoSVG} alt="Logo Book Wise" priority />

        <SidebarContainerItems>
          <SidebarItem path="/books">
            <ChartLineUp size={24} weight="regular" />
            Início
          </SidebarItem>
          <SidebarItem path="/books/explore">
            <Binoculars size={24} weight="regular" />
            Explorar
          </SidebarItem>
          {session.status === "authenticated" && (
            <SidebarItem path="/profile">
              <User size={24} weight="regular" />
              Perfil
            </SidebarItem>
          )}
        </SidebarContainerItems>
      </div>

      <div>{renderLoginOrLogoutButton()}</div>
    </SidebarContainer>
  );
}
