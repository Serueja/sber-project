import React from 'react';
import {TaskItemList} from '../components/TaskItemList';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';


export const TaskList = (props) => {
  const { items, onAdd, onDone } = props;
  console.log('Navbar joy:', props.joy)
  return (
    <main className="container">
      <TaskItemList
      />
      <Header/>

      <Navbar/>
    </main>
  )
}
