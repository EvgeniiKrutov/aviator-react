import { Scene } from 'three';
import Sea from '../game-objects/sea';
import Sky from '../game-objects/sky';
import Airplane from '../game-objects/airplane';

export const createGameObjects = (scene?: Scene) => {
  if (!scene) return;

  const sea = new Sea();
  const sky = new Sky(20);
  const airplane = new Airplane();

  scene.add(sea.getMesh()!);
  scene.add(sky.getMesh()!);
  scene.add(airplane.mesh!);

  return {
    sea,
    sky,
    airplane,
  };
};
