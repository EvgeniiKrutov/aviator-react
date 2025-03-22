import * as THREE from 'three';
import { colors } from '../constants/constants';

export default class GameScene {
  private scene?: THREE.Scene;
  private camera?: THREE.PerspectiveCamera;
  private renderer?: THREE.WebGLRenderer;

  private fov: number = 60;
  private canvasId?: string;

  private hemisphereLight?: THREE.HemisphereLight;
  private directionalLight?: THREE.DirectionalLight;
  private gameObjects?: Record<string, any>;

  constructor(canvasId: string) {
    this.canvasId = canvasId;

    this.initialize();
  }

  initialize() {
    if (!this.canvasId) return;
    this.scene = new THREE.Scene();

    this.scene.fog = new THREE.Fog(0xf7d9aa, 100, 950);

    this.camera = new THREE.PerspectiveCamera(
      this.fov,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );

    this.camera.position.x = 0;
    this.camera.position.z = 200;
    this.camera.position.y = 100;

    const canvas = document.getElementById(this.canvasId);

    if (!canvas) return;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;

    document.body.appendChild(this.renderer.domElement);

    this.createLights();

    window.addEventListener('resize', () => this.onWindowResize(), false);
  }

  createLights() {
    this.hemisphereLight = new THREE.HemisphereLight(
      colors.gray,
      colors.black,
      0.9
    );
    this.directionalLight = new THREE.DirectionalLight(colors.white, 5);

    this.directionalLight.position.set(150, 350, 350);
    this.directionalLight.castShadow = true;

    this.directionalLight.shadow.camera.left = -400;
    this.directionalLight.shadow.camera.right = 400;
    this.directionalLight.shadow.camera.top = 400;
    this.directionalLight.shadow.camera.bottom = -400;
    this.directionalLight.shadow.camera.near = 1;
    this.directionalLight.shadow.camera.far = 1000;

    this.directionalLight.shadow.mapSize.width = 2048;
    this.directionalLight.shadow.mapSize.height = 2048;

    if (this.scene) {
      this.scene.add(this.hemisphereLight);
      this.scene.add(this.directionalLight);
    }
  }

  animate() {
    if (this.gameObjects && this.gameObjects.sea) {
      this.gameObjects.sea.animate();
    }
    if (this.gameObjects && this.gameObjects.sky) {
      this.gameObjects.sky.animate();
    }

    window.requestAnimationFrame(this.animate.bind(this));
    this.render();
  }

  render() {
    if (!this.renderer || !this.scene || !this.camera) return;

    this.renderer?.render(this.scene, this.camera);
  }

  onWindowResize() {
    if (this.camera) {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
    }

    if (this.renderer) {
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }

  getScene() {
    return this.scene;
  }

  setGameObjects(gameObjects: Record<string, any>) {
    this.gameObjects = gameObjects;
  }
}
