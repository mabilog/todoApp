import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core'
import { db } from './firebase_config';
import firebase from 'firebase';

import Todo from './Todo';


function App() {
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos();
  }, []) // blank to run only on load

  const addTodo = (e) => {
    e.preventDefault();

    db.collection('todos')
      .add({
        inprogress: true,
        start: firebase.firestore.FieldValue.serverTimestamp(),
        todo: todoInput
      })
      setTodoInput("");
  }

  const getTodos = () => {
    db.collection('todos')
      .onSnapshot((querySnapshot) => {
        setTodos(
          querySnapshot.docs.map((doc) => ({
          id: doc.id,
          inprogress: doc.data().inprogress,
          start: doc.data().start,
          todo: doc.data().todo
        }))) 
      }) // when new data added, instantly reflected on our list
  }


  return (
    <AppWrapper>
      <Title>Angelo's Todo App </Title>
      <Subtitle>Powered by ⚛React and 🔥Firebase!</Subtitle>
      <AddWrapper>
        <TextField 
        id="standard-basic" 
        label="Write a todo" 
        value={todoInput}
        style={{width: '100%', maxWidth: '400px'}}
        onChange={(e) => setTodoInput(e.target.value)}
        
      />
      <Button 
        variant='contained'
        color="primary" 
        onClick={addTodo}
        type="submit"
      >add</Button>
      </AddWrapper>
      <TodoWrapper>
        {todos.map(todo => (
        <Todo 
          id={todo.id}
          inprogress={todo.inprogress}
          todo={todo.todo}
          start={todo.start}
          />))}
      </TodoWrapper>
      
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;


const Title = styled.h1`
  font-size: 24px;
  width: 100%;
  max-width: 400px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  width: 100%;
  max-width: 400px;
`;

const AddWrapper = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TodoWrapper = styled.ul`
  text-decoration: none;
  margin: 0;
  padding: 0;
  width: 100%;
  max-width: 350px;
`;
export default App;
