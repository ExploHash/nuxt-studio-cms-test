<template>
  <div class="bg-gray-100 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">{{ title }}</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {{ description }}
        </p>
      </div>
      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
          {{ $slots.default() }}
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Our Features'
  },
  description: {
    type: String,
    default: 'Designed to empower you'
  },
});
</script>

<style scoped>
/* You can add additional styles here if needed */
</style>
