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

// const light = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.75);
// light.position.set(0.5, 1, 0.75);
// scene.add(light);

const controls = new THREE.OrbitControls(camera, renderer.domElement);

// Create cube
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterials = [
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("img/grass.jpg"),
    side: THREE.DoubleSide
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("img/grass.jpg"),
    side: THREE.DoubleSide
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("img/grass.jpg"),
    side: THREE.DoubleSide
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("img/grass.jpg"),
    side: THREE.DoubleSide
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("img/grass.jpg"),
    side: THREE.DoubleSide
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("img/grass.jpg"),
    side: THREE.DoubleSide
  })
];

const boxMaterial = new THREE.MeshFaceMaterial(boxMaterials);
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

const update = () => {
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
};

const render = () => {
  renderer.render(scene, camera);
};

const gameLoop = () => {
  requestAnimationFrame(gameLoop);
  update();
  render();
};

gameLoop();
