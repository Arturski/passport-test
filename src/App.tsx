import { ChakraProvider, Box, Container} from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PassportProvider } from "./context/PassportContext";
import Login from './page/Login';
import Page from "./page/Page";


function App() {

  return (
    <ChakraProvider>
      
      <PassportProvider>
        <Box w={'100vw'} minH="100vh" > {/* Set a background color and minimum height */}
          <Container p={0} maxW="container.2xl">
          <Router>
            <Routes>
                  <Route path="/" element={<Page />} />
                  <Route path="/login" element={<Login />} />
            </Routes>
          </Router>
          </Container>
        </Box>
      </PassportProvider>
    </ChakraProvider>
  );
}

export default App;
