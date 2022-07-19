import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ChakraProvider, ColorModeScript, useColorMode} from '@chakra-ui/react'
import theme from "./theme/theme";
import "assets/css/App.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode="dark"/>

            <ForceDarkMode>
                <App/>
            </ForceDarkMode>
        </ChakraProvider>
    </React.StrictMode>
);

function ForceDarkMode({children}) {
    const {colorMode, setColorMode} = useColorMode()

    if (colorMode !== "dark") {
        setColorMode("dark")
    }

    return children
}