import React from 'react';
import './App.css';
import Main from './components/Main';
import { useSelector } from 'react-redux';
import { selectUser } from './feature/userSlice';
import Login from './components/auth/Login';

function App() {
  //const user = useSelector(selectUser);

  return (
    <div className='App'>
      {/* {user ? <Main /> : <Login />} */}
      <Main></Main>

    </div>
  );
}

export default App;
