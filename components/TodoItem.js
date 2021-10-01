import styles from '../styles/Home.module.css'

function TodoItem({ todo }){

    return(
        <div className={styles.item}>
            <div className={styles.textTask}>
                <h4 key={todo.id}>{todo.description}</h4>
            </div>
            <div className={styles.actionButtonContainer}>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
};

export default TodoItem;