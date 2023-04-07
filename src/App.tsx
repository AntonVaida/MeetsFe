import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { init, randomImgForUser } from './features/userSlice';

function App() {
const { loading, loadingNewImg, error, users} = useAppSelector(state => state.users);
const dispatch = useAppDispatch();

useEffect(() => {
  dispatch(init());
}, [])

const handlerOnClick = () => {
  console.log('Press')
  dispatch(randomImgForUser(1));
}

console.log('DATA===>', users)
  return (
    <div className="App">
      <header className="App-header">
        <div onClick={() => handlerOnClick()}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
