export default defineEventHandler(async (event) => {
  const book_id = getRouterParam(event, 'id')
  return await $fetch(`http://localhost:8055/items/book/${book_id}`)
})
