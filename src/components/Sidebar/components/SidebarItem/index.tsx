import { ReactNode } from "react";
import { SidebarLink } from "./styles";
import { useRouter } from "next/router";

interface SidebarItemProps {
  path: string;
  children: ReactNode;
}

export default function SidebarItem({ children, path }: SidebarItemProps) {
  const router = useRouter();

  return (
    <SidebarLink href={path} className={path === router.route ? "active" : ""}>
      <div />
      {children}
    </SidebarLink>
  );
}
