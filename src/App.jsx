import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const currentYear = new Date().getFullYear();

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="app">
      <h1>My First React App</h1>
      <p>
        Hi, I'm Richard, a frontend developer and graphic designer based in
        Accra. I'm learning React to build fast, interactive interfaces.
      </p>

      <div className="counter">
        <h2>{count}</h2>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={resetCount}>Reset</button>
        <button onClick={increaseCount}>Increase</button>
        <p>{count % 2 === 0 ? "Even number" : "Odd number"}</p>
      </div>

      <div className="greeting-section">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
        {name.trim() !== "" && (
          <p className="greeting">Hello, {name}! Welcome to my React app.</p>
        )}
      </div>

      <footer>
        <p>&copy; {currentYear} Richard. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;