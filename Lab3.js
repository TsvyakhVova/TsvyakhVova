const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

let material_earth = new THREE.MeshBasicMaterial({
	map: new THREE.TextureLoader().load("one.jpg"),
})
let material_sun = new THREE.MeshBasicMaterial({
	map: new THREE.TextureLoader().load("two.jpg"),
})
let material_moon = new THREE.MeshBasicMaterial({
	map: new THREE.TextureLoader().load("three.jpg"),
})
let material_black = new THREE.MeshBasicMaterial({
	map: new THREE.TextureLoader().load("sky.jpg"),
})
let material_mars = new THREE.MeshBasicMaterial({
	map: new THREE.TextureLoader().load("foure.jpg"),
})


const geometry_earth = new THREE.SphereGeometry(0.3, 50, 50)
const geometry_sun = new THREE.SphereGeometry(2, 50, 50)
const geometry_moon = new THREE.SphereGeometry(0.1, 50, 50)
const geometry_black = new THREE.SphereGeometry(4,50,50)
const geometry_mars = new THREE.SphereGeometry(0.1,50,50)

const earth = new THREE.Mesh(geometry_earth, material_earth)
const sun = new THREE.Mesh(geometry_sun, material_sun)
const moon = new THREE.Mesh(geometry_moon, material_moon)
const black = new THREE.Mesh(geometry_black, material_black)
const mars = new THREE.Mesh(geometry_mars, material_mars)

sun.position.set(0, 0, 0)
black.position.set(7, 3, 0)
scene.add(sun)
scene.add(black)
scene.add(earth)
scene.add(moon)
scene.add(mars)
let timer = 0
var t = 0
camera.position.z = 5
function animate() {
	requestAnimationFrame(animate)
	renderer.render(scene, camera)
	t += 0.01
	sun.rotation.y += 0.0006
	earth.rotation.y += 0.001
	moon.rotation.y += 0.05
	mars.rotation.x += 0.05
	earth.position.z = 2.5 * Math.sin(t)
	earth.position.x = 2.5 * Math.cos(t)
	moon.position.x = 2.9 * Math.cos(t)
	moon.position.z = 2.9 * Math.sin(t)
	mars.position.z = 2.5 * Math.cos(t)
	mars.position.y = 2.5 * Math.sin(t)
}
animate()
