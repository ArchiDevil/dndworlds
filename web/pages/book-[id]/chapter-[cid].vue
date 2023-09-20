<script setup lang="ts">
const route = useRoute()
const id = ref(route.params.cid)
</script>

<template>
  <p>This a chapter {{ id }} content</p>
</template>
