<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Scene, PerspectiveCamera, WebGLRenderer, AmbientLight, Box3, Vector3 } from 'three';

const container = ref<HTMLDivElement | null>(null);

const loadModel = () => {
  const scene = new Scene();
  const camera = new PerspectiveCamera(75, 1, 0.1, 1000); // Square aspect ratio
  const renderer = new WebGLRenderer({ antialias: true, alpha: true });
  const light = new AmbientLight(0xffffff, 1);
  const loader = new GLTFLoader();

  renderer.setSize(250, 250);
  renderer.setClearColor(0x000000, 0); // Transparent background
  scene.add(light);

  camera.position.z = 2; // Adjust camera distance

  loader.load(
    '/models/bat.gltf',
    (gltf) => {
      const model = gltf.scene;

      // Center the model within the box
      const box = new Box3().setFromObject(model);
      const center = new Vector3();
      box.getCenter(center);
      model.position.sub(center);

      // Scale the model to fit within the box
      const size = box.getSize(new Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      model.scale.setScalar(1 / maxDim);

      scene.add(model);
    },
    undefined,
    (error) => {
      console.error('Error loading model:', error);
    }
  );

  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };

  onMounted(() => {
    if (container.value) {
      container.value.appendChild(renderer.domElement);
      animate();
    }
  });

  onUnmounted(() => {
    if (container.value && container.value.firstChild) {
      container.value.removeChild(renderer.domElement);
    }
    renderer.dispose();
  });
};

loadModel();
</script>

<template>
  <div ref="container" class="product-model"></div>
</template>

<style scoped>
.product-model {
  width: 250px;
  height: 250px;
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
