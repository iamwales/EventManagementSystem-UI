import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        green: {
          "50": "#ecfdf6",
          "100": "#d2f9e8",
          "200": "#a9f1d6",
          "300": "#71e4c0",
          "400": "#37d0a5",
          "500": "#078068",
          "600": "#085d4c",
          "700": "#078068",
          "800": "#085d4c",
          "900": "#084c40",
          "950": "#032b25",
        },
      },
    },
  },
};
