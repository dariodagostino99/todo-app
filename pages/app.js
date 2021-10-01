import {useState} from 'react';
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import styles from '../styles/Home.module.css';
import { ChakraProvider } from '@chakra-ui/react';

function App({ posts }) {
    const [todos, setTodos] = useState([])

    function addTodo(todo){
        setTodos([todo,...todos]);
    }

    const fetchData = async () =>{
        const response = await fetch('http://localhost:8080/api/todo-resource/all');
        const data = await response.json();
        setTodos(data)
    }

    const submitTodo = async () => {
        const response = await fetch('http://localhost:8080/api/todo-resource/post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({description: 'Lavar los platos', author: 'Dario'})
        })
        const data = await response.json();
        console.log(data);
    }

    return (
        <ChakraProvider>
            <div className={styles.container}>
                <h1 className={styles.mainHeader}>Todo App!</h1>
                <TodoForm submitTodo={submitTodo}/>
                <TodoList todos={posts}/>
                <footer>
                    <h3>Powered by Dardo</h3>
                </footer>

                <button onClick={submitTodo}>Test fetch api</button>

            </div>
        </ChakraProvider>

    );
}

// cambiar por getServerSideProps o por useEffect()

export async function getStaticProps() {
    const res = await fetch(`${process.env.API_KEY}/api/todo-resource/all`)
    const posts = await res.json()
    //
    return {
        props: {
            posts,
        },
        revalidate: 10
    }
}


export default App;