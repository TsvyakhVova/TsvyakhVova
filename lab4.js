let scene, camera, renderer, controls, pointlight
function init() {
	scene = new THREE.Scene()
	renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)

	//renderer.outputEncoding = THREE.sRGBEncoding
	//renderer.toneMapping = THREE.ACESFilmicToneMapping
	//renderer.toneMappingExposure = 1.25

	camera = new THREE.PerspectiveCamera(
		50,
		window.innerWidth / window.innerHeight,
		1,
		1000
	)
	camera.position.set(0, 0, 500)

	controls = new THREE.OrbitControls(camera, renderer.domElement)

	controls.autoRotate = true
	controls.autoRotateSpeed = 0.5
	controls.enableDamping = true

	pointlight = new THREE.PointLight(0xffffff, 1)
	pointlight.position.set(200, 200, 200)
	scene.add(pointlight)

	let envmaploader = new THREE.PMREMGenerator(renderer)

	new THREE.RGBELoader()
		//.setPath("../assets/textures/")
		.load("hansaplatz_4k.hdr", function (hdrmap) {
			let envmap = envmaploader.fromCubemap(hdrmap)
			let texture = new THREE.CanvasTexture(new THREE.FlakesTexture())

			const ballMaterial = {
				clearcoat: 1.0,
				clearcoatRoughness: 0.1,
				metalness: 0.9,
				roughness: 0.5,
				color: 0x8418ca,
				envMap: envmap.texture,
			}

			let ballGeo = new THREE.SphereGeometry(100, 64, 64)
			let ballMat = new THREE.MeshPhysicalMaterial(ballMaterial)
			let ballMesh = new THREE.Mesh(ballGeo, ballMat)
			scene.add(ballMesh)
		})

	animate()
}
function animate() {
	controls.update()
	renderer.render(scene, camera)
	requestAnimationFrame(animate)
}
init()