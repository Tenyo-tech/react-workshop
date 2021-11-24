import { useState } from 'react';

import Header from './components/Header.js';
import WelcomeWorld from './components/WelcomeWorld.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import CreateGame from './components/CreateGame.js';
import EditGame from './components/EditGame.js';
import GameDetails from './components/GameDetails.js';
import GameCatalog from './components/GameCatalog.js';


function App() {
  const [page, setPage] = useState('/home')

  const routes = {
    '/home': <WelcomeWorld/>,
    '/games': <GameCatalog/>,
    '/create-game': <CreateGame/>,
    '/login': <Login/>,
    '/register': <Register/>,
    '/edit-game': <EditGame/>,
  };

  const navigationChangeHandler = (path) => {
    
    setPage(path);
    console.log(`${page} change`);
  }
  return (
    <div id="box">
      <Header 
      navigationChangeHandler = {navigationChangeHandler}
      />
        

        <main id="main-content">
         { routes[page] || <h2>No Page Found !</h2>}
        </main>

        {/* <Login/>

        <Register/>

        <CreateGame/>

        <EditGame/>

        <GameDetails/>

        <GameCatalog/> */}

    </div>
  );
}

export default App;
