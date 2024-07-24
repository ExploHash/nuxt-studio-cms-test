<template>
  <div class="bg-indigo-600">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
      <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        <span class="block">{{ title }}</span>
        <span class="block text-indigo-200">{{ description }}</span>
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <button @click="onButtonClick" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
            {{ buttonText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'Ready to get started?'
  },
  description: {
    type: String,
    required: true,
    default: 'Get in touch with us today.'
  },
  buttonText: {
    type: String,
    required: true,
    default: 'Contact Us'
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
