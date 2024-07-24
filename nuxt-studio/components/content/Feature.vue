<template>
  <div class="bg-gray-100 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-10">
        <h2 class="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Features</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Designed to empower you
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          A brief description of the amazing features we provide.
        </p>
      </div>
      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
          <div v-for="(feature, index) in features" :key="index" class="relative">
            <dt>
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <!-- Replace with your icon -->
                <feature.icon class="h-6 w-6"/>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900">{{ feature.title }}</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">{{ feature.description }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  features: {
    type: Array,
    required: true,
    default: () => [
      {
        icon: 'IconComponent', // You should import or define your icon components
        title: 'Feature One',
        description: 'Description for feature one.'
      },
      {
        icon: 'IconComponent',
        title: 'Feature Two',
        description: 'Description for feature two.'
      },
      {
        icon: 'IconComponent',
        title: 'Feature Three',
        description: 'Description for feature three.'
      }
    ]
  }
});
</script>

<style scoped>
/* You can add additional styles here if needed */
</style>
