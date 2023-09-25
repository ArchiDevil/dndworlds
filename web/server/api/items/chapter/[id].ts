export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  return await $fetch(`http://localhost:8055/items/chapter/${id}`)
})
