import { Box, Button, Divider, Input, Text, VStack, Menu, MenuButton, MenuList, MenuItem, Flex, Image, ModalOverlay, useDisclosure, Modal, ModalContent, useColorModeValue, Heading, Stack, Radio, RadioGroup } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import React from "react";
import card1 from '../assets/card1.jpg'

export default function Cart () {

    const OverlayOne = () => (
        <ModalOverlay
            bg='blackAlpha.100'
            backdropFilter='blur(10px) hue-rotate(20deg)'
        />
        )
        
        const { isOpen, onOpen, onClose } = useDisclosure()
        const [overlay, setOverlay] = React.useState(<OverlayOne />)

        const formBackground = useColorModeValue("white", "gray.700")

    return (
        <>
        <Box display='flex' flexDirection='row' minH='55vh' gap='2'>
            <Box w='70%' h='40vh' mt='5'>
            <VStack>
                <Box w='100%'>
                    <Text fontSize='3xl' fontWeight='semibold' ps='5'>
                        Cart
                    </Text>
                </Box>

        /** Cart Card */
                <Box w='95%' h='10vh' display='flex' flexDirection='row' backgroundColor='blackAlpha.4s00'>
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
        /** End of Cart Card */
        

            </VStack>
            </Box>


            <Box w='30%' h='vh' mt='5' backgroundColor='blackAlpha.400' rounded='lg'>
            <VStack>
                <Box w='100%'>
                    <Text fontSize='3xl' fontWeight='semibold' ps='5'>
                        Summary
                    </Text>
                    <Box display='flex' flexDirection='row' justifyContent='space-between' p='5' gap='3' rounded={6} mb='2'>
                        <Input
                            placeholder='COUPON CODE'
                            variant="filled"
                            type='text'
                            w='60'
                        />
                        <Button w='20' colorScheme='yellow' borderRadius='25px'>Add</Button>
                    </Box>
                    <Box display='inline-flex' justifyContent='space-between' px='5' w='100%' mb='4'>
                        <Text>Subtotal</Text>
                        <Text>price</Text>
                    </Box>
                    <Box display='inline-flex' justifyContent='space-between' px='5' w='100%' mb='4'>
                        <Text>Estimated Shipping & Handling</Text>
                        <Text>price</Text>
                    </Box>
                    <Box display='inline-flex' justifyContent='space-between' px='5' w='100%' mb='5'>
                        <Text>Estimated Tax</Text>
                        <Text>price</Text>
                    </Box>
                    <Divider mb='5'/>
                    <Box display='inline-flex' justifyContent='space-between' px='5' w='100%' mb='5'>
                        <Text>Total</Text>
                        <Text>price</Text>
                    </Box>
                    <Divider mb='5'/>


                    <Box w='100%' display='flex' justifyContent='center'>
                        <Button 
                            w='80' 
                            colorScheme='yellow' 
                            borderRadius='25px'
                            onClick={() => {
                            setOverlay(<OverlayOne />)
                            onOpen()
                            }}
                        >
                            Checkout
                        </Button>
                        <Modal isCentered isOpen={isOpen} onClose={onClose} size='5xl'>
                            {overlay}
                            <ModalContent minH='75vh' overflow='scroll'>
                                <Flex h='100%' w='100%' flexDirection='row'>
                                    <Box w='65%' >
                                        <Flex direction="column">
                                            <Heading fontSize='3xl' m='6' ps='2' fontWeight='semibold'>Checkout</Heading>
                                            <Input
                                            placeholder="Enter your email"
                                            variant="filled"
                                            type="email"
                                            mx='auto'
                                            w='91%'
                                            />
                                            <Heading fontSize='2xl' m='6' ps='2' fontWeight='semibold' color='goldenrod'>Shipping</Heading>
                                            <Flex w='100%' gap='2' justifyContent='center'>
                                                <Input
                                                placeholder="First Name"
                                                variant="filled"
                                                mb={3}
                                                type="email"
                                                w='45%'
                                                />
                                                <Input
                                                placeholder="Last Name"
                                                variant="filled"
                                                mb={3}
                                                type="email"
                                                w='45%'
                                                />
                                            </Flex>
                                            <Input
                                            placeholder="Street Address"
                                            variant="filled"
                                            mb={3}
                                            type="text"
                                            mx='auto'
                                            w='91%'
                                            />
                                            <Input
                                            placeholder="Street Address (continued)"
                                            variant="filled"
                                            mb={3}
                                            type="text"
                                            mx='auto'
                                            w='91%'
                                            />
                                            <Input
                                            placeholder="City"
                                            variant="filled"
                                            mb={3}
                                            type="text"
                                            mx='auto'
                                            w='91%'
                                            />
                                            <Flex w='100%' gap='2' justifyContent='center'>
                                                <Input
                                                placeholder="State"
                                                variant="filled"
                                                mb={3}
                                                type="email"
                                                w='45%'
                                                />
                                                <Input
                                                placeholder="ZIP Code"
                                                variant="filled"
                                                mb={3}
                                                type="email"
                                                w='45%'
                                                />
                                            </Flex>
                                            <Input
                                            placeholder="Country"
                                            variant="filled"
                                            mb={3}
                                            type="text"
                                            mx='auto'
                                            w='91%'
                                            />
                                            <Input
                                            placeholder="Phone Number"
                                            variant="filled"
                                            type="text"
                                            mx='auto'
                                            w='91%'
                                            />
                                            <Heading fontSize='2xl' m='6' ps='2' fontWeight='semibold' color='goldenrod'>Delivery Method</Heading>

                                            <RadioGroup defaultValue='0' backgroundColor='blackAlpha.200' w='91%' mx='auto' rounded='lg'>
                                            <Stack w='100%'>
                                                <Box h='50px' w='91%' mx='auto' display='inline-flex' justifyContent='space-between'>
                                                    <Box>
                                                    <Radio size='md' name='1' colorScheme='yellow' ps='2' pt='3' value='1'>
                                                        Standard Delivery
                                                    </Radio>
                                                    </Box>
                                                        <Box pt='3' pe='5'>
                                                            Free
                                                        </Box>
                                                </Box>
                                            </Stack>
                                            <Stack w='100%'>
                                                <Box h='50px' w='91%' mx='auto' display='inline-flex' justifyContent='space-between'>
                                                    <Box>
                                                    <Radio size='md' name='1' colorScheme='yellow' ps='2' pt='3' value='2'>
                                                        Express Delivery
                                                    </Radio>
                                                    </Box>
                                                        <Box pt='3' pe='5'>
                                                            $15
                                                        </Box>
                                                </Box>
                                            </Stack>
                                            <Stack w='100%'>
                                                <Box h='50px' w='91%' mx='auto' display='inline-flex' justifyContent='space-between'>
                                                    <Box>
                                                    <Radio size='md' name='1' colorScheme='yellow' ps='2' pt='3' value='3'>
                                                        Priority Delivery
                                                    </Radio>
                                                    </Box>
                                                        <Box pt='3' pe='5'>
                                                            $25
                                                        </Box>
                                                </Box>
                                            </Stack>
                                            </RadioGroup>

                                            <Heading fontSize='2xl' m='6' ps='2' fontWeight='semibold' color='goldenrod'>Payment</Heading>
                                            <Flex w='91%' h='20vh' backgroundColor='blackAlpha.200' mx='auto' flexDirection='column' rounded='lg'>
                                                <Box>
                                                    <Heading fontSize='md' m='5'>Pay By Card</Heading>
                                                </Box>
                                                    <Input
                                                    placeholder="Card Number"
                                                    variant="filled"
                                                    mb={3}
                                                    type="text"
                                                    mx='auto'
                                                    w='80%'
                                                    />
                                                    <Flex w='100%' gap='2' justifyContent='center'>
                                                        <Input
                                                        placeholder="Expiry Date  MM/YY"
                                                        variant="filled"
                                                        mb={3}
                                                        type="number"
                                                        w='39.5%'
                                                        />
                                                        <Input
                                                        placeholder="CVC / CVV"
                                                        variant="filled"
                                                        mb={3}
                                                        type="number"
                                                        w='39.5%'
                                                        />
                                                    </Flex>
                                                    <Input
                                                    placeholder="Name on card"
                                                    variant="filled"
                                                    mb={3}
                                                    type="text"
                                                    mx='auto'
                                                    w='80%'
                                                    />
                                                    <Button w='80%' colorScheme='yellow' borderRadius='25px' mx='auto' mt='6'>Place Your Order</Button>
                                            </Flex>
                                        </Flex>
                                    </Box>

                                            {/* <Input
                                            placeholder="*******"
                                            variant="filled"
                                            mb={6}
                                            type="password"
                                            />
                                            <Button colorScheme="yellow" mb={6}>Log in</Button> */}
                                    
                                    <Flex w='35%' backgroundColor='blackAlpha.300' minH='75vh' flexDirection='column'>
                                        <Box>
                                            <Box mx='auto' h='155px' mt='4' mb='4' ms='3' backgroundColor='blackAlpha.300'>
                                                <Flex>
                                                    <Box w='35%' h='150px' display='flex' alignItems='center' justifyContent='center'>
                                                    <Image
                                                        rounded='lg'
                                                        objectFit="cover"
                                                        w='85%'
                                                        h='140px'
                                                        objectPosition='center'
                                                        src={card1}
                                                        alt='card_image'
                                                        />
                                                    </Box>
                                                    
                                                    <Box w='60%' h='150px'>
                                                        <VStack alignItems='start' mt='1'>
                                                            <Text fontWeight='semibold'>
                                                                Sneaker 1
                                                            </Text>
                                                            <Text fontSize='sm'>
                                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, explicabo.
                                                            </Text>
                                                            <Text border='1px' rounded='5' w='50px' h='9' pt='2' backgroundColor='white' color='blackAlpha.900' align='center' fontSize='sm'>
                                                                Size
                                                            </Text>
                                                        </VStack>
                                                    </Box>
                                                </Flex>
                                            </Box>
                                        </Box>

                                        <Box>
                                            <Box display='inline-flex' justifyContent='space-between' px='5' w='100%' mb='4'>
                                                <Text>Subtotal</Text>
                                                <Text>price</Text>
                                            </Box>
                                            <Box display='inline-flex' justifyContent='space-between' px='5' w='100%' mb='4'>
                                                <Text>Estimated Shipping & Handling</Text>
                                                <Text>price</Text>
                                            </Box>
                                            <Box display='inline-flex' justifyContent='space-between' px='5' w='100%' mb='5'>
                                                <Text>Estimated Tax</Text>
                                                <Text>price</Text>
                                            </Box>
                                            <Divider mb='5'/>
                                            <Box display='inline-flex' justifyContent='space-between' px='5' w='100%' mb='5'>
                                                <Text>Total</Text>
                                                <Text>price</Text>
                                            </Box>
                                        </Box>
                                    </Flex>
                                </Flex>
                            </ModalContent>
                        </Modal>
                    </Box>
                </Box>
            </VStack>
            </Box>
        </Box>
        </>
    )
}