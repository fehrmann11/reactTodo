import React, {useState} from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage("TODOS_V1", []);
    
      const [searchValue, setSearchValue] = useState("");
      const [openModal, setOpenModal] = useState(false);
    
      const completedTodos = todos.filter((todo) => !!todo.completed).length;
      const totalTodos = todos.length;
    
      const searchedTodos = todos.filter((todo) => {
        const text = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return text.includes(searchText);
      });
    
      // const completed = todos.filter((todo) => !!todo.completed).length;
    
      const deleteTodo = (text) => {
        const index = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        saveTodos(newTodos);
      };
    
      const toggleCompleteTodo = (text) => {
        const index = todos.findIndex((todo) => todo.text === text);
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        saveTodos(newTodos);
      };

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          completed: false,
          text,
        });
        saveTodos(newTodos);
      };


  return (
    <TodoContext.Provider value={{
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        toggleCompleteTodo,
        deleteTodo,
        loading,
        error,
        openModal, 
        setOpenModal,
        addTodo,
    }}>
        {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
