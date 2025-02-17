import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

const ToDoCard = ({ todo, index, handleDeleteTodo, handleEditTodo }) => {
  return (
    <div className="listContent" key={index}>
      {todo}
      <div className="actionControl">
        <div className="buttonstyle" onClick={() => handleEditTodo(index)}>
          <ModeEditOutlinedIcon />
        </div>

        <div className="buttonstyle" style={{marginLeft:"10px"}} onClick={() => handleDeleteTodo(index)}>
          <DeleteOutlineOutlinedIcon />
        </div>
      </div>
    </div>
  );
};
export default ToDoCard;
