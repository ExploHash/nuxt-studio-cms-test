<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-indigo-600 text-white">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div class="text-2xl font-bold">My Website</div>
        <nav class="space-x-4">
          <a href="/" class="hover:text-gray-200">Home</a>
          <a href="/about" class="hover:text-gray-200">About</a>
          <a href="/contact" class="hover:text-gray-200">Contact</a>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-grow">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-6">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        © 2024 My Website. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<script setup>

import appConfig from '~/app.config.ts';
useHead({
  title: appConfig?.seo?.title,
  meta: [
    {
      name: 'description',
      content: appConfig?.seo?.description
    }
  ],
  bodyAttrs: {
    style: `background-color: ${appConfig?.ui?.primaryColor}`
  }
});
</script>

<style scoped>
/* Add any additional styles if needed */
</style>
