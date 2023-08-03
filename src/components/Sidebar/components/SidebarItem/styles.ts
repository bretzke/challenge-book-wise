import { styled } from "@/styles";
import Link from "next/link";

export const SidebarLink = styled(Link, {
  display: "flex",
  alignItems: "center",
  gap: "$3",

  color: "$gray400",
  textDecoration: "none",

  div: {
    height: "1.5rem",
    width: "0.25rem",
    background: "transparent",
    marginRight: "4px",
    borderRadius: "$md",
  },

  "&:hover": {
    color: "$gray200",
  },

  "&.active": {
    fontWeight: "$bold",
    color: "$gray100",

    div: {
      background: "$gradient-vertical",
    },
  },
});
