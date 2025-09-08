import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [itemId, setItemId] = useState(0);
  const [todo, setTodo] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const hanldeSubmit = (e) => {
    const todoObj = {
      id: itemId,
      task: inputValue,
      completed: false,
    };
    console.log(todoObj);
    if (inputValue !== "") {
      setTodo((prev) => [...prev, todoObj]);
    }
    setInputValue("");
    setItemId(itemId + 1);
  };

  const handleCheck = (id) => {
    setTodo(
      todo.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            completed: !t.completed,
          };
        } else {
          return t;
        }
      })
    );
  };
  const hanldeDelete = (id) => {
    const copyTodo = [...todo];
    const filterTodo = copyTodo.filter((item) => item.id !== id);
    setTodo(filterTodo);
  };

  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={hanldeSubmit}>Submit</button>

      {todo &&
        todo?.map((x) => {
          return (
            <div key={x.id}>
              <input type="checkbox" onChange={() => handleCheck(x.id)} />
              <label
                style={{ textDecoration: x.completed ? "line-through" : "" }}
              >
                {x.task}
              </label>
              <button onClick={() => hanldeDelete(x.id)}>Delete</button>
            </div>
          );
        })}
    </div>
  );
}

export default App;
