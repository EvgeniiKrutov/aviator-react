import { BoxGeometry, Mesh, MeshPhongMaterial, Object3D } from 'three';
import { colors } from '../constants/constants';

export default class Airplane {
  public mesh?: Object3D;
  private propeller?: Mesh;

  constructor() {
    this.initAirplaneMesh();
  }

  initAirplaneMesh() {
    this.mesh = new Object3D();

    // Create the cabin
    const geomCockpit = new BoxGeometry(60, 50, 50, 1, 1, 1);
    const matCockpit = new MeshPhongMaterial({
      color: colors.red,
      flatShading: true,
    });
    const cockpit = new Mesh(geomCockpit, matCockpit);
    cockpit.castShadow = true;
    cockpit.receiveShadow = true;
    this.mesh.add(cockpit);

    // Create the engine
    var geomEngine = new BoxGeometry(20, 50, 50, 1, 1, 1);
    var matEngine = new MeshPhongMaterial({
      color: colors.lightGray,
      flatShading: true,
    });
    var engine = new Mesh(geomEngine, matEngine);
    engine.position.x = 40;
    engine.castShadow = true;
    engine.receiveShadow = true;
    this.mesh.add(engine);

    // Create the tail
    var geomTailPlane = new BoxGeometry(15, 20, 5, 1, 1, 1);
    var matTailPlane = new MeshPhongMaterial({
      color: colors.red,
      flatShading: true,
    });
    var tailPlane = new Mesh(geomTailPlane, matTailPlane);
    tailPlane.position.set(-35, 25, 0);
    tailPlane.castShadow = true;
    tailPlane.receiveShadow = true;
    this.mesh.add(tailPlane);

    // Create the wing
    var geomSideWing = new BoxGeometry(40, 8, 150, 1, 1, 1);
    var matSideWing = new MeshPhongMaterial({
      color: colors.red,
      flatShading: true,
    });
    var sideWing = new Mesh(geomSideWing, matSideWing);
    sideWing.castShadow = true;
    sideWing.receiveShadow = true;
    this.mesh.add(sideWing);

    // propeller
    var geomPropeller = new BoxGeometry(20, 10, 10, 1, 1, 1);
    var matPropeller = new MeshPhongMaterial({
      color: colors.brown,
      flatShading: true,
    });
    this.propeller = new Mesh(geomPropeller, matPropeller);
    this.propeller.castShadow = true;
    this.propeller.receiveShadow = true;

    // blades
    var geomBlade = new BoxGeometry(1, 100, 20, 1, 1, 1);
    var matBlade = new MeshPhongMaterial({
      color: colors.brownDark,
      flatShading: true,
    });

    var blade = new Mesh(geomBlade, matBlade);
    blade.position.set(8, 0, 0);
    blade.castShadow = true;
    blade.receiveShadow = true;
    this.propeller.add(blade);
    this.propeller.position.set(50, 0, 0);
    this.mesh.add(this.propeller);

    this.mesh.scale.set(0.25, 0.25, 0.25);
    this.mesh.position.y = 100;
  }
}
