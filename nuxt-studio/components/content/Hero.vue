<template>
  <div class="relative bg-gray-800">
    <div class="absolute inset-0">
      <img :src="imageSrc" alt="Hero" class="w-full h-full object-cover opacity-50">
      <div class="absolute inset-0 bg-gray-800 mix-blend-multiply"></div>
    </div>
    <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
      <h1 class="text-center text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">{{ title }}</h1>
      <p class="mt-6 max-w-lg mx-auto text-center text-xl text-gray-300 sm:max-w-3xl">{{ subtitle }}</p>
      <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
        <div class="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
          <button @click="onButtonClick" class="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 sm:px-10">
            {{ buttonText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
    default: 'path/to/your/image.jpg'
  },
  title: {
    type: String,
    required: true,
    default: 'Welcome to Our Service'
  },
  subtitle: {
    type: String,
    required: true,
    default: 'We provide the best solutions for your business needs.'
  },
  buttonText: {
    type: String,
    required: true,
    default: 'Get Started'
  }
});

const emit = defineEmits(['button-click']);

const onButtonClick = () => {
  emit('button-click');
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
