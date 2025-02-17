import "./App.css";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import { useEffect, useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [value, setValue] = useState("");

  const persistData = (newList) =>{
    localStorage.setItem('todoList', JSON.stringify({todoList: newList}))
  }
  const handleAddTodo = (newTodo) => {
    const newTodoList = [...todoList, newTodo];
    persistData(newTodoList)
    setTodoList(newTodoList);
  };

  const handleDeleteTodo = (index) => {
    const newTodoList = todoList.filter((todo, todoindex) => {
      return todoindex !== index;
    });
    persistData(newTodoList)
    setTodoList(newTodoList);
  };

  const handleEditTodo = (index) => {
    const valueToEdit = todoList[index];
    setValue(valueToEdit);
    handleDeleteTodo(index);
  };

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTodos = localStorage.getItem("todoList");
    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todoList 
    setTodoList(localTodos);
  }, []);

  return (
    <div className="root">
      <ToDoInput
        handleAddTodo={handleAddTodo}
        value={value}
        setValue={setValue}
      />
      <ToDoList
        todoList={todoList}
        handleDeleteTodo={handleDeleteTodo}
        value={value}
        setValue={setValue}
        handleEditTodo={handleEditTodo}
      />
    </div>
  );
}

export default App;
