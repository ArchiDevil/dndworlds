export default defineEventHandler(() => {
  return {
    data: [
      {
        id: 1,
        title: 'Some book!',
        tags: [
          {
            book_tags_id: {id: 2, name: 'fakeTag2'},
          },
        ],
        finished: true,
        cover: '069f5a44-da83-4e4c-a0af-6c0fbc077e42',
        description: 'Some fake description',
        file: 'afec2306-0780-49a7-ade0-cadb463a082d',
      },
    ],
  }
})
