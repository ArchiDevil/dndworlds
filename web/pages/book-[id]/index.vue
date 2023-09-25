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
  <h1>This is a book page</h1>
  <p>Its ID is: {{ id }}</p>
  <p>Its name is: {{ data.title }}</p>
  <p>Chapters:</p>
  <ul>
    <li v-for="chapter in chapters">
      <ChapterLink :chapter="chapter"></ChapterLink>
    </li>
  </ul>
</template>
