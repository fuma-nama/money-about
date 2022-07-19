import {Box, Button, Flex, Heading, Image, Link, SimpleGrid, Text, VStack} from "@chakra-ui/react";
import GradientTitle from "../component/GradientTitle";
import {BsGithub} from "react-icons/bs";
//assets
import bjda from "assets/img/projects/bjda.svg"
import city from "assets/img/City.png";
import yeecord_home from "assets/img/projects/yeecord.png"
import yeecord from "assets/img/screen/yeecord.png"
import {github} from "../varables";

export default function Projects() {
    return <Flex direction={{base: "column", "2xl": "row"}} bgGradient="linear(to-b, #2a0544, navy.800)" pb="10rem">
        <Image mt="-16%" src={city} w={{base: "full", "2xl": "35rem"}} flex={1} objectFit="contain" />
        <Box align="start" px={{base: 10, md: 20}}>
            <GradientTitle>My Projects</GradientTitle>
            <Text fontSize={24}>
                I like to do some cool open source projects,
                <br />
                Including frameworks and applications
            </Text>
            <Link href={github}>
                <Button leftIcon={<BsGithub width={30} />} size="lg" mt={5}>My Github</Button>
            </Link>

            <ProjectsGrid columns={{base: 1, lg: 3}} />
        </Box>
    </Flex>
}

function ProjectsGrid(props) {
    const Project = ({name, img, description}) => {
        return <Box rounded="xl" bg="navy.700" p={5}>
            <Image src={img} maxH="10rem" w="full" objectFit="cover" />
            <Heading mt={5} as="h2">{name}</Heading>
            <Text>{description}</Text>
        </Box>
    }
    return <SimpleGrid columns={3} gap={5} mt={20} {...props}>
        <Project name="BJDA" img={bjda} description="A Discord Bot framework written in Kotlin" />
        <Project name="Yeecord Dashboard" img={yeecord} description="The dashboard of Yeecord" />
        <Project name="Yeecord HomePage" img={yeecord_home} description="Yeecord Home Page" />
    </SimpleGrid>
}