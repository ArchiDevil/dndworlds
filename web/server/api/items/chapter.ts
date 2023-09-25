export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  return await $fetch('http://localhost:8055/items/chapter', {
    query,
  })
})
