<script setup lang="ts">
import {ChapterData} from '~/interfaces'

const props = defineProps({
  chapter: {
    type: Object as PropType<ChapterData>,
    required: true,
  },
})

const chapterLink = computed(() => {
  return `/book-${props.chapter.book_id}/chapter-${props.chapter.id}`
})
</script>

<template>
  <a class="chapter-link" :href="chapterLink">{{ props.chapter.title }}</a>
</template>

<style scoped>
.chapter-link {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0.5rem 0;
  display: block;
}
</style>
