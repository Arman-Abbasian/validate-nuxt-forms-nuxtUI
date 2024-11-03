<script setup lang="ts">

import { ref } from 'vue';
import UInputButtonCustomize from './UInputButtonCustomize.vue';

// Reactive state to bind with MyCustomInput
const inputValue = ref('');

// Handler for button click
const handleClick = () => {
  console.log('Button clicked inside custom input!', inputValue.value);
};

</script>

<template>
  <div>
    <h2>Testing My Custom Input</h2>
    <!-- Using the MyCustomInput component -->
    <UInputButtonCustomize  button-icon="i-horicons" :click-handler="handleClick" icon="i-horicons" variant-type="link" name="buttonName" button-color="green" v-show=true button-class="bg-red-400"   />

    <!-- Display the value from the input field -->
    <p>Current Input Value: {{ inputValue }}</p>
  </div>
</template>
