export interface BackendArrayResponse<T> {
  data: T[]
}

export interface BackendResponse<T> {
  data: T
}

export interface BookData {
  id: number
  title: string
  tags: [
    {
      book_tags_id: BookTag
    }
  ]
  finished: boolean
  cover: string
  description: string
  file: string
}

export interface BookTag {
  id: number
  name: string
}

export interface ChapterData {
  id: number
  status: 'published' | 'draft'
  title: string
  content: string
  book_id: number
}
