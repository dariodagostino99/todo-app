import TodoItem from '../components/TodoItem'
import styles from "../styles/Home.module.css";

function TodoList({todos}) {
    return (
        <ul className={styles.listContainer}>
            {todos.map((todo) => (<TodoItem todo={todo}/>))}
        </ul>
    )
};

export default TodoList;