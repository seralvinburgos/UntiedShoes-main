import { Box, Flex, Image, VStack, Text } from "@chakra-ui/react"

import card1 from '../assets/card1.jpg'


export default function DrawerCard() {
    return (
        <>
            <Box mx='auto' w='100%' h='160px' mt='4' mb='5'>
                <Flex>
                    <Box w='40%' h='175px'>
                    <Image
                        rounded='lg'
                        objectFit="cover"
                        w='85%'
                        h='160px'
                        objectPosition='center'
                        src={card1}
                        alt='card_image'
                        />
                    </Box>
                    
                    <Box w='60%' h='175px'>
                        <VStack alignItems='start' mt='2'>
                            <Text fontWeight='semibold'>
                                Sneaker 1
                            </Text>
                            <Text>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, explicabo.
                            </Text>
                            <Text border='1px' rounded='5' w='60px' h='9' pt='1' backgroundColor='white' color='blackAlpha.900' align='center'>
                                Size
                            </Text>
                        </VStack>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}