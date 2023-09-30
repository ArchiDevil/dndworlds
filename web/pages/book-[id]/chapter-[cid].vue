<script setup lang="ts">
import {Token, TokenizerAndRendererExtension, marked} from 'marked'
import {BackendResponse, ChapterData} from '~/interfaces'

const route = useRoute()
const chapterId = ref(route.params.cid)
const bookId = ref(route.params.id)

const backlink = computed(() => `/book-${bookId.value}/`)

const sidebarExtension: TokenizerAndRendererExtension = {
  name: 'sidebarExtension',
  level: 'block',
  start(src: string) {
    return src.match(/^:/)?.index
  },
  tokenizer(src: string, tokens: Token[]) {
    const rule = /^((?::.*)(?:\n|$))+/
    const match = src.match(rule)
    if (match) {
      const processed = match[0]
        .trim()
        .split('\n')
        .map((line) => line.replace(/^:/, ''))
        .join('\n')
      const token = {
        type: 'sidebarExtension',
        raw: match[0],
        text: processed,
        tokens: [] as Token[],
      }
      token.tokens = this.lexer.blockTokens(token.text)
      return token
    }
  },
  renderer(token: any) {
    return (
      '\n<blockquote class="sidebar">' +
      this.parser.parse(token.tokens) +
      '</blockquote>'
    )
  },
}
marked.use({extensions: [sidebarExtension]})

const response = await useFetch<BackendResponse<ChapterData>>(
  `/api/items/chapter/${chapterId.value}`
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
  <a :href="backlink" class="chapter-name">&lt;-- К оглавлению</a>
  <p class="chapter-name">{{ data.title }}</p>
  <div class="container-content" ref="content"></div>
</template>

<style scoped>
.chapter-name {
  font-weight: 300;
  color: #333;
}

a.chapter-name:hover {
  text-decoration: underline;
}

.container-content {
  margin-bottom: 4rem;
}

.container-content :deep(h1) {
  font-size: 2rem;
  font-weight: 600;
  margin: 1.5rem 0 0.5rem 0;
}

.container-content :deep(h2) {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 1rem 0 0.5rem 0;
  border-bottom: 2px solid #aaa;
}

.container-content :deep(h3) {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1rem 0 0 0;
}

.container-content :deep(h6) {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0.5rem 0 0 0;
}

.container-content :deep(blockquote) {
  border: 1px solid rgb(98, 0, 0);
  padding: 1rem;
  margin: 0.5rem 0;
  background-color: #eee;
  font-size: 0.9rem;
}

.container-content :deep(ul) {
  margin: 0.5rem 0;
  padding-left: 1rem;
}

.container-content :deep(li) {
  list-style: outside;
  list-style-type: disc;
}

.container-content :deep(table) {
  margin-bottom: 1.5rem;
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
  margin: 0 0 0.5rem 0;
}

.container-content :deep(p:last-child) {
  margin: 0;
}

.container-content :deep(.sidebar) {
  background-color: rgb(198, 206, 207);
  border: 1px solid rgb(179, 179, 179);
  padding: 1rem;
}

.container-content :deep(.sidebar h1) {
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0 0.5rem 0;
}
</style>
