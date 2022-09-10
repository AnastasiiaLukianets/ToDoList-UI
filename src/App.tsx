import React, { useState } from 'react';
import './App.css';
import { ApiResponse } from './types';

  //console.log(typeof fetch('/api/TaskToDo'));
  //fetch('/api/TaskToDo')
  
const App: React.FC = () => {
  //function App() {

  interface TaskToDo {
    descriptionText: string;
    isCompleted: boolean;
  }
  interface User {
    userId: number;
    userName: string;
  }

  //const [allUsers, setAllUsers] = useState("");
  console.log('START');

  fetch('/api/User')
    .then(res => res.json())
    .then(data => {
      const response: ApiResponse<User> = data;

      console.log(response);

    })
    .catch(() => {
      console.log("Fetch request error");});

      
  // fetch('/api/User/3')
  //   .then((res) => res.json())
  //   .then((item) => console.log(item));

  console.log('END');

  return (
    <div className="App">
      Hi
    </div>
  );
}

export default App;
