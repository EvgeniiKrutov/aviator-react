import { BoxGeometry, Mesh, MeshPhongMaterial, Object3D } from 'three';
import { colors } from '../constants/constants';

export default class Cloud {
  private geometry?: BoxGeometry;
  private material?: MeshPhongMaterial;
  public mesh?: Object3D;

  constructor() {
    this.initCloudMesh();
  }

  initCloudMesh() {
    this.mesh = new Object3D();
    this.geometry = new BoxGeometry(20, 20, 20);
    this.material = new MeshPhongMaterial({
      color: colors.lightGray,
    });

    const blocksNumber = 3 + Math.floor(Math.random() * 3);

    for (let i = 0; i < blocksNumber; i++) {
      const m = new Mesh(this.geometry, this.material);

      m.position.x = i * 15;
      m.position.y = Math.random() * 10;
      m.position.z = Math.random() * 10;
      m.rotation.z = Math.random() * Math.PI * 2;
      m.rotation.y = Math.random() * Math.PI * 2;

      var size = 0.1 + Math.random() * 0.9;
      m.scale.set(size, size, size);

      m.castShadow = true;
      m.receiveShadow = true;

      this.mesh.add(m);
    }
  }
}
