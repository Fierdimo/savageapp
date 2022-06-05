/* eslint-disable no-restricted-globals */
import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline } from "@mui/material";
import Inicio from "./inicio";
import { theme } from "./Theme";


function App() {
  const backgroundHeight = screen.height
  const backgroundHome = "/images/background.jpg";


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        style={{
          backgroundImage: `url(${backgroundHome})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          overflow: "hidden",
        }}
      >
           <Inicio backgroundHeight={backgroundHeight}/>
      </Box>
    </ThemeProvider>

  );
}

export default App;
