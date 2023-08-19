import { ReactNode } from "react";
import { DefaultLayoutContainer, LayoutWithPadding } from "./styles";
import Sidebar from "@/components/Sidebar";

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <DefaultLayoutContainer>
      <LayoutWithPadding>
        <Sidebar />
        {children}
      </LayoutWithPadding>
    </DefaultLayoutContainer>
  );
}
