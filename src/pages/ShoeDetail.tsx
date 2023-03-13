import { Box, Button, Flex, VStack, Text, Image, Drawer, DrawerOverlay, DrawerHeader, DrawerContent, DrawerBody, useDisclosure, Divider } from "@chakra-ui/react";
import React from "react";
import card1 from '../assets/card1.jpg'



export default function ShoeDetail() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const [placement, setPlacement] = React.useState('right')

    return (
        <>
            <Box mt='5' w='100%' display='flex' flexDirection='row'>
                <Box w='60%' h='40vh'>
                    <Image
                    rounded='lg'
                    mx='auto'
                    objectFit="cover"
                    w='85%'
                    h='37vh'
                    // minH='35vh'
                    // maxH='37vh'
                    // height='auto'
                    objectPosition='center'
                    src={card1}
                    alt='card_image'
                    />
                </Box>

                <Box w='40%' h='40vh'>
                    <VStack>
                        <Box>
                            <Box ms='5' mb='3'>
                                <Text fontWeight='semibold' fontSize='3xl'>Sneaker 1</Text>
                            </Box>
                            <Box ms='5' mb='3'>
                                <Text fontSize='lg'>Brand / Color</Text>
                            </Box>
                            <Box ms='5' mb='3'>
                                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, maiores rem sequi tenetur suscipit quos?</Text>
                            </Box>
                            <Box ms='5' mb='3'>
                                <Text fontWeight='semibold' fontSize='3xl' color='yellow.500'>$165</Text>
                            </Box>
                        </Box>
                        <Box w='95%' h='20vh' outline='1px solid gray' rounded='5' overflow='scroll' backgroundColor='blackAlpha.400'>
                            <Flex flexWrap='wrap' gap='7' p='4' mt='2' justifyContent='center'>
                                <Box>
                                    <Button size='lg' w='20'>4</Button>
                                </Box>
                                <Box>
                                    <Button size='lg' w='20'>4.5</Button>
                                </Box>
                                <Box>
                                    <Button size='lg' w='20'>5</Button>
                                </Box>
                                <Box>
                                    <Button size='lg' w='20'>5.5</Button>
                                </Box>
                                <Box>
                                    <Button size='lg' w='20'>6</Button>
                                </Box>
                                <Box>
                                    <Button size='lg' w='20'>6.5</Button>
                                </Box>
                                <Box>
                                    <Button size='lg' w='20'>7</Button>
                                </Box>
                                <Box>
                                    <Button size='lg' w='20'>7.5</Button>
                                </Box>
                                <Box>
                                    <Button size='lg' w='20'>8</Button>
                                </Box>
                                <Box>
                                    <Button size='lg' w='20'>8.5</Button>
                                </Box>
                                <Box>
                                    <Button size='lg' w='20'>9</Button>
                                </Box>
                                <Box>
                                    <Button size='lg' w='20'>9.5</Button>
                                </Box>
                                <Box>
                                    <Button size='lg' w='20'>10</Button>
                                </Box>
                                <Box>
                                    <Button size='lg' w='20'>10.5</Button>
                                </Box>
                                <Box>
                                    <Button size='lg' w='20'>11</Button>
                                </Box>
                                <Box>
                                    <Button size='lg' w='20'>11.5</Button>
                                </Box>
                                <Box>
                                    <Button size='lg' w='20'>12</Button>
                                </Box>
                                <Box>
                                    <Button size='lg' w='20'>12.5</Button>
                                </Box>
                                <Box>
                                    <Button size='lg' w='20'>13</Button>
                                </Box>
                                <Box>
                                    <Button size='lg' w='20'>13.5</Button>
                                </Box>
                            </Flex>
                        </Box>
                        <Box w='100%' display='flex' justifyContent='center'>
                            <Button colorScheme='yellow' w='80' borderRadius='25px' mt='5' onClick={onOpen}>
                                Add to Cart
                            </Button>


                    {/* Drawer Card */}
                            <Drawer placement='right' onClose={onClose} isOpen={isOpen} size='md'>
                                <DrawerOverlay />
                                <DrawerContent>
                                <DrawerHeader borderBottomWidth='1px'>Cart</DrawerHeader>
                                <DrawerBody>
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
                                    <Divider mb='5' />
                                    <Box 
                                        w='100%' 
                                        display='flex' 
                                        justifyContent='center' 
                                        mb='4'
                                        >
                                        <Button colorScheme='gray' w='80' borderRadius='25px' mt='5' onClick={onClose}>
                                            Continue Shopping
                                        </Button>
                                    </Box>
                                    <Box w='100%' display='flex' justifyContent='center' mb='4'>
                                        <a href="./cart">
                                        <Button 
                                            colorScheme='yellow' 
                                            w='80' 
                                            borderRadius='25px' 
                                            mt='5' 
                                            onClick={onClose}
                                            >
                                            View cart & check out
                                        </Button>
                                        </a>
                                    </Box>
                                </DrawerBody>
                                </DrawerContent>
                            </Drawer>
                    {/* End of Drawer Card */}

                        </Box>
                    </VStack>
                </Box>
            </Box>

            <Box ms='10' mt='10'>
                <Text fontWeight='semibold' fontSize='4xl'>OVERVIEW</Text>
            </Box>
            <Box ms='10' mt='10' w='60%' mb='20'>
                <Text fontSize='xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, ratione soluta! Laboriosam cupiditate aliquid necessitatibus ipsa quam sequi velit labore accusamus quasi. Quibusdam qui porro sequi cupiditate, vitae nemo aspernatur.</Text>
            </Box>
        </>
    )
}