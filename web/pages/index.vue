<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      message: 'Hello world!',
    }
  },
})
</script>

<template>
  <h1>Some example website</h1>
  <a href="/books">Books catalogue</a>
  <a href="/blog">Blog with posts</a>
</template>

<style scoped>
a {
  display: block;
  margin-bottom: 10px;
}
</style>
