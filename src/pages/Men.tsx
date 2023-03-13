import { Wrap, Box, Card, CardBody, Image, Stack, Heading, Text, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'; 
import card1 from '../assets/card1.jpg'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.jpg'
import card4 from '../assets/card4.jpg'
import card5 from '../assets/card5.jpg'
import card6 from '../assets/card6.jpg'
import card7 from '../assets/card7.jpg'
import card8 from '../assets/card8.jpg'
import card9 from '../assets/card9.jpg'
import card10 from '../assets/card10.jpg'
import card11 from '../assets/card11.jpg'
import card12 from '../assets/card12.jpg'


export default function Men() {
    return (
        <>
            <Box className="men">
                <Box fontSize='6xl' mb='3' mt='10' ms='10'>
                Men's shoes
                </Box>
                <Box fontSize='2xl' mb='10' ms='10'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, assumenda veritatis ullam quas autem provident enim ea id aliquid deleniti.</p>
                </Box>
            </Box>
            <Box minH='40vh'
                backgroundColor='blackAlpha'
                w='100%'
                display='flex'
                h='auto'
                >
            <Wrap
                spacing='20px'
                display="flex"
                flexDirection="row"
                ms='5'
                gap='3'
                mt='5'
                >
                <Box>
                    <Card maxW='xs'>
                        <CardBody>
                                <a href="./shoeDetail">
                                <Image
                                boxSize='sm'
                                src={card1}
                                alt='Green Nike'
                                borderRadius='md'
                                />
                                </a>
                            <Stack mt='3' spacing='2'>
                                <a href="./shoeDetail">
                                <Heading size='sm' textAlign='center'>Sneaker 1</Heading>
                                </a>
                                <Text fontSize='xs'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, harum?
                                </Text>
                                <Text color='yellow.500' fontSize='xl'>
                                    $165
                                </Text>
                            </Stack>
                        </CardBody>
                    </Card>
                </Box>

                {/* <Box>
                    <Card maxW='xs'>
                        <CardBody>
                            <Image
                            boxSize='sm'
                            src={card2}
                            alt='Green Nike'
                            borderRadius='md'
                            />
                            <Stack mt='3' spacing='2'>
                            <Heading size='sm'>Sneaker 2</Heading>
                            <Text fontSize='xs'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, harum?
                            </Text>
                            <Text color='yellow.500' fontSize='xl'>
                                $165
                            </Text>
                            </Stack>
                        </CardBody>
                        <CardFooter mt='-5'>
                            <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='yellow' size='sm'>
                                Buy now
                            </Button>
                            <Button variant='ghost' colorScheme='yellow' size='sm'>
                                Add to cart
                            </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </Box>
                <Box>
                    <Card maxW='xs'>
                        <CardBody>
                            <Image
                            boxSize='sm'
                            src={card3}
                            alt='Green Nike'
                            borderRadius='md'
                            />
                            <Stack mt='3' spacing='2'>
                            <Heading size='sm'>Sneaker 3</Heading>
                            <Text fontSize='xs'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, harum?
                            </Text>
                            <Text color='yellow.500' fontSize='xl'>
                                $165
                            </Text>
                            </Stack>
                        </CardBody>
                        <CardFooter mt='-5'>
                            <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='yellow' size='sm'>
                                Buy now
                            </Button>
                            <Button variant='ghost' colorScheme='yellow' size='sm'>
                                Add to cart
                            </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </Box>
                <Box>
                    <Card maxW='xs'>
                        <CardBody>
                            <Image
                            boxSize='sm'
                            src={card4}
                            alt='Green Nike'
                            borderRadius='md'
                            />
                            <Stack mt='3' spacing='2'>
                            <Heading size='sm'>Sneaker 4</Heading>
                            <Text fontSize='xs'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, harum?
                            </Text>
                            <Text color='yellow.500' fontSize='xl'>
                                $165
                            </Text>
                            </Stack>
                        </CardBody>
                        <CardFooter mt='-5'>
                            <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='yellow' size='sm'>
                                Buy now
                            </Button>
                            <Button variant='ghost' colorScheme='yellow' size='sm'>
                                Add to cart
                            </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </Box>
                <Box>
                    <Card maxW='xs'>
                        <CardBody>
                            <Image
                            boxSize='sm'
                            src={card5}
                            alt='Green Nike'
                            borderRadius='md'
                            />
                            <Stack mt='3' spacing='2'>
                            <Heading size='sm'>Sneaker 5</Heading>
                            <Text fontSize='xs'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, harum?
                            </Text>
                            <Text color='yellow.500' fontSize='xl'>
                                $165
                            </Text>
                            </Stack>
                        </CardBody>
                        <CardFooter mt='-5'>
                            <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='yellow' size='sm'>
                                Buy now
                            </Button>
                            <Button variant='ghost' colorScheme='yellow' size='sm'>
                                Add to cart
                            </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </Box>
                <Box>
                    <Card maxW='xs'>
                        <CardBody>
                            <Image
                            boxSize='sm'
                            src={card7}
                            alt='Green Nike'
                            borderRadius='md'
                            />
                            <Stack mt='3' spacing='2'>
                            <Heading size='sm'>Sneaker 6</Heading>
                            <Text fontSize='xs'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, harum?
                            </Text>
                            <Text color='yellow.500' fontSize='xl'>
                                $165
                            </Text>
                            </Stack>
                        </CardBody>
                        <CardFooter mt='-5'>
                            <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='yellow' size='sm'>
                                Buy now
                            </Button>
                            <Button variant='ghost' colorScheme='yellow' size='sm'>
                                Add to cart
                            </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </Box>
                <Box>
                    <Card maxW='xs'>
                        <CardBody>
                            <Image
                            boxSize='sm'
                            src={card6}
                            alt='Green Nike'
                            borderRadius='md'
                            />
                            <Stack mt='3' spacing='2'>
                            <Heading size='sm'>Sneaker 7</Heading>
                            <Text fontSize='xs'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, harum?
                            </Text>
                            <Text color='yellow.500' fontSize='xl'>
                                $165
                            </Text>
                            </Stack>
                        </CardBody>
                        <CardFooter mt='-5'>
                            <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='yellow' size='sm'>
                                Buy now
                            </Button>
                            <Button variant='ghost' colorScheme='yellow' size='sm'>
                                Add to cart
                            </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </Box>
                <Box>
                    <Card maxW='xs'>
                        <CardBody>
                            <Image
                            boxSize='sm'
                            src={card8}
                            alt='Green Nike'
                            borderRadius='md'
                            />
                            <Stack mt='3' spacing='2'>
                            <Heading size='sm'>Sneaker 3</Heading>
                            <Text fontSize='xs'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, harum?
                            </Text>
                            <Text color='yellow.500' fontSize='xl'>
                                $165
                            </Text>
                            </Stack>
                        </CardBody>
                        <CardFooter mt='-5'>
                            <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='yellow' size='sm'>
                                Buy now
                            </Button>
                            <Button variant='ghost' colorScheme='yellow' size='sm'>
                                Add to cart
                            </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </Box>
                <Box>
                    <Card maxW='xs'>
                        <CardBody>
                            <Image
                            boxSize='sm'
                            src={card9}
                            alt='Green Nike'
                            borderRadius='md'
                            />
                            <Stack mt='3' spacing='2'>
                            <Heading size='sm'>Sneaker 3</Heading>
                            <Text fontSize='xs'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, harum?
                            </Text>
                            <Text color='yellow.500' fontSize='xl'>
                                $165
                            </Text>
                            </Stack>
                        </CardBody>
                        <CardFooter mt='-5'>
                            <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='yellow' size='sm'>
                                Buy now
                            </Button>
                            <Button variant='ghost' colorScheme='yellow' size='sm'>
                                Add to cart
                            </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </Box>
                <Box>
                    <Card maxW='xs'>
                        <CardBody>
                            <Image
                            boxSize='sm'
                            src={card11}
                            alt='Green Nike'
                            borderRadius='md'
                            />
                            <Stack mt='3' spacing='2'>
                            <Heading size='sm'>Sneaker 11</Heading>
                            <Text fontSize='xs'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, harum?
                            </Text>
                            <Text color='yellow.500' fontSize='xl'>
                                $165
                            </Text>
                            </Stack>
                        </CardBody>
                        <CardFooter mt='-5'>
                            <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='yellow' size='sm'>
                                Buy now
                            </Button>
                            <Button variant='ghost' colorScheme='yellow' size='sm'>
                                Add to cart
                            </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </Box>
                <Box>
                    <Card maxW='xs'>
                        <CardBody>
                            <Image
                            boxSize='sm'
                            src={card12}
                            alt='Green Nike'
                            borderRadius='md'
                            />
                            <Stack mt='3' spacing='2'>
                            <Heading size='sm'>Sneaker 12</Heading>
                            <Text fontSize='xs'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, harum?
                            </Text>
                            <Text color='yellow.500' fontSize='xl'>
                                $165
                            </Text>
                            </Stack>
                        </CardBody>
                        <CardFooter mt='-5'>
                            <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='yellow' size='sm'>
                                Buy now
                            </Button>
                            <Button variant='ghost' colorScheme='yellow' size='sm'>
                                Add to cart
                            </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>
                </Box> */}
            </Wrap>
            </Box>
        </>
    )
}