<script setup lang="ts">
import UInputButtonCustomize from './UInputButtonCustomize.vue';

function handleClick() {
  alert("yes");
}
</script>

<template>
    <UInputButtonCustomize  name="ali"
    placeholder="enter your name..."
    icon="i-hero" 
    :whenShow=true
    buttonColor="green"
    variantType="link"
    buttonIcon="material-symbols:search"
    :clickHandler='handleClick'
    buttonClass=""
  />
</template>