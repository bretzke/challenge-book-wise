import { globalCss } from ".";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    border: "none",
  },

  body: {
    "-webkit-font-smoothing": "antialiased",
    fontFamily: "Nunito Sans",
    backgroundColor: "$gray800",
    color: "$white",
  },
});
