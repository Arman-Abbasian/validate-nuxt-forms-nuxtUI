<script setup lang="ts">
import type { ButtonColor,ButtonVariant, } from '#ui/types/button';

const ui={
  wrapper: 'relative',
  base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75',
  form: 'form-input',
  rounded: 'rounded-md',
  placeholder: 'placeholder-secondary-400 dark:placeholder-secondary-400',
  leading: {
    padding: {
      '2xs': 'ps-4',
      xs: 'ps-4',
      sm: 'ps-4',
      md: 'ps-4',
      lg: 'ps-4',
      xl: 'ps-4',
    },
  },
  trailing: {
    padding: {
      '2xs': 'pe-16',
      xs: 'pe-16',
      sm: 'pe-16',
      md: 'pe-16',
      lg: 'pe-16',
      xl: 'pe-16',
    },
  },
  color: {
    white: {
      outline: 'shadow-sm bg-priamry-500 dark:bg-main-500  text-secondary-900 dark:text-secondary-500 ring-1 ring-main-600 dark:ring-main-700 focus:ring-2 focus:ring-main-600 dark:focus:ring-main-400',
    },
    gray: {
      outline: 'shadow-sm bg-priamry-500 dark:bg-main-500  text-secondary-900 dark:text-secondary-600 ring-1 ring-main-600 dark:ring-main-700 focus:ring-2 focus:ring-main-600 dark:focus:ring-main-400',
    },
  },
  variant: {
    outline: 'shadow-sm bg-transparent border-1 border-green-500 text-secondary-900 dark:text-white ring-1 ring-inset ring-green-500 dark:ring-green-400 focus:ring-2 focus:ring-green-500 dark:focus:ring-green-400',
    none: 'bg-transparent ring-0 shadow-none',
  },
  icon: {
    base: 'flex-shrink-0 text-gray-400 dark:text-gray-500',
    color: 'text-red-500 dark:text-red-400',
    loading: 'animate-spin',
    size: {
      '2xs': 'h-4 w-4',
      xs: 'h-4 w-4',
      sm: 'h-5 w-5',
      md: 'h-5 w-5',
      lg: 'h-5 w-5',
      xl: 'h-6 w-6',
    },
    leading: {
      wrapper: 'absolute inset-y-0 start-0 flex items-center',
      pointer: 'pointer-events-none',
      padding: {
        '2xs': 'px-4',
        xs: 'px-4',
        sm: 'px-4',
        md: 'px-4',
        lg: 'px-4',
        xl: 'px-4'
      }
    },
    trailing: {
      wrapper: 'absolute inset-y-0 end-0  flex items-center bg-main-400 rounded-md',
      pointer: '',
      padding: {
        '2xs': 'px-3',
        xs: 'px-3',
        sm: 'px-3',
        md: 'px-3',
        lg: 'px-3',
        xl: 'px-3',
      },
    },
  },
  default: {
    size: 'sm',
    color: 'red',
    variant: 'outline',
    loadingIcon: 'i-heroicons-arrow-path-20-solid',
  },
}
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: 'Enter text...'
  },
  icon: {
    type: String,
    default: 'i-heroicons-magnifying-glass-20-solid'
  },
  whenShow: {
    type: Boolean,
    default: false
  },
  buttonColor: {
    type: String as PropType<ButtonColor>,
    default: 'gray'
  },
  variantType: {
    type: String as PropType<ButtonVariant> ,
    default: 'link'
  },
  buttonIcon: {
    type: String,
    default: ''
  },
  clickHandler: {
    type:Function as PropType<(...args: any[]) => void>,
    required: true
  },
  buttonClass:{
    type:String,
  }
});

</script>


<template>
    <div class="w-72">
    <UInput
      :v-model="name"
      :name="name"
      :placeholder="placeholder"
      :icon="icon"
      autocomplete="off"
      :ui="ui"
    >
      <template #trailing>
        <UButton
          :v-show="whenShow"
          :color="buttonColor"
          :variant="variantType"
          :icon="buttonIcon"
          :padded="false"
          @click="clickHandler"
          :class="buttonClass"
        />
      </template>
    </UInput>
</div>
  </template>
  
  
  
  
  