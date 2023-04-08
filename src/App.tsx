import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { init, randomImgForUser } from './features/userSlice';
import { CardItem } from './components/CardItem';

function App() {
const { loading, loadingNewImg, error, users} = useAppSelector(state => state.users);
const {selectedUser} = useAppSelector(state => state.selectedUser);
const dispatch = useAppDispatch();

useEffect(() => {
  dispatch(init());
}, [])

const handlerOnClick = () => {
  console.log('Press')
  dispatch(randomImgForUser(1));
}

useEffect(() => {
  if (selectedUser) {
    dispatch(randomImgForUser(selectedUser?.userId));
  }
}, [selectedUser])



console.log('DATA===>', selectedUser)
  return (
    <div className="AppContainer">
      {users?.length && (
        users.map((user) => (
          <CardItem user={user} key={user?.userId} />
        ))
      )}

    </div>
  );
}

export default App;
