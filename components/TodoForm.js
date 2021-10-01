import {useState} from 'react';
import styles from '../styles/Home.module.css'
import {Button, Flex, FormControl, Input} from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons';

function TodoForm({submitTodo}) {
    const [todo, setTodo] = useState({
        author: "",
        description: "",
    })

    function handleOnChange(e) {
        setTodo({...todo, description: e.target.value})
    }

    function handleOnSubmit(e) {
        e.preventDefault();
        if (todo.description === "") {
            setIsSubmittable(false);
            return;
        }
        //
        setIsSubmittable(true);
        submitTodo(todo)
        setTodo({...todo, description: ""})
    }

    return (
        <Flex width={'1000px'} mb={6}>
            <FormControl id={"todo"}>
                <Flex direction={'row'}>
                    <Input type={"text"} placeholder={"Add todo..."} value={todo.description} onChange={handleOnChange}/>
                    <Button colorScheme={"green"} onSubmit={handleOnSubmit}>
                        <AddIcon ></AddIcon>
                    </Button>
                </Flex>
            </FormControl>

        </Flex>
    );
}

export default TodoForm;