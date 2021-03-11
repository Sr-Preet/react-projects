import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Create = () => {
  const [blog, setBlog] = useState({ title: '', body: '', author: 'mario' })
  const [loading, setLoading] = useState(false)

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log('added')
      setLoading(false)
      //   history.go(-1)
      history.push('/')
    })
  }

  return (
    <div className='create'>
      <h2>Add A new blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title: </label>
        <input
          type='text'
          value={blog.title}
          onChange={(e) => setBlog({ ...blog, title: e.target.value })}
          required
        />
        <label>Blog Body: </label>
        <textarea
          value={blog.body}
          onChange={(e) => setBlog({ ...blog, body: e.target.value })}
        >
          required
        </textarea>

        <label>Blog Author: </label>
        <select
          value={blog.author}
          onChange={(e) => setBlog({ ...blog, author: e.target.value })}
        >
          <option value='mario'>mario</option>
          <option value='yoshi'>yoshi</option>
        </select>
        {!loading && <button>Add Blog</button>}
        {loading && <button disabled>Adding Blog</button>}
        <p>{blog.title}</p>
        <p>{blog.body}</p>
        <p>{blog.author}</p>
      </form>
    </div>
  )
}

export default Create
