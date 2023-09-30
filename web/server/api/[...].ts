export default defineEventHandler((event) => {
  const newPath = event.path.replace(/^\/api/, 'http://directus:8055')
  return $fetch(newPath, {
    method: event.method,
    headers: event.headers,
  })
})
