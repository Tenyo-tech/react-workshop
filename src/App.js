import Header from './components/Header.js';
import WelcomeWorld from './components/WelcomeWorld.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import CreateGame from './components/CreateGame.js';
import EditGame from './components/EditGame.js';
import GameDetails from './components/GameDetails.js';
import GameCatalog from './components/GameCatalog.js';


function App() {
  const routes = {
    '/home': WelcomeWorld,
    '/games': GameCatalog,
    '/create-game': CreateGame,
  };

  return (
    <div id="box">
      <Header />
        

        <main id="main-content">
        <WelcomeWorld />
        </main>

        <Login/>

        <Register/>

        <CreateGame/>

        <EditGame/>

        <GameDetails/>

        <GameCatalog/>

    </div>
  );
}

export default App;
