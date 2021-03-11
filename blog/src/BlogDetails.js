import { useHistory, useParams } from 'react-router'
import useFetch from './useFetch'

const BlogDetails = () => {
  const { id } = useParams('id')
  const { data: blog, loading, error } = useFetch(
    'http://localhost:8000/blogs/' + id
  )
  const history = useHistory()

  const handleClick = (e) => {
    e.preventDefault()
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/')
    })
  }
  return (
    <div className='blog-details'>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written By: {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  )
}

export default BlogDetails
