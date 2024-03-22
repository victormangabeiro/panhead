<script setup lang="ts">
const nav = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'External',
    to: '/external',
  },
  {
    label: 'Component',
    to: '/component',
  },
]
</script>

<template>
  <div class="w-full h-full">
    <header class="w-full h-full bg-gray-200 flex items-center pl-8">
      <h1 class="text-2xl font-bold">PWA</h1>
    </header>
    <main class="w-full h-full pt-4 px-8">
  
      <NuxtPage />
    </main>
  </div>
</template>