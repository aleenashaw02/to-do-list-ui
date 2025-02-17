import ToDoCard from "../ToDoCard";

const ToDoList = ({ todoList, handleDeleteTodo, handleEditTodo }) => {
  return (
    <div className="listRoot">
      {todoList.map((todo, todoIndex) => {
        return (
          <ToDoCard
            todo={todo}
            key={todoIndex}
            handleDeleteTodo={handleDeleteTodo}
            index={todoIndex}
            handleEditTodo={handleEditTodo}
          />
        );
      })}
    </div>
  );
};
export default ToDoList;
