import React from "react";
import { ThemeProvider, Styled } from "theme-ui";
import theme from "../src/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Styled.root>
        <Story />
      </Styled.root>
    </ThemeProvider>
  ),
];
