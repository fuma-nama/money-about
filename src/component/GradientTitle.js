import {Heading} from "@chakra-ui/react";

export default function GradientTitle({children, ...props}) {
    return <Heading
        width="fit-content"
        as="h1"
        bgGradient='linear(to-l, brand.400, navy.400)'
        bgClip='text'
        fontSize={{base: "2.3rem", lg: "3rem"}}
        {...props}>
        {children}
    </Heading>
}