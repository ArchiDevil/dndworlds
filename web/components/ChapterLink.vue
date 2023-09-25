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
  <a :href="chapterLink">{{ props.chapter.title }}</a>
</template>
