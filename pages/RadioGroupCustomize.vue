<script setup lang="ts">
import type { buttonGroup } from '@nuxt/ui/dist/runtime/ui.config';

const options = [{
  value: 'email',
  label: 'Email'
}, {
  value: 'sms',
  label: 'Phone (SMS)'
}, {
  value: 'push',
  label: 'Push notification'
}]

const selected = ref('sms');


const customUiConfig = {
  fieldset: 'flex flex-row space-x-4', // Layout of the radio options in a row
};

</script>

<template>
  <URadioGroup v-model="selected"  legend="{ <div>hello</div> }" required :options="options" :ui="customUiConfig" :uiRadio="{
    wrapper: 'flex items-start space-x-4',
    container: 'flex items-center h-5',
    form: 'form-radio',
    color: 'text-teal-500 dark:text-teal-400',
    background: 'bg-gary-200 dark:bg-gray-100',
    border: 'border border-blue-300 dark:border-red-700',
    ring: 'focus-visible:ring-2 focus-visible:ring-teal-500 dark:focus-visible:ring-teal-400',
    inner: 'ms-3 flex flex-col',
    label: 'text-sm font-medium text-gray-700',
    required: 'text-sm text-red-500',
    help: 'text-sm text-yellow-900',
    default:{
        color:'text-red-500'

    }
  }" >
  <template #legend>
    <UIcon name="i-heroicons-light-bulb" class="w-5 h-5" />
    </template>
  </URadioGroup>

</template>

