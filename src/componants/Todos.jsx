import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import TodoCard from "./TodoCard";
import { Grid } from "@mui/material";

const Todos = () => {
  const [todos, setTodos] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos`).then((res) => {
      const responseTodos = res.data;
      setTodos(responseTodos);
    });
  }, []);
  console.log(todos);

  return (
    <>
      {todos ? (
        <Grid container spacing={2}>
          <Grid item xs={2} />
          <Grid item xs={8}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {todos.slice(0, 20).map((todo) => (
                  <TodoCard key={todo.id} todo={todo} />
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={2} />
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Todos;
