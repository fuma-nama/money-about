import {Box, Flex, Image, SimpleGrid, Text} from "@chakra-ui/react";
import GradientTitle from "../component/GradientTitle";
import yeecord from "assets/img/screen/yeecord.png"

export default function Introduce() {
    return <Flex gap={5} direction={{base: "column", "2xl": "row"}}>
        <Flex direction="column">
            <GradientTitle mb={{base: 5, xl: 10}}>12 Years of Coding Experience</GradientTitle>
            <Text fontSize={25}>
                I started to learn programming since I was 9
                <br/>
                I have many experience to frontend and frameworks development
            </Text>
            <Tags mt={{base: 5, "2xl": "5rem"}} />
        </Flex>
        <Image w={{base: "full", "2xl": "40rem"}} flex={1} src={yeecord} rounded="xl" objectFit="contain"/>
    </Flex>
}

function Tags(props) {
    const Tag = ({children}) => {
        return <Box
            zIndex="tooltip"
            boxShadow="15px 6px 76px #7551FF"
            textAlign="center"
            py={4}
            fontSize={20}
            bg="brand.400"
            rounded="lg">
            {children}
        </Box>
    }

    return <SimpleGrid {...props} columns={{base: 2, md: 4}} gridGap={5}>
        <Tag>Website</Tag>
        <Tag>Dashboard</Tag>
        <Tag>Backend</Tag>
        <Tag>Framework</Tag>
    </SimpleGrid>
}