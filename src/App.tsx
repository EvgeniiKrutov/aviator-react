import { useEffect } from 'react';
import './app.css';
import GameScene from './game-objects/game-scene';
import { createGameObjects } from './game-actions/create-game-objects';

function handleMouseMove(event: MouseEvent, mainScene: GameScene) {
  const normalizedXPosition = -1 + (event.clientX / window.innerWidth) * 2;
  const normalizedYPosition = 1 - (event.clientY / window.innerHeight) * 2;

  mainScene.setPosition({ x: normalizedXPosition, y: normalizedYPosition });
}

function App() {
  useEffect(() => {
    const mainScene = new GameScene('mainGameCanvas');

    const gameScene = mainScene.getScene();

    const gameObjects = createGameObjects(gameScene);

    document.addEventListener('mousemove', (e) =>
      handleMouseMove(e, mainScene)
    );

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
