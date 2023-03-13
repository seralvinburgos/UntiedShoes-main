import { Box, Button, Divider, Input, Text, VStack, Menu, MenuButton, MenuList, MenuItem, Flex, Image } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import card1 from '../assets/card1.jpg'


export default function CartCard() {
    return (
        <>
            <Box w='95%' h='10vh' display='flex' flexDirection='row' backgroundColor='blackAlpha.400'>
                <Box w='20%' h='10vh'>
                    <Image
                    objectFit="cover"
                    w='95%'
                    h='10vh'
                    objectPosition='center'
                    src={card1}
                    alt='card_image'
                    />
                </Box>
                <Box w='70%' h='10vh'>
                    <VStack alignItems='start' ms='4' mt='5'>
                        <Text fontWeight='semibold'> 
                            Sneaker 1
                        </Text>
                        <Text mb='2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, doloremque.
                        </Text>
                        <Flex gap='2'>
                            <Box mt='5'>
                                <Text border='1px' rounded='5' w='80px' h='9' align='center' pt='1' backgroundColor='white' color='blackAlpha.900'>
                                    Size
                                </Text>
                            </Box>
                            <Box mt='5' ms='10'>
                                <Text border='1px' rounded='5' w='80px' h='9' align='center' pt='1' backgroundColor='white' color='blackAlpha.900'>
                                    Qty
                                </Text>
                            </Box>
                            <Box mt='5'>
                                <Menu>
                                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />} h='9' w='2'>
                                    
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem>1</MenuItem>
                                        <MenuItem>2</MenuItem>
                                        <MenuItem>3</MenuItem>
                                        <MenuItem>4</MenuItem>
                                        <MenuItem>5</MenuItem>
                                        <MenuItem>6</MenuItem>
                                        <MenuItem>7</MenuItem>
                                        <MenuItem>8</MenuItem>
                                        <MenuItem>9</MenuItem>
                                        <MenuItem>10</MenuItem>
                                    </MenuList>
                                </Menu>
                            </Box>
                            <Box ms='10' mt='5'>
                                <Button colorScheme='red' h='9'>Remove</Button>
                            </Box>
                        </Flex>
                    </VStack>
                </Box>
            </Box>
        </>
    )
}