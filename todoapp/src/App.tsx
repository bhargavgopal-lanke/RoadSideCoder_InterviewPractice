import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [itemId, setItemId] = useState(0);
  const [todo, setTodo] = useState<todoObjInterface[]>([]);

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };

  interface todoObjInterface {
    id: number;
    task: string;
    completed: boolean;
  }

  const hanldeSubmit = () => {
    const todoObj: todoObjInterface = {
      id: itemId,
      task: inputValue,
      completed: false,
    };
    if (inputValue !== "") {
      setTodo((prev) => [...prev, todoObj]);
    }
    setInputValue("");
    setItemId(itemId + 1);
  };

  const handleCheck = (id: number) => {
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
  const hanldeDelete = (id: number) => {
    const copyTodo = [...todo];
    const filterTodo = copyTodo.filter(
      (item: todoObjInterface) => item.id !== id
    );
    setTodo(filterTodo);
  };

  return (
    <div className="App">
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={hanldeSubmit} style={{ margin: "0 20px 20px" }}>
        Submit
      </button>

      {todo &&
        todo?.map((x: todoObjInterface) => {
          return (
            <div key={x.id}>
              <label
                style={{ textDecoration: x.completed ? "line-through" : "" }}
              >
                <input type="checkbox" onChange={() => handleCheck(x.id)} />
                {x.task}
              </label>
              <button
                onClick={() => hanldeDelete(x.id)}
                style={{ marginLeft: "20px" }}
              >
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default App;
