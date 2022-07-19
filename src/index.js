import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import theme from "./theme/theme";
import "assets/css/App.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider theme={theme}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ChakraProvider>
);