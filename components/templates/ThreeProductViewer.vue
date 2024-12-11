
<template>
      
  <div class="viewer-container">
    <div v-if="isLoading">
        <!-- Skeleton Loader -->
        <div class="skeleton-loader">
          <div class="skeleton-image"></div>

        </div>
      </div>
    <div ref="viewerContainer" class="product-container">
      <Icon name="tdesign:map-3d" class="moveIcon" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const viewerContainer = ref(null);
const isLoading = ref(true); // Initial state is loading

onMounted(() => {
  // Scene setup
  const scene = new THREE.Scene();

  // Camera setup
  const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(300, 300);
  renderer.setPixelRatio(window.devicePixelRatio);
  viewerContainer.value.appendChild(renderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(5, 5, 5);
  scene.add(ambientLight, directionalLight);

  let modelGroup = null; // Declare modelGroup to access it in the animation loop

  // Load the model
  const loader = new GLTFLoader();
  loader.load(
    "/models/latest/Bat.gltf",
    (gltf) => {
      const model = gltf.scene;

      // Assign the global modelGroup instead of redefining it
      modelGroup = new THREE.Group();
      modelGroup.add(model);

      // Calculate bounding box for the entire model
      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());

      // Center the model
      model.position.set(-center.x, -center.y, -center.z);

      // Scale the model to fit within the camera's view
      const maxDim = Math.max(size.x, size.y, size.z);
      const scaleFactor = 8 / maxDim; // Adjust this factor for consistent scaling
      modelGroup.scale.set(scaleFactor, scaleFactor, scaleFactor);

      // Rotate the bat to the correct orientation (fix rotation to face forward)

      // Add the model group to the scene
      scene.add(modelGroup);

      // Add debugging helpers
      /* const gridHelper = new THREE.GridHelper(10, 10); // Grid size 10, divisions 10
      scene.add(gridHelper);

      const axesHelper = new THREE.AxesHelper(5); // Axes size 5
      scene.add(axesHelper); 

      // Add a bounding box helper to visualize the model's bounds
      const boxHelper = new THREE.BoxHelper(modelGroup, 0xff0000); // Red bounding box
      scene.add(boxHelper);
      */

      // Adjust camera position dynamically
      const fov = camera.fov * (Math.PI / 3000); // Convert FOV to radians
      const modelHeight = size.y; // Height of the model from bounding box
      const cameraDistance = modelHeight / (2 * Math.tan(fov / 2)); // Fit the model height

      // Adjust the camera's position dynamically for better fit
      camera.position.set(0.19, 4, cameraDistance * 1.1); // Slight zoom-in
      camera.lookAt(0, 0, 0); // Ensure the camera looks at the center of the model
      // Stop showing the skeleton loader
      isLoading.value = false;
    },
    undefined,
    (error) => {
      console.error("Error loading model:", error);
      isLoading.value = false; // Ensure loader disappears on error

    },
  );

  const controls = new OrbitControls(camera, renderer.domElement);

  // Constrain movement to only rotate around the Z-axis
  controls.enableDamping = true; // Smooth rotation
  controls.dampingFactor = 0.1; // Dampening effect for smoother interaction
  controls.screenSpacePanning = false; // Disable panning (left/right and up/down)

  controls.minPolarAngle = Math.PI / 2; // Prevent movement along the Y-axis
  controls.maxPolarAngle = Math.PI / 2; // Prevent movement along the Y-axis

  controls.enableRotate = true; // Allow rotation
  controls.minAzimuthAngle = -Math.PI; // Allow full 360° rotation
  controls.maxAzimuthAngle = Math.PI; // Allow full 360° rotation

  let lastPosition = new THREE.Vector3();
  let lastRotation = new THREE.Euler();
  let lastScale = new THREE.Vector3();

  const animate = () => {
    requestAnimationFrame(animate);

    if (modelGroup) {
      // Check for position changes
      if (!modelGroup.position.equals(lastPosition)) {
        console.log(
          `Updated Position: x=${modelGroup.position.x}, y=${modelGroup.position.y}, z=${modelGroup.position.z}`,
        );
        lastPosition.copy(modelGroup.position);
      }

      // Check for rotation changes
      if (!modelGroup.rotation.equals(lastRotation)) {
        console.log(
          `Updated Rotation: x=${modelGroup.rotation.x}, y=${modelGroup.rotation.y}, z=${modelGroup.rotation.z}`,
        );
        lastRotation.copy(modelGroup.rotation);
      }

      // Check for scale changes
      if (!modelGroup.scale.equals(lastScale)) {
        console.log(
          `Updated Scale: x=${modelGroup.scale.x}, y=${modelGroup.scale.y}, z=${modelGroup.scale.z}`,
        );
        lastScale.copy(modelGroup.scale);
      }
    }

    controls.update();
    renderer.render(scene, camera);

  };

  animate();

  // Cleanup on unmount
  viewerContainer.value.__destroy__ = () => {
    renderer.dispose();
    controls.dispose();
  };
});

onUnmounted(() => {
  if (viewerContainer.value && viewerContainer.value.__destroy__) {
    viewerContainer.value.__destroy__();
  }
});
</script>

<style scoped>
.viewer-container {
  display: flex;
  margin-left: 20px;
  margin-right: 20px;
  background-color: #fff;
  box-shadow: 12px 12px 12px rgba(0, 0, 0, 0.1);

  .product-container {
    height: 300px;
    overflow: hidden;
    margin: 0 auto;
    justify-content: center;
    .moveIcon {
      position: absolute;
      font-size: 1.5rem;
      color: #000;
      right: 40px;
      top: 430px;
    }
  }
}

.skeleton-loader {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  height: 250px;
  margin-left: 50%;
  gap: 10px;
  width:100%;
}

.skeleton-image {
  height: 80%;
  width: 125px;
  border-radius: 8px;
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  animation: 1.5s shine linear infinite;
}

@keyframes shine {
  to {
    background-position-x: -200%;
  }
}
</style>
