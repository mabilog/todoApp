import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core'
import { db } from './firebase_config';
import firebase from 'firebase';

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
      setTodoInput('');
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
      <Title>Angelo's Todo App Powered by ⚛React and 🔥Firebase! </Title>
      <AddWrapper>
        <TextField 
        id="standard-basic" 
        label="Todo" 
        style={{width: '100%', maxWidth: '300px'}}
        onChange={(e) => {
          setTodoInput(e.target.value)
        }}
      />
      <Button 
        variant='contained'
        color="primary" 
        onClick={addTodo}
        type="submit"
      >Add</Button>
      </AddWrapper>
      {todos.map(todo => <p key={todo.id}>{todo.todo}</p>)}
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center
`;


const Title = styled.h1`
  font-size: 24px;
  width: 100%;
  max-width: 400px;
`;

const AddWrapper = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  
`;
export default App;
