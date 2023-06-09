import { TextField, Typography, Button } from '@mui/material';
import React, { useState } from 'react';


const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [todoName, setTodoName] = useState('');
    const [todoQuantity, setTodoQuantity] = useState('');
    const [todoBrand, setTodoBrand] = useState('');
  
    const handleNameChange = (event) => {
      setTodoName(event.target.value);
    };
  
    const handleQuantityChange = (event) => {
      setTodoQuantity(event.target.value);
    };
  
    const handleBrandChange = (event) => {
      setTodoBrand(event.target.value);
    };
  
    const handleAddTodo = () => {
      if (todoName.trim() !== '' && todoQuantity.trim() !== '' && todoBrand.trim() !== '') {
        const newTodo = {
          name: todoName,
          quantity: todoQuantity,
          brand: todoBrand
        };
        setTodos([...todos, newTodo]);
        setTodoName('');
        setTodoQuantity('');
        setTodoBrand('');
      }
    };
  return (
    
    <div style={{ paddingTop: '100px', textAlign: 'center' }}>
    <Typography variant="h4" color="black"  >Todo Application</Typography>

    <TextField
      variant="outlined"
      label="Enter name"
      value={todoName}
      onChange={handleNameChange}
      style={{ margin: '10px' }}
    />
    <br />
    <TextField
      variant="outlined"
      label="Enter quantity"
      value={todoQuantity}
      onChange={handleQuantityChange}
      style={{ margin: '10px' }}
    />
    <br />
    <TextField
      variant="outlined"
      label="Enter brand"
      value={todoBrand}
      onChange={handleBrandChange}
      style={{ margin: '10px' }}
    />
    <br />
    <Button variant="contained" color="primary" onClick={handleAddTodo} style={{ margin: '10px' }}>
      Add Todo
    </Button>

    <ol style={{paddingLeft:'400px'}}>
      {todos.map((todo, index) => (
        <li style={{paddingTop:'20px',
                    paddingRight:'390px'
        }} key={index}>
          Name : {todo.name},<br/> Quantity : {todo.quantity},<br/> Brand : {todo.brand}
        </li>
      ))}
    </ol>
  </div>
    
  )
}

export default TodoApp