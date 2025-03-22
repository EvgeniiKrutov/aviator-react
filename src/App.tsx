import { useEffect } from 'react';
import './app.css';
import GameScene from './game-objects/game-scene';
import { createGameObjects } from './game-actions/create-game-objects';

function App() {
  useEffect(() => {
    const mainScene = new GameScene('mainGameCanvas');
    
    const gameScene = mainScene.getScene();
    
    const gameObjects = createGameObjects(gameScene);

    if (gameObjects) {
      mainScene.setGameObjects(gameObjects);
    }

    mainScene.animate();
  }, []);

  return (
    <div>
      <canvas id="mainGameCanvas" />
    </div>
  );
}

export default App;
