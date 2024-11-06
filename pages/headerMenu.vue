<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="bg-gray-800 text-white">
    <nav class="container mx-auto flex items-center justify-between p-4">
      <!-- Menu for larger screens -->
      <ul class="hidden md:flex space-x-4">
        <li><a href="/" class="hover:text-gray-400">Home</a></li>
        <li><a href="/about-us" class="hover:text-gray-400">About Us</a></li>
        <li><a href="/more" class="hover:text-gray-400">More</a></li>
        <li><a href="/basket" class="hover:text-gray-400">Basket</a></li>
      </ul>

      <!-- Login Button -->
      <div class="hidden md:block">
        <a href="/login" class="hover:text-gray-400">Login</a>
      </div>

      <!-- Hamburger menu for mobile -->
      <div class="md:hidden">
        <button @click="toggleMenu" class="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile menu with transition -->
    <transition name="slide-down">
      <div v-show="isMenuOpen" class="md:hidden bg-gray-800 text-white overflow-hidden">
        <ul class="flex flex-col items-center space-y-4 py-2">
          <li><a href="/" class="hover:text-gray-400">Home</a></li>
          <li><a href="/about-us" class="hover:text-gray-400">About Us</a></li>
          <li><a href="/more" class="hover:text-gray-400">More</a></li>
          <li><a href="/basket" class="hover:text-gray-400">Basket</a></li>
          <li><a href="/login" class="hover:text-gray-400">Login</a></li>
        </ul>
      </div>
    </transition>
  </header>
</template>


<style scoped>
/* Transition styles */
.slide-down-enter-active, .slide-down-leave-active {
  transition: max-height 0.8s ease, opacity 0.8s ease;
}
.slide-down-enter-from, .slide-down-leave-to {
  max-height: 0;
  opacity: 0;
}
.slide-down-enter-to, .slide-down-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>
