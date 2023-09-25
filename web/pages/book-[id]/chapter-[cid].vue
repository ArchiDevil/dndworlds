<script setup lang="ts">
import {marked} from 'marked'
import {BackendResponse, ChapterData} from '~/interfaces'

const route = useRoute()
const id = ref(route.params.cid)

const response = await useFetch<BackendResponse<ChapterData>>(
  `/api/items/chapter/${id.value}`
)
const data = response.data.value!.data
const renderedContent = await marked(data.content, {
  async: true,
})
const content = ref<HTMLDivElement | null>(null)
onMounted(() => {
  if (content.value) {
    content.value.innerHTML = renderedContent
  }
})
</script>

<template>
  <h1>This is a chapter page</h1>
  <p>{{ data.title }}</p>
  <div class="container-content" ref="content"></div>
</template>

<style scoped>
.container-content :deep(h1) {
  font-size: 2rem;
  font-weight: bold;
  margin: 1rem 0;
}

.container-content :deep(h2) {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem 0;
}
</style>
