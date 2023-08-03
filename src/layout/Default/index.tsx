import { ReactNode } from "react";
import { DefaultLayoutContainer } from "./styles";
import Sidebar from "@/components/Sidebar";

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <DefaultLayoutContainer>
      <Sidebar />
      {children}
    </DefaultLayoutContainer>
  );
}
