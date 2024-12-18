<template>
  <div class="viewer-container">
    <div v-if="isLoading">
      <div class="skeleton-loader">
        <div class="skeleton-image"></div>
      </div>
    </div>
    <div ref="viewerContainer" class="product-container" >
      <Icon name="tdesign:map-3d" class="moveIcon" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from "vue";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { TrackballControls } from "three/examples/jsm/controls/TrackballControls";

const viewerContainer = ref(null);
const isLoading = ref(true);
let autoRotate = true;

onMounted(() => {
  // Scene setup
  const scene = new THREE.Scene();

  // Camera setup
  const camera = new THREE.PerspectiveCamera(1, 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  renderer.setSize(300, 300);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.5;

  viewerContainer.value.appendChild(renderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 8);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.1);
  directionalLight.position.set(5, 5, 5);
  scene.add(ambientLight, directionalLight);

  let modelGroup = null;
  // Load the model with DRACOLoader
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
  loader.setDRACOLoader(dracoLoader);

  loader.load(
    "/models/new/Bat.gltf",
    (gltf) => {
      const model = gltf.scene;

      modelGroup = new THREE.Group();
      modelGroup.add(model);

      const box = new THREE.Box3().setFromObject(model);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());

      // Center the model
      model.position.set(-center.x, -center.y, -center.z);

      const maxDim = Math.max(size.x, size.y, size.z);
      const scaleFactor = 8 / maxDim;
      modelGroup.scale.set(scaleFactor, scaleFactor, scaleFactor);
      scene.add(modelGroup);

      const fov = camera.fov * (Math.PI / 3000);
      const modelHeight = size.y;
      const cameraDistance = modelHeight / (2 * Math.tan(fov / 2));
      camera.position.set(0.19, 4, cameraDistance * 12);
      camera.lookAt(0, 0, 0);
      isLoading.value = false;
    },
    undefined,
    (error) => {
      console.error("Error loading model:", error);
      isLoading.value = false;
    },
  );

  const controls = new TrackballControls(camera, renderer.domElement);
  controls.noRotate = false;
  controls.noZoom = true; 
  controls.noPan = false;
  controls.staticMoving = false;
  controls.dynamicDampingFactor = 0.1; 

  controls.enableRotate = true;

  controls.addEventListener("start", () => {
    autoRotate = false;
  });

  const animate = () => {
    requestAnimationFrame(animate);

    if (modelGroup && autoRotate) {
      modelGroup.rotation.y += 0.005;
    }

    controls.update();
    renderer.render(scene, camera);
  };

  animate();

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
  width: 100%;
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
