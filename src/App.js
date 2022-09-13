import Banner from "./page/Banner";
import Introduce from "./page/Introduce";
import {Box} from "@chakra-ui/react";
import Clients from "./page/Clients";
import Skills from "./page/Skills";
import Projects from "./page/Projects";
import {Contact} from "./page/Contact";

function App() {
    return (
        <>
            <Banner/>
            <Box px={{base: 10, lg: 40}} py={24}>
                <Introduce/>
            </Box>
            <Clients />
            <Skills />
            <Projects />
            <Contact />
        </>
    );
}

export default App;
