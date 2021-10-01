import {Button, ChakraProvider, Flex, Heading, Input, Link, useColorMode, useColorModeValue} from '@chakra-ui/react';
import {ExternalLinkIcon, MoonIcon, SunIcon} from '@chakra-ui/icons';

const Home = () => {
    const { toggleColorMode } = useColorMode();
    const formBackground = useColorModeValue("gray.100", "gray.700");
  return (
    <Flex height={"100vh"} alignItems={"center"} justifyContent={"center"}>
        <Flex direction={"column"} background={formBackground} p={12} rounded={6}>
            <Heading mb={6}>Log in</Heading>
            <Input placeholder={"lazar@chakra-ui.com"} variant={"filled"} mb={3} type={"email"}/>
            <Input placeholder={"********"} variant={"filled"} mb={6} type={"password"}/>
            <Button colorScheme={"teal"} mb={6}>Log in</Button>
            <Button onClick={toggleColorMode} colorScheme={"teal"} variant={"outline"} mb={6}>
                {formBackground === "gray.100"?
                    <MoonIcon></MoonIcon>
                    :
                    <SunIcon></SunIcon>
                }
            </Button>
            <Button colorScheme={"teal"}>
                <Link href="/app" isExternal>
                    Go To TODO App! <ExternalLinkIcon mx="2px" />
                </Link>
            </Button>
        </Flex>
    </Flex>
  )
}

export default Home
