import {Box, Button, Center, chakra, Heading, Image, Link, shouldForwardProp, Text} from "@chakra-ui/react";
import bgImg from "assets/img/Contact-Bg.jpg"
import {FaDiscord} from "react-icons/fa";
import anya from "assets/img/stickers/anya-2.png"
import {discord} from "../varables";
import {isValidMotionProp, motion} from "framer-motion";

const Anime = chakra(motion.div, {
    /**
     * Allow motion props and non-Chakra props to be forwarded.
     */
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export function Contact() {
    const shadow = {
        textShadow: "0 0 8px black"
    }

    return <section id="contact">
        <Center
            position="relative"
            bgImg={bgImg}
            py="10rem"
            bgSize="cover"
            px={10}>
            <Box zIndex="tooltip" mt={{base: "20rem", xl: "10rem", "2xl": 0}}>
                <Heading as="h1" {...shadow}>Contact Me</Heading>
                <Text textShadow="dark-lg" fontSize={23} {...shadow}>You can talk to me though Discord or Email</Text>
                <Link href={discord}>
                    <Button mt={5} leftIcon={<FaDiscord width={40}/>} size="lg" variant="brand">My Discord</Button>
                </Link>
            </Box>
            <Anime
                top={0} right={{base: 10, lg: "5rem"}}
                position="absolute" maxW="none" w="30rem"
                animate={{
                    y: [20, -10, 20]
                }}
                transition={{
                    duration: 1,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "loop",
                }}>
                <Image w='full' src={anya} mt="-3rem"

                />
            </Anime>

        </Center>
    </section>
}