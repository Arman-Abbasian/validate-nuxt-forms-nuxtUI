<script setup>
import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const schema = yup.object({
  email: yup.string().email("email format is not true").required("field is required"),
  name: yup.string().required("field is required"),
});

function onSubmit(values) {
  alert(JSON.stringify(values, null, 2));
}
</script>

<template>
  <Form :validation-schema="schema" @submit="onSubmit">
    <div>
    <Field name="email" type="email" class="ring-2 ring-blue-500 p-2" />
    <ErrorMessage name="email" class="text -red-800" />
</div>
<div>
    <Field name="name" class="ring-2 ring-blue-500 p-2"/>
    <ErrorMessage name="name" class="text-red-800"/>
</div>

    <button>Submit</button>
  </Form>
</template>
