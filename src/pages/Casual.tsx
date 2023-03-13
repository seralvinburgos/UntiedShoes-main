import { Box, Flex, Image } from "@chakra-ui/react";
import casualMain from "../assets/casualMain.jpg"

export default function Casual () {
    return (
        <>
            <Flex gap='4'>
            <Box className="men" w='40%' px='10'>
                <Box fontSize='6xl' fontWeight='semibold' mb='3' my='20' ms='10'>
                Casual Wear
                </Box>
                <Box fontSize='2xl' mb='10' ms='10'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, assumenda veritatis ullam quas autem provident enim ea id aliquid deleniti.</p>
                </Box>
            </Box>
            <Box w='60%'> 
                <Image
                    objectFit='cover'
                    height='auto'
                    rounded='4'
                    pe='10'
                    src={casualMain} alt="casual_image" />
            </Box>
            </Flex>
        </>
    )
}