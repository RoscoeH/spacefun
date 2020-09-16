/** @jsx jsx */
import { jsx } from "theme-ui";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";
import Logo from "./components/logo";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div sx={{ bg: "background" }}>
        <Logo>SPACEFUN</Logo>
      </div>
    </ThemeProvider>
  );
}

export default App;
