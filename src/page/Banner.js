import {Box, Button, Heading, HStack, Image, Link, Text} from "@chakra-ui/react";
//assets
import banner from "assets/img/Banner.jpg";
import anya from "assets/img/anya.png";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";

export default function Banner() {
    return <HStack
        position="relative"
        bgImg={banner}
        height="50rem"
        pt="20rem"
        px={{base: 10, md: "10rem", xl: "20rem"}}
        textAlign={{base: "center", xl: "left"}}>
        <Box
            w="fit-content"
            h="full"
            position="relative"
        >

            <Heading as="h1" fontSize="50px">
                I am MONEY
            </Heading>
            <Text fontSize="25px">
                I am a Full-Stack Engineer who has been coding for 12 years
            </Text>
            <AnchorLink href='#contact'>
                <Button mt={7} variant="brand" size="lg">Contact Me</Button>
            </AnchorLink>

            <Image
                src={anya} width={{base: "10rem", md: "14rem", "2xl": "18rem"}}
                bottom={0} position="absolute"
                right={{base: "-30px", "2xl": "-18rem"}} transform="rotateY(180deg)"/>
        </Box>
    </HStack>
}