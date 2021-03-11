import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {
    const { data: blogs, loading, error } = useFetch(
      'https://604a13b99251e100177cdd75.mockapi.io/blogs'
    )

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title='All Blogs!' />}
    </div>
  )
}

export default Home
