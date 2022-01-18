import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Todos from "./componants/Todos";
import Todo from "./componants/Todo";
import Appbar from "./componants/Appbar";

const App = () => {
  return (
    <div className="App">
      <Appbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Todos />} />
          <Route path="/todo/:id" element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
