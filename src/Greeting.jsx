const Greeting = ({ isLoggedIn }) => {
    return (
        isLoggedIn
            ? <h1>Groceries</h1>
            : <h1>Please sign in</h1>
    );
};

export default Greeting;