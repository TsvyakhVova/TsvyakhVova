const renderer = new THREE.WebGLRenderer()
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
)
// const geometry = new THREE.PlaneGeometry(100, 100, 40, 40)
// // const material = new THREE.MeshBasicMaterial({ color: 0x0000ff, side: THREE.DoubleSide });
// const material = new THREE.MeshLambertMaterial({
// 	map: new THREE.TextureLoader().load("../assets/textures/water.jpg"),
// 	transparent: true,
// 	opacity: 0.3,
// })
// const plane = new THREE.Mesh(geometry, material)
// var vertices = geometry.attributes.position.array
// for (var i = 0, j = 0, l = vertices.length; i < l; i++, j += 3) {
// 	vertices[j] -= -10 + Math.random() * 2
// 	vertices[i + 4] += -10 + Math.random() * 1
// }
// scene.add(plane)
function init() {
	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)
	controls = new THREE.OrbitControls(camera, renderer.domElement)
	var light1 = new THREE.AmbientLight(0xffffff)
	scene.add(light1)

	var light2 = new THREE.DirectionalLight(0x0000ff)
	light2.position.set(1, 1, 1).normalize()
	scene.add(light2)
	const geometry = new THREE.PlaneGeometry(50, 50, 5, 5)
	const material = new THREE.MeshLambertMaterial({
		map: new THREE.TextureLoader().load("../assets/textures/send.jpg"),
		transparent: true,
		opacity: 1,
	})
	const plane = new THREE.Mesh(geometry, material)
	scene.add(plane)
	plane.position.z -= 10
	let timer = 0
	var t = 0
	camera.position.z = 5
}
function animate() {
	controls.update()
	// plane.position.y += 0.01
	const geometry = new THREE.PlaneGeometry(100, 100, 40, 40)
	// const material = new THREE.MeshBasicMaterial({ color: 0x0000ff, side: THREE.DoubleSide });
	const material = new THREE.MeshLambertMaterial({
		map: new THREE.TextureLoader().load("../assets/textures/water.jpg"),
		transparent: true,
		opacity: 0.3,
	})
	const plane = new THREE.Mesh(geometry, material)
	var vertices = geometry.attributes.position.array
	for (var i = 0, j = 0, l = vertices.length; i < l; i++, j += 3) {
		vertices[j + 3] -= -10 + Math.random() * 2
		// vertices[i + 4] += -10 + Math.random() * 1
	}
	scene.add(plane)
	renderer.render(scene, camera)
	requestAnimationFrame(animate)
}
init()
animate()
