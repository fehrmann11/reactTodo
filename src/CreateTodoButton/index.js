import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';
import React from 'react';
function CreateTodoButton() {
  const { setOpenModal } = React.useContext(TodoContext);

  const onClickButton = () => {
    setOpenModal(prevState => !prevState);
  }

    return <button onClick={onClickButton} className="Boton">+</button>;
  }

export {CreateTodoButton};