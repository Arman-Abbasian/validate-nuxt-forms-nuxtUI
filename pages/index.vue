<script setup lang="ts">

</script>
<template>
    <div class="font-afacad-flux bg-success">
    <h1 class="font-thin text-4xl text-secondary-500 bg-gray-400">Thin Heading</h1>
    <h2 class="font-extralight text-primary-400">Extra Light Subheading</h2>
    <p class="font-light bg-primary-500">Light Paragraph</p>
    <p class="font-normal bg-error">Regular Paragraph</p>
    <p class="font-medium">Medium Paragraph</p>
    <p class="font-semibold text-warning">Semi Bold Paragraph</p>
    <p class="font-bold text-error">Bold Paragraph</p>
    <p class="font-extrabold">Extra Bold Paragraph</p>
    <p class="font-black text-xs">Black Paragraph</p> <!-- Note: Tailwind's default goes up to 900 -->
 </div>
        <UButton>
            <UIcon name="i-heroicons-magnifying-glass"  />
        </UButton> 
        <SampleUButton />

        <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between">
          <h1>Welcome to Nuxt UI Starter</h1>
          <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme>
        </div>
      </template>
      <UButton icon="i-heroicons-book-open" to="https://ui.nuxt.com" target="_blank">Open Nuxt UI Documentation</UButton>
    </UCard>
  </UContainer>
</template>
