import { Box, Grid, GridItem, HStack, Input, List, ListItem, ListIcon, Text,  } from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function Footer() {
    return (
        <Box 
            className='footer' 
            bg='blackAlpha.900'
            minH='40vh'
            w='100%'
            mt='5'
            >
            <Box className='foot_one'>
                <Grid
                    minH='40vh'
                    templateColumns='repeat(3, 1fr)'
                    gap={2}
                    pt='10'
                    >
                        <GridItem 
                            colSpan={1} 
                            minH='33vh'
                            ms='10'
                            >
                            <Text mb='4' color='whiteAlpha.800' fontSize='3xl' fontWeight='bold'>Sign up now</Text>
                            <Text mb='10' color='whiteAlpha.800' fontSize='xl'>Stay in the loop with exclusive offers and product reviews</Text>
                            <Input mb='8' placeholder="Email" isRequired variant="unstyled" borderBottom='1px solid white' rounded='none' type="email" color='whiteAlpha.800'>
                            </Input>
                            <List lineHeight='10' mb='10'>
                                <ListItem color='whiteAlpha.800'>
                                    <NavLink to="/create">
                                        <ListIcon as={EmailIcon} color="whiteAlpha.800"me='8'/>
                                        Contact us
                                    </NavLink>
                                </ListItem>
                            <Text mt='10' color='whiteAlpha.800'>United States of America</Text>
                            <Box
                                minH='2vh'
                                display='flex' 
                                flexDirection='row'
                                mt='8'
                                mb='10'
                                fontSize='xs'
                                lineHeight='3'
                                >
                                <Text color='whiteAlpha.600'>Terms & conditions</Text>
                                <Text color='whiteAlpha.600' ms='8'>Privacy policy</Text>
                                <Text color='whiteAlpha.600' ms='8'>Accessibility</Text>
                                <Text color='whiteAlpha.600' ms='8'>Do not sell my personal information</Text>
                                <Text color='whiteAlpha.600' ms='8'>Consent Settings</Text>
                            </Box>
                            <Box
                                minH='2vh'
                                display='flex' 
                                flexDirection='row'
                                ms='16'
                                >
                                <List>
                                <ListIcon as={FaFacebookF} color="whiteAlpha.800"me='8'/>
                                </List>
                                <List>
                                <ListIcon as={FaInstagram} color="whiteAlpha.800"me='8'/>
                                </List>
                                <List>
                                <ListIcon as={FaLinkedinIn} color="whiteAlpha.800"me='8'/>
                                </List>
                                <List>
                                <ListIcon as={FaTwitter} color="whiteAlpha.800"me='8'/>
                                </List>
                                <List>
                                <ListIcon as={FaYoutube} color="whiteAlpha.800"me='8'/>
                                </List>
                            </Box>
                        
                            </List>
                        </GridItem>
                        <GridItem 
                            colSpan={1} 
                            minH='33vh'
                            lineHeight='10'
                            mx='auto'
                            >
                            <Text color='whiteAlpha.800' fontSize='2xl' fontWeight='bold'>Order & return status</Text>
                            <Text color='whiteAlpha.800' fontSize='2xl' fontWeight='bold'>Refer a friend</Text>
                            <Text color='whiteAlpha.800' fontSize='2xl' fontWeight='bold'>Gift cards</Text>
                            <Text color='whiteAlpha.800' fontSize='2xl' fontWeight='bold'>Stores</Text>
                        </GridItem>
                        <GridItem colSpan={1}>
                            <HStack gap={5}>
                                <Box 
                                    minH='33vh'
                                    lineHeight='8'
                                    ms='5'
                                    >
                                    <Text color='whiteAlpha.800' fontSize='2xl' fontWeight='bold'>Help & support</Text>
                                    <Text color='whiteAlpha.800'>Contact Us</Text>
                                    <Text color='whiteAlpha.800'>FAQs</Text>
                                    <Text color='whiteAlpha.800'>Returns & exchanges</Text>
                                    <Text color='whiteAlpha.800'>Shipping & Delivery</Text>
                                    <Text color='whiteAlpha.800'>Warranty claim form</Text>
                                    <Text color='whiteAlpha.800'>Size guide</Text>
                                </Box>
                                <Box
                                    minH='33vh'
                                    lineHeight='8'
                                    >
                                    <Text color='whiteAlpha.800' fontSize='2xl' fontWeight='bold'>About On</Text>
                                    <Text color='whiteAlpha.800'>Careers</Text>
                                    <Text color='whiteAlpha.800'>Investors</Text>
                                    <Text color='whiteAlpha.800'>Press & media</Text>
                                    <Text color='whiteAlpha.800'>Backstage</Text>
                                </Box>
                            </HStack>
                        </GridItem>
                </Grid>  
            </Box>
        </Box>
    )
}