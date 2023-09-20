<script setup lang="ts">
const route = useRoute()
const id = ref(route.params.id)
</script>

<template>
  <h1>This is a book page</h1>
  <p>Its ID is: {{ id }}</p>
</template>
