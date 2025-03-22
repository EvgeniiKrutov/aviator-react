import { CylinderGeometry, Matrix4, Mesh, MeshPhongMaterial } from 'three';
import { colors } from '../constants/constants';

export default class Sea {
  private geometry?: CylinderGeometry;
  private material?: MeshPhongMaterial;
  private mesh?: Mesh;

  constructor() {
    this.initSeaMesh();
  }

  getMesh() {
    return this.mesh;
  }

  initSeaMesh() {
    this.geometry = new CylinderGeometry(600, 600, 800, 40, 10);

    this.geometry.applyMatrix4(new Matrix4().makeRotationX(-Math.PI / 2));

    this.material = new MeshPhongMaterial({
      color: colors.blue,
      transparent: true,
      opacity: 0.6,
      flatShading: true,
    });

    this.mesh = new Mesh(this.geometry, this.material);

    this.mesh.receiveShadow = true;
    this.mesh.position.y = -600;
  }

  animate() {
    if (!this.mesh) return;

    this.mesh.rotation.z += 0.0005;
  }
}
