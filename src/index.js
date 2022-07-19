import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ChakraProvider, ColorModeProvider} from '@chakra-ui/react'
import theme from "./theme/theme";
import "assets/css/App.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeProvider value="dark">
                <App/>
            </ColorModeProvider>
        </ChakraProvider>
    </React.StrictMode>
);