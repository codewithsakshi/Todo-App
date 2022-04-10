import React from "react"
import UserList from "./component/userslist/UsersList"
import TodoList from "./component/todolist/TodoList"

function App() {
  return (
    <div className="App" style={{"display": "flex", "justifyContent": "space-between"}}>
      <UserList/>
      <TodoList/>
    </div>
  );
}

export default App;
