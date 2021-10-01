import TodoItem from '../components/TodoItem'
import styles from "../styles/Home.module.css";
import {List} from "@chakra-ui/react";

function TodoList({todos}) {
    return (
        <List mb={8}>
            {todos.map((todo) => (<TodoItem key={todo.id} todo={todo}/>))}
        </List>
    )
};

export default TodoList;