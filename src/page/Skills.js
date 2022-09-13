import {Box, Center, Collapse, Fade, Heading, Image, SimpleGrid, SlideFade, Text, VStack} from "@chakra-ui/react";
import bgImg from "assets/img/Skills-Bg.jpg"
import {SiJavascript, SiKotlin, SiPython, SiTypescript} from "react-icons/si";
import {useInView} from "framer-motion";
import {useRef} from "react";

export default function Skills() {
    const ref = useRef()
    const inView = useInView(ref)

    const shadow = {
        textShadow: "0px 0px 8px black"
    }

    return <VStack bgImg={bgImg} bgSize="cover" py="20rem" textAlign="center" px={10}>
            <Box
                rounded="xl"
                backdropFilter={{base: "none", md: "blur(20px)"}}
                bg={{md: "rgba(0, 0, 0, 0.3)"}}
                p={{md: 10}}>
                <SlideFade ref={ref} in={inView}>

                <Heading as="h1" fontSize={45} {...shadow}>Skills</Heading>
                <Text fontSize={20} {...shadow}>All the Languages I had learnt during many years</Text>
                <SkillsGrid />
                </SlideFade>

            </Box>
    </VStack>
}

function SkillsGrid() {
    const Skill = ({name, img}) => {
        return <Center maxW="10rem" flexDirection="column">
            <Image as={img} width="full"  />
            <Text mt={3}>{name}</Text>
        </Center>
    }

    return <SimpleGrid mt={10} mx="auto" bg="navy.700" p={5} columns={{base: 2, md: 4}} w="fit-content" gap={5} rounded="lg">
        <Skill name="Kotlin" img={SiKotlin} />
        <Skill name="JavaScript" img={SiJavascript} />
        <Skill name="Python" img={SiPython} />
        <Skill name="TypeScript" img={SiTypescript} />
    </SimpleGrid>
}