import { TodoContext } from "../TodoContext";
import "./TodoSearch.css";
import React from "react";
function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="search"
      placeholder="holi"
      value={searchValue}
      onChange={(event) => {
        onSearchValueChange(event);
      }}
    />
  );
}

export { TodoSearch };
