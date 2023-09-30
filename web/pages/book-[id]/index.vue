<script setup lang="ts">
import {
  BackendResponse,
  BackendArrayResponse,
  BookData,
  ChapterData,
} from '~/interfaces'

const route = useRoute()
const id = ref(route.params.id)

const response = await useFetch<BackendResponse<BookData>>(
  `/api/items/book/${id.value}`
)
const data = response.data.value!.data

const chapter_response = await useFetch<BackendArrayResponse<ChapterData>>(
  `/api/items/chapter`,
  {
    query: {
      filter: {
        book_id: {
          _eq: data.id,
        },
      },
    },
  }
)
const chapters = chapter_response.data.value!.data
</script>

<template>
  <p class="book-name">{{ data.title }}</p>
  <p class="chapters-title">Оглавление</p>
  <ul>
    <li v-for="chapter in chapters">
      <ChapterLink :chapter="chapter"></ChapterLink>
    </li>
  </ul>
</template>

<style scoped>
.book-name {
  font-size: 2rem;
  font-weight: 600;
  margin: 1rem 0;
}

.chapters-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem 0 0.5rem 0;
  border-bottom: 2px solid #aaa;
}
</style>
