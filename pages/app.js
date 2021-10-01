import {useState} from 'react';
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import styles from '../styles/Home.module.css';
import {Box, Button, ChakraProvider, Flex, Heading, useColorMode, useColorModeValue} from '@chakra-ui/react';
import {MoonIcon, SunIcon} from "@chakra-ui/icons";

function App() {

    const { toggleColorMode } = useColorMode();
    const formBackground = useColorModeValue("gray.100", "gray.700");

    const [todos, setTodos] = useState([{
        id: "1",
        author: "Dario",
        description: "Do the homework"
    },
        {
            id: "2",
            author: "Dario",
            description: "Learn React"
        }
    ])

    function addTodo(todo) {
        setTodos([todo, ...todos]);
    }

    return (
        <Flex direction={"column"} alignItems={"center"} height={"100vh"} justifyContent={"center"} bgColor={formBackground}>
            <Heading as="h1" size="4xl" isTruncated mb={6} fontFamily={"Bradley Hand ITC"}>Todo App!</Heading>
            <TodoForm submitTodo={addTodo}/>
            <TodoList todos={todos} />
            <Heading as="h6" size="sm" mb={6} fontFamily={"Lucida Handwriting"}>Powered by Dardo</Heading>
            <Button onClick={toggleColorMode} colorScheme={"teal"} variant={"outline"} mb={6}>
                {formBackground === "gray.100"?
                    <MoonIcon></MoonIcon>
                    :
                    <SunIcon></SunIcon>
                }
            </Button>
        </Flex>

    );
}

// cambiar por getServerSideProps o por useEffect()


export default App;