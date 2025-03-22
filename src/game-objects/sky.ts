import { Object3D } from 'three';
import Cloud from './cloud';

export default class Sky {
  private mesh?: Object3D;

  constructor(cloudsCount: number) {
    this.initSkyMesh(cloudsCount);
  }

  getMesh() {
    return this.mesh;
  }

  initSkyMesh(cloudsCount: number) {
    this.mesh = new Object3D();
    const stepAngle = (Math.PI * 2) / cloudsCount;

    for (let i = 0; i < cloudsCount; i++) {
      const cloud = new Cloud();

      const finalAngle = stepAngle * i;
      var h = 750 + Math.random() * 200;

      var size = 1 + Math.random() * 2;

      cloud.mesh!.position.y = Math.sin(finalAngle) * h;
      cloud.mesh!.position.x = Math.cos(finalAngle) * h;
      cloud.mesh!.position.z = -400 - Math.random() * 400;
      cloud.mesh!.rotation.z = finalAngle + Math.PI / 2;

      cloud.mesh!.scale.set(size, size, size);

      this.mesh.add(cloud.mesh!);
    }

    this.mesh.position.y = -600;
  }

  animate() {
    if (!this.mesh) return;

    this.mesh.rotation.z += 0.005;
  }
}
