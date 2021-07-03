import React, { useState } from 'react'
import { Button, Checkbox, ListItem, ListItemText } from '@material-ui/core';
import { db } from './firebase_config';
import DeleteIcon from '@material-ui/icons/Delete';

const Todo = ({inprogress, todo, start, id}) => {
  const [checked, setChecked] = useState(false)

  const handleChange = (e) => {
    setChecked(e.target.checked);
  }

  const toggleProgress = () => {
    db.collection('todos')
      .doc(id)
      .update({
        inprogress: !inprogress})
  }

  const deleteTodo = () => {
    db.collection('todos')
      .doc(id)
      .delete()
  }
  
  return (
    <ListItem key={id}>
      <ListItemText primary={`${todo}`} secondary={`${inprogress ? 'in progress ⏳' : 'completed ✔'}`} />
      {/* <Button variant="contained" onClick={toggleProgress}>{inprogress ? 'Done' : 'unDone'}</Button> */}
      <Checkbox
        checked={checked}
        color="primary"
        onChange={handleChange}
        onClick={toggleProgress}
        />
      <Button onClick={deleteTodo}><DeleteIcon/></Button>
    </ListItem>
  )
}


export default Todo
