import * as THREE from "three";
import "./style.css";

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, 0);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);


const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00aaff});
const box = new THREE.Mesh(boxGeometry, boxMaterial);

scene.add(box);

function render(time: number): void {
	const timeMs = time * 0.001;

	box.rotation.x = timeMs
	box.rotation.y = timeMs/2;

	renderer.render(scene, camera);
	
	requestAnimationFrame(render);
}

requestAnimationFrame(render);