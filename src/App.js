import { useState } from 'react';

import Header from './components/Header.js';
import WelcomeWorld from './components/WelcomeWorld.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import CreateGame from './components/CreateGame.js';
import EditGame from './components/EditGame.js';
import GameDetails from './components/GameDetails.js';
import GameCatalog from './components/GameCatalog/GameCatalog.js';
import ErrorPage from './components/ErrorPage.js';


function App() {
  const [page, setPage] = useState('/home')

  const navigationChangeHandler = (path) => {
    console.log(path);
    setPage(path);
  }

  const router = (path) => {
    let pathNames = path.split('/');

    let rootPath = pathNames[1];
    let argument = pathNames[2];

    const routes = {
      'home': <WelcomeWorld navigationChangeHandler = {navigationChangeHandler}/>,
      'games': <GameCatalog navigationChangeHandler = {navigationChangeHandler}/>,
      'create-game': <CreateGame/>,
      'login': <Login/>,
      'register': <Register/>,
      'edit-game': <EditGame/>,
      'details': <GameDetails id= {argument}/>,
    };

    return routes[rootPath];
  }
  
  return (
    <div id="box">
      <Header 
      navigationChangeHandler = {navigationChangeHandler}
      />
        

        <main id="main-content">
         { router(page) || <ErrorPage>Some Additional Info</ErrorPage>}
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
