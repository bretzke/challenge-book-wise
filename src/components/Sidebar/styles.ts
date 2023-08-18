import { styled } from "@/styles";
import bgImage from "@/assets/sidebar-wallpaper.png";

export const SidebarContainer = styled("aside", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",

  height: "100vh",
  width: 232,

  paddingTop: "$10",
  paddingBottom: "$6",

  backgroundImage: `url(${bgImage.src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
});

export const SidebarContainerItems = styled("nav", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  marginTop: "4rem",
});
