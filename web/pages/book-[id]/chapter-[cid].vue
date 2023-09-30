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
  font-weight: 600;
  margin: 1rem 0;
}

.container-content :deep(h2) {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem 0;
  border-bottom: 2px solid #aaa;
}

.container-content :deep(h3) {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1rem 0;
}

.container-content :deep(h6) {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0.5rem 0 0 0;
}

.container-content :deep(blockquote) {
  border: 2px solid #aaa;
  padding: 0.5rem;
  margin: 0.5rem 0;
}

.container-content :deep(ul) {
  margin: 0.5rem 0;
  padding-left: 1rem;
}

.container-content :deep(li) {
  list-style: outside;
  list-style-type: disc;
}

.container-content :deep(th) {
  border: 1px solid #aaa;
  padding: 0.25rem 0.5rem;
  text-align: left;
}

.container-content :deep(td) {
  border: 1px solid #aaa;
  padding: 0.25rem 0.5rem;
}

.container-content :deep(p) {
  margin: 0.5rem 0;
}
</style>
