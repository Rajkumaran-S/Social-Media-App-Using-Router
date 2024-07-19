import Post from './Post'

const Feed = ({posts}) => {
  return (
    <>
      {posts.map((post) => (
        <Post Key={post.id} post={post}/>
      )
      )}
    </>
  )
}

export default Feed
