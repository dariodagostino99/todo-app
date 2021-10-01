import styles from '../styles/Home.module.css'
import {Button, Flex, ListItem, Heading} from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

function TodoItem({todo}) {

    return (
        <ListItem mb={6}>
            <Flex direction={"row"} justifyContent={"space-between"} width={"1000px"} padding={"5px"} alignItems={"center"} border={"solid 0.5px"} borderRadius={"2.5%"} borderStyle={"dotted"}>
                <Heading as="h6" size="md" mb={6} key={todo.id} >{todo.description}</Heading>
                <Flex justifyContent={"space-evenly"} width={"120px"}>
                    <Button colorScheme={"teal"}>
                        <EditIcon></EditIcon>
                    </Button>
                    <Button colorScheme={"red"}>
                        <DeleteIcon></DeleteIcon>
                    </Button>
                </Flex>
            </Flex>
        </ListItem>

    )
};

export default TodoItem;