import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../styled/Home.css';
import { useState, useEffect } from "react";

function Home() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const addTodo = () => {
    if (newTodo.trim() === "") {
      return;
    }

    const newTodoItem = {
      userId: 1,
      id: todos.length + 1,
      title: newTodo,
      completed: false,
    };

    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify(newTodoItem),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTodos([...todos, data]);
        setNewTodo("");
      });
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedTodos.find((todo) => todo.id === id)),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => setTodos(updatedTodos));
  };

  const deleteTodo = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    }).then(() => {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    });
  };

  return (
    <Container>
      <Row>
        <Col
          style={{
            width: "100%"
          }}
        >
          <Card className="text-white">

            <Card.Text>
              <div className="container">
                <h1 className="Headline">To-Do List</h1>
                <div className="input-container">
                  <input
                    type="text"
                    placeholder="Add a new to-do"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    className="todo-input"
                  />
                  <button onClick={addTodo} className="add-button">
                    Add
                  </button>
                </div>
                <ul className="todo-list">
                  {todos.map((todo) => (
                    <li
                      key={todo.id}
                      className={`todo-item ${
                        todo.completed ? "completed" : ""
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                      />
                      <span
                        className="todo-title"
                        style={{
                          textDecoration: todo.completed
                            ? "line-through"
                            : "none",
                        }}
                      >
                        {todo.title}
                      </span>
                      <button
                        onClick={() => deleteTodo(todo.id)}
                        className="delete-button"
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
