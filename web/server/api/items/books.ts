export default defineEventHandler(async () => {
  return await $fetch(`http://localhost:8055/items/books`)
})
