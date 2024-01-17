import React from "react";
import "./TodoForm.css";
import { TodoContext } from "../TodoContext";
function TodoForm() {

  const [newTodoValue, setNewTodoValue] = React.useState("");

  const {
    setOpenModal,
    addTodo,
  } = React.useContext(TodoContext);

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea 
      placeholder="Escribe tu nuevo TODO" 
      value={newTodoValue}
      onChange={event => setNewTodoValue(event.target.value)}
      />
      <button
       type="submit"
       className="TodoForm-button TodoForm-button--add">Crear TODO</button>
    </form>
  );
}

export { TodoForm };
