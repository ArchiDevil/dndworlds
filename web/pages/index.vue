<script setup lang="ts">
import type {BackendResponse} from '../interfaces'
import Post from '../components/Post.vue'

interface PostData {
  id: number
  title: string
  content: string
}

const posts = ref([] as PostData[])

const response = await useFetch<BackendResponse<PostData>>('/api/items/posts', {
  query: {
    sort: '-date_created',
  },
})

if (response != null) {
  posts.value = response.data.value!.data
}
</script>

<template>
  <PageTitle>Блог</PageTitle>
  <Post
    v-for="post in posts"
    :key="post.id"
    :title="post.title"
    :content="post.content"
  />
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
