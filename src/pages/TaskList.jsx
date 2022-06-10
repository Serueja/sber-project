import React from 'react';
import {AddTask} from '../components/AddTask';
import {TaskItemList} from '../components/TaskItemList';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';


export const TaskList = (props) => {
  const { items, onAdd, onDone } = props;
  return (
    <main className="container">
      <AddTask
        onAdd = { onAdd }
      />
      <TaskItemList
        items  = { items }
        onDone = { onDone }
      />
      <Header/>

      <Navbar/>
    </main>
  )
}
