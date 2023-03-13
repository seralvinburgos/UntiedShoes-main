import { Box, Button, Container, Grid, Image, useColorMode, useColorModeValue, Textarea, VStack } from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import topMain from "../assets/main4.jpg"
import mainLeft from "../assets/narrow2.jpg"
import mainCenter from "../assets/narrow4.jpg"
import mainRightTop from "../assets/main6.jpg"
import mainRightBottom from "../assets/main7.jpg"
import activitiesPic from "../assets/narrow1.jpg"
import React from "react"

import Men from "./Men"

export default function Home () {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.100", "gray.700")
  return (
    <>
      <Box className="home"
        minH='90vh'
        width='auto'
        overflow='hidden'
      >
        <Box display="flex" flexDir='column' position="relative">
          <Box position='absolute'>
            <Image
              objectFit='cover'
              objectPosition='bottom right'
              minH='90vh'
              maxW='100%'
              height='auto'
              src={topMain} alt="main_image" />
          </Box>
          <Box position='relative'
            color="blackAlpha.800"
            fontSize='5xl'
            fontWeight='semibold'
            mt='20'
            ms='5'
          >
            <p>Performance Running
            </p>
            <Box>
              <Button
                colorScheme='yellow'
                marginInline={10}
                borderRadius='50px'
                height='60px'
                width='150px'
              >
                {/* <NavLink to='men'>Shop Men's</NavLink> */}
                <a href="./men">Shop men's</a>
              </Button>
              <Button
                colorScheme='yellow'
                borderRadius='50px'
                height='60px'
                width='150px'
              >
                <a href="./women">Shop women's</a>
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>


      {/* second section with large fonts */}
      <Box
        minH='55vh'
        width='100%'
        backgroundColor='whiteAlpha'
        display='flex'
        flexDirection='row'
        mb='3'
      >
        <Box>
          <Textarea
            textTransform='uppercase'
            transform='rotate(-90deg)'
            fontWeight='semibold'
            ms='-5'
            mt='20'
            letterSpacing='2px'
            border='none'
            defaultValue='Activities'
          />
        </Box>
        <Box
          className='activitiesText'
          minH='55vh'
          width='auto'
        >
          <VStack
            spacing={1}
            alignItems='left'
            fontSize="6xl"
            fontWeight="semibold"
            mt='25%'
          >
            <Box>
              <a href="./trail">Trail Running</a>
            </Box>
            <Box>
              <a href="./road">Road Running</a>
            </Box>
            <Box>
              <a href="./lifestyle">Active Lifestyle</a>
            </Box>
            <Box>
              <a href="./hiking">Hiking</a>
            </Box>
            <Box>
              <a href="./comfort">Comfort Travel</a>
            </Box>
          </VStack>
        </Box>
        <Box
          className="activitiesPic"
          minH='55vh'
          width='50%'
        >
          <Container centerContent>
            <Image
              minH='45vh'
              objectFit='cover'
              maxW='90%'
              minW='300px'
              // height='40vh'
              boxSize='md'
              mt='10%'
              borderRadius='25px'
              src={activitiesPic} alt='activitiesPicture'
            />
          </Container>
        </Box>
      </Box>

      {/* middle three box section  */}
      <Box
        className="threeBoxes"
        minH='55vh'
        maxH='70vh'
        // width='100%'
        // height='auto'
        bgColor='whiteAlpha'
        overflow='auto'
        ms='2'
      >
        <Grid templateColumns="repeat(3, 1fr)">
          <Box display='flex' flexDirection='column' position='relative'>
            <Box>
              <Image
                position='absolute'
                minH='50vh'
                minW='300px'
                objectFit='cover'
                w="95%"
                borderRadius="lg"
                src={mainLeft} alt="image_one" />
            </Box>
            <Box
              position='absolute'
              color="whiteAlpha.900"
              fontSize='2xl'
              fontWeight='semibold'
              mt='115%'
              ms='7'
            >
              <p>Performance Running
              </p>
              <Box>
                <Button
                  mt='5'
                  colorScheme='yellow'
                  borderRadius='50px'
                  height='45px'
                  width='100px'
                  me='3'
                >
                  <a href="./men">Men's</a>
                </Button>
                <Button
                  mt='5'
                  colorScheme='yellow'
                  borderRadius='50px'
                  height='45px'
                  width='100px'
                >
                  <a href="./women">Women's</a>
                </Button>
              </Box>
            </Box>
          </Box>
          <Box display='flex' flexDirection='column' position='relative'>
            <Box>
              <Image
                position='relative'
                minH='50vh'
                minW='300px'
                objectFit='cover'
                w="95%"
                borderRadius="lg"
                src={mainCenter} alt="image_two" />
            </Box>
            <Box
              position='absolute'
              color="whiteAlpha.900"
              fontSize='2xl'
              fontWeight='semibold'
              mt='115%'
              ms='7'
            >
              <p>Road Running
              </p>
              <Box>
                <Button
                  mt='5'
                  colorScheme='yellow'
                  borderRadius='50px'
                  height='45px'
                  width='100px'
                  me='3'
                >
                  <a href="./road">Shop now</a>
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            display='flex'
            flexDirection='column'
            position='relative'
            minH='50vh'
            w='95%'
            gap='5'
            me='3'
          >
            <Box>
              <Image
                position='relative'
                objectFit='cover'
                minH='24vh'
                height='100%'
                minW='300px'
                w="100%"
                borderRadius="lg"
                src={mainRightTop} alt="image_three_one" />
            </Box>
            <Box
            position='absolute'
            color="whiteAlpha.900"
            fontSize='2xl'
            fontWeight='semibold'
            mt='60%'
            ms='7'
            >
            <p>Hiking
            </p>
            <Box>
            <Button
                mt='5'
                colorScheme='yellow'
                borderRadius='50px'
                height='45px'
                width='100px'
                me='3'
              >
                <a href="./hiking">Men's</a>
              </Button>
              <Button
                mt='5'
                colorScheme='yellow'
                borderRadius='50px'
                height='45px'
                width='100px'
              >
                <a href="./hiking">Women's</a>
              </Button>
              </Box>
            </Box>

            <Box h='50%'>
              <Box>
                <Image
                  position='relative'
                  objectFit='cover'
                  objectPosition='bottom left'
                  minH='24vh'
                  height='100%'
                  minW='300px'
                  w="100%"
                  borderRadius="lg"
                  src={mainRightBottom} alt="image_three_two" />
              </Box>
              <Box
                position='absolute'
                color="whiteAlpha.900"
                fontSize='2xl'
                fontWeight='semibold'
                mt='-30%'
                ms='7'
                >
                <p>Casual
                </p>
              <Box>
              <Button
                mt='5'
                colorScheme='yellow'
                borderRadius='50px'
                height='45px'
                width='100px'
                me='3'
              >
              <a href="./men">Men's</a>
              </Button>
              <Button
                mt='5'
                colorScheme='yellow'
                borderRadius='50px'
                height='45px'
                width='100px'
              >
              <a href="/casual">Women's</a>
              </Button>
            </Box>
          </Box>

            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  )
}

