import { styled } from "@/styles";

export const StylizedLoginButton = styled("button", {
  cursor: "pointer",
  width: "100%",

  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",

  padding: "$5 $6",
  gap: "$5",
  borderRadius: "$md",

  backgroundColor: "$gray600",
  color: "$gray200",

  fontSize: "$lg",
  fontWeight: "$bold",
});
