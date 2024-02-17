<script setup>
import { ref, onMounted } from 'vue';

const isDrawing = ref(false);
let context = null;

onMounted(() => {
  const canvas = document.getElementById('digit-canvas');
  context = canvas.getContext('2d');
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);
});

const startDrawing = (event) => {
  isDrawing.value = true;
  context.beginPath();
  context.moveTo(event.offsetX, event.offsetY);
};

const draw = (event) => {
  if (!isDrawing.value) return;
  context.strokeStyle = 'white';
  context.lineWidth = 10;
  context.lineCap = 'round';
  context.lineTo(event.offsetX, event.offsetY);
  context.stroke();
};

const stopDrawing = () => {
  if (!isDrawing.value) return;
  isDrawing.value = false;
  context.closePath();
};

const clearCanvas = () => {
  context.fillStyle = "black";
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);
};

const recognizeDigit = () => {
  // Prepare and send canvas data to backend for digit recognition
};
</script>

<template>
  <div id="app">
    <canvas id="digit-canvas" width="280" height="280" @mousedown="startDrawing" @mousemove="draw" @mouseup="stopDrawing" @mouseleave="stopDrawing"></canvas>
    <button @click="clearCanvas">Clear</button>
    <button @click="recognizeDigit">Recognize</button>
  </div>
</template>

<style scoped>
#digit-canvas {
  border: 2px solid #000;
  margin-bottom: 10px;
  cursor: crosshair;
  background-color: black;
}
button {
  margin-right: 5px;
}
</style>
