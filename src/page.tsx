import React from 'react';
import * as G from './styled';
import { Task } from './components/AddTask/index';


export const Page = () => {
  

  return(
    <G.Container>  
      <G.Area>     
        <G.Header> Lista de Tarefas </G.Header>
          <Task></Task>
      </G.Area>                       
    </G.Container>     
  );
}
