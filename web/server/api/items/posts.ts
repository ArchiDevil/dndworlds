export default defineEventHandler((event) => {
  return {
    data: [
      {
        id: 1,
        title: 'Fake post number 1',
        content: '#Fake post content 1\n\nSome information about the post',
      },
      {
        id: 2,
        title: 'Fake post number 2',
        content: '#Fake post content 1\n\nSome information about the post',
      },
    ],
  }
})
