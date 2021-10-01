import {useState} from 'react';
import styles from '../styles/Home.module.css'

function TodoForm({submitTodo}) {
    const [todo, setTodo] = useState({
        author: "",
        description: "",
    })

    const [isSubmittable, setIsSubmittable] = useState(true);

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
        <div>
            <form onSubmit={handleOnSubmit}>
                <input
                    className={styles.inputText}
                    type="text"
                    placeholder="Add todo..."
                    value={todo.description}
                    onChange={handleOnChange}
                />
                <button className={styles.inputButton}>Add!</button>
            </form>
            {!isSubmittable ?
                    <span className={styles.warningMessage}>Please add a Todo!</span>
                :
                null}
        </div>
    );
}

export default TodoForm;