<script setup lang="ts">
import { ErrorMessage, Field, Form } from 'vee-validate';

const onSubmit=(values:Object)=> {
      console.log(values);
    }

    const validateEmail=(value:string)=> {
      // if the field is empty
      if (!value) {
        return 'This field is required';
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid email';
      }
      // All is good
      return true;
    };
</script>
<template>
    <Form  @submit="onSubmit">
      <Field type="email" name="email" :rules="validateEmail" />
      <ErrorMessage name="email" />
      <button class="bg-red-500 p-2 rounded-md">Sign up for newsletter</button>
    </form>
</template>