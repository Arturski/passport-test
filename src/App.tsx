import { ChakraProvider, Box, Container } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PassportProvider } from "./context/PassportContext";
import Login from './page/Login';
import Page from "./page/Page";
import { DrawerContextProvider } from "./context/DrawerContext"; // Import the provider
import { MarketProvider } from "./context/MarketContext";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <PassportProvider>
          <MarketProvider>
            <DrawerContextProvider> {/* Use DrawerContextProvider here */}
              <Box w={'100vw'} minH="100vh">
                <Container p={0} maxW="container.2xl">
                  <Routes>
                    <Route path="/" element={<Page />} />
                    <Route path="/login" element={<Login />} />
                  </Routes>
                </Container>
              </Box>
            </DrawerContextProvider>
          </MarketProvider>
        </PassportProvider>
      </Router>
    </ChakraProvider>
  );
}

export default App;
