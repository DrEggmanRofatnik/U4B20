const ShoppingList = ({todos}) => {
    return (
    <ul>
        {todos.map(todo => (
                <li key={todo.id}>{todo}</li>
                ))}
    </ul>
    );


};


export default ShoppingList