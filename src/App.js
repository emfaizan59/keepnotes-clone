import React from 'react';
import {Container, Divider , Header} from 'semantic-ui-react'
import HeaderView from './Component/HeaderView/HeaderView.js'
import TaskAdd from './Component/TaskAdd/TaskAdd'
import TaskView from './Component/TaskView/TaskView'


function App() {
  return (
    
    <Container fluid  >
      <HeaderView />
      <TaskAdd />
      <TaskView />
    </Container>
  );
}

export default App;
