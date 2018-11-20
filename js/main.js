import THREE from "three.min.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// Create cube
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  wireframe: false
});
const cube = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(cube);

camera.position.z = 3;

window.addEventListener("resize", () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

const update = () => {};

const render = () => {
  renderer.render(scene, camera);
};

const gameLoop = () => {
  requestAnimationFrame(gameLoop);
  update();
  render();
};

gameLoop();
