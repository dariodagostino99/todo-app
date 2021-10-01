import {useState} from 'react';
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import styles from '../styles/Home.module.css';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
    const [todos, setTodos] = useState([])

    function addTodo(todo){
        setTodos([todo,...todos]);
    }

    return (
        <ChakraProvider>
            <div className={styles.container}>
                <h1 className={styles.mainHeader}>Todo App!</h1>
                <TodoForm submitTodo={addTodo}/>
                <TodoList todos={todos}/>
                <footer>
                    <h3>Powered by Dardo</h3>
                </footer>
            </div>
        </ChakraProvider>

    );
}

// cambiar por getServerSideProps o por useEffect()


export default App;