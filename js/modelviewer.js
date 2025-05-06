
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const container = document.getElementById('viewer');
const width = container.clientWidth;
const height = container.clientHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);


const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container, container);
document.getElementById('viewer').appendChild(renderer.domElement);
renderer.setClearColor(0x87CEEB);
// Lighting
const light = new THREE.HemisphereLight(0xffffff, 0x444444);
light.position.set(0, 20, 0);
scene.add(light);

camera.aspect = width / height;
camera.updateProjectionMatrix();
renderer.setSize(width, height);
let model;

// Load model
const loader = new GLTFLoader();
loader.load('/models/ProtogenPCB.glb', function(gltf) {
    model = gltf.scene;
    scene.add(gltf.scene);
    gltf.scene.rotation.y = 0;
    gltf.scene.rotation.x = Math.PI / 2; // Rotate the model to face the camera
    gltf.scene.scale.set(100, 100, 100); 
}, undefined, function(error) {
    console.error(error);
});

camera.position.z = 4.35;

const controls = new OrbitControls(camera, renderer.domElement);

controls.autoRotate = true; // Enable auto-rotation
controls.autoRotateSpeed = 0.25; // Adjust the speed of auto-rotation
controls.enableDamping = true; // Enable damping (inertia)
controls.dampingFactor = 0.25; // Adjust the damping factor
controls.maxDistance = 10; // Set the maximum distance from the camera to the model
controls.minDistance = 0.5;

controls.mouseButtons = {
	LEFT: THREE.MOUSE.ROTATE,
	MIDDLE: THREE.MOUSE.DOLLY,
	RIGHT: THREE.MOUSE.PAN
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    //if (model) {
    //    model.rotation.z += 0.001;
    //}
    renderer.render(scene, camera);
}
animate();

// Responsive resizing
window.addEventListener('resize', () => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  });
