import {Box, Flex, HStack, Image, SimpleGrid, Text} from "@chakra-ui/react";
import GradientTitle from "../component/GradientTitle";
//assets
import kanna_fly from "assets/img/stickers/kanna-fly.png"

//assets
import wave from "assets/img/Wave.svg"
import yeecord from "assets/img/clients/yeecord.png"

export default function Clients() {
    return <>
        <Image src={wave} w="full" h={{base: "10rem", md: "20rem"}}/>
        <HStack
            bgGradient="linear(to-b, navy.800, navy.900)"
            px={{base: 10, xl: "10rem"}}
            pb="10rem"
            gap={5}
        >
            <Image w="30rem" display={{base: "none", xl: "block"}} src={kanna_fly}/>
            <Box gap={10}>
                <GradientTitle>My Clients</GradientTitle>
                <Text fontSize={25}>Those nice Companies, Teams, Communities and Peoples I had worked for</Text>
                <ClientsGrid mt={10}/>
            </Box>

        </HStack>
    </>
}

function ClientsGrid({...props}) {
    const Client = ({src}) => {
        return <Image boxShadow="0px 0px 76px #3965FF" src={src} rounded="lg" w="full"/>
    }

    return <SimpleGrid maxW="50rem" columns={{base: 2, "3sm": 4}} gridGap={10} {...props}>
        <Client src={yeecord}/>
        <Client src="https://cdn.discordapp.com/icons/676806725105352704/44a4cf5902cacf85ab5489fcc103dddd.png"/>

    </SimpleGrid>
}