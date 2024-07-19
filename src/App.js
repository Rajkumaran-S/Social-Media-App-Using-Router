import Header from './Header';
import Home from './Home';
import Nav from './Nav';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import Footer from './Footer';
import Post from './Post';
import {Link, Routes, Route, useNavigate} from "react-router-dom"
import { useEffect, useState } from 'react';
import {format} from "date-fns"

function App() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Motivational",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Motivational posts help you connect with audiences in a helpful and empathetic way. They make brands more human and relatable. While motivational posts typically have a positive vibe, don’t overdo it. Simply showing followers that you support their feelings can be enough. Be that friendly voice everyone needs once in a while, like in the Balance Facebook post inviting people to responsible gardening."
    },
    {
      id: 2,
      title: "User-generated content",
      datetime: "July 10, 2021 11:17:36 AM",
      body: "What better way to show your impact on clients’ lives than having them speak for you? User-generated content (UGC) is a powerful tool for building trust. Encourage followers to share their photos, videos, or reviews of your products or services. You’ll find that they can communicate creatively and authentically and produce unique social media posts. Share UGC on all channels to create a sense of community. Some social media platforms are naturally more fit for user-generated content. Leverage the power of TikTok with challenges and collaborations with influencers. Nike hit a slam dunk with the “What do you do when…” campaign involving popular athletes."
    },
    {
      id: 3,
      title: "Industry news",
      datetime: "July 15, 2021 11:17:36 AM",
      body: "Social media posts highlighting industry news are a great way to remain relevant, be a source of information for followers, and take part in ongoing conversations. Don’t just share industry news, reports, or analyses, but add your thoughts and perspectives to solidify your thought leadership position."
    },
    {
      id: 4,
      title: "Long-form content",
      datetime: "July 30, 2021 11:17:36 AM",
      body: "Some social media posts are short and sweet, while others go more in-depth, offering valuable information without asking people to click away to a blog post or product page. On platforms such as LinkedIn, Reddit, or Quora, experts leverage long-form content to offer advice, share lessons, demonstrate results, and, in the process, gain loyal social media followers. While creating long-form content is time-consuming, it’s definitely something to include in your content calendar periodically, especially if professionals are part of your target audience. See this example from digital copywriter Matt Barker for an insightful LinkedIn post that sparked shares and conversations."
    }
  ])
  const [search, setSearch]  = useState('')

  const [postTitle, setPostTitle] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [postBody, setPostBody] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    const filteredResults = posts.filter((post) => 
    ((post.body).toLowerCase()).includes(search.toLowerCase()) ||
    ((post.title).toLowerCase()).includes(search.toLowerCase()))

    setSearchResults(filteredResults.reverse())
  }, [posts, search])

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length-1].id+1:1
    const datatime = format(new Date(), 'MMMM dd, yyyy pp') // for date and time install npm i date-fns
    const newPost = {id, title: postTitle, datatime, body:postBody}
    const allPosts = [...posts, newPost]
    setPosts(allPosts)
    setPostTitle('')
    setPostBody('')
    navigate('/')
  }

  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id !== id)
    setPosts(postsList)
    navigate('/')
  }


  return (
    <div className='App'>
       <Header 
       title="Post Your Ideas"/>

       <Nav 
       search={search}
       setSearch={setSearch}/>

      <Routes>
        <Route path='/' element={<Home posts={searchResults}/>} />
        <Route path='post'>
          <Route index element=  {<NewPost 
          postTitle = {postTitle}
          setPostTitle = {setPostTitle}
          handleSubmit = {handleSubmit}
          postBody = {postBody} 
          setPostBody = {setPostBody}
            />} />
          <Route path=':id' element={<PostPage posts={posts} handleDelete={handleDelete} />} />
        </Route>
        <Route path='about' element={<About />}/> 
        <Route path='missing' element={<Missing />}/>
      </Routes>
       <Footer />
    </div>
  );
}

export default App;
