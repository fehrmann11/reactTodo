import React from 'react';
import { TodoCounter } from "../TodoCounter";
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import { TodoItem } from "../TodoItem";
import { CreateTodoButton } from "../CreateTodoButton";
import { EmptyTodos } from "../EmptyTodos";
import { TodosError } from "../TodosError";
import { TodosLoading } from "../TodosLoading";
import { TodoContext } from "../TodoContext";
import { TodoForm } from "../TodoForm";
import { Modal } from "../Modal";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#EAD9D5",
        height: "100vh",
      }}
    >
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <EmptyTodos />}
        {searchedTodos.map((todo, index) => (
          <TodoItem
          key={index}
          text={todo.text}
          completed={todo.completed}
          deleteTodo={deleteTodo}
          toggleCompleteTodo={toggleCompleteTodo}
        />
        ))}
      </TodoList>

      <CreateTodoButton />

      {openModal && (
        <Modal setOpenModal={setOpenModal}>
          <TodoForm/>
        </Modal>
      )}
    </div>
  );
}

export { AppUI };
