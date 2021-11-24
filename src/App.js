import { useState } from 'react';

import Header from './components/Header.js';
import WelcomeWorld from './components/WelcomeWorld.js';
import CreateGame from './components/CreateGame.js';
import GameCatalog from './components/GameCatalog.js';


function App() {
  const [page, setPage] = useState('/home')

  const routes = {
    '/home': <WelcomeWorld />,
    '/games': <GameCatalog/>,
    '/create-game': <CreateGame/>,
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
         { routes[page] || <h2>No Page Found!</h2>}
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
