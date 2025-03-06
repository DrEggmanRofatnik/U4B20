import Greeting from "./Greeting.jsx";
import AlertMessage from "./AlertMessage.jsx";
import TodoList from "./ShoppingList.jsx"

const App = () => {
    let isLoggedIn = true;
    let showMessage = true;
    const todos = [
        "Bread",
        "Beef",
        "Milk",
        "Water",
        "Eggs",
        "Cheese",
        "Fries",
    ];
    return (
        <>
            <Greeting isLoggedIn={isLoggedIn}/>
            <AlertMessage showMessage={showMessage}/>
            <TodoList todos={todos}/>
        </>
    )
};

export default App