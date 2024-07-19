import Header from './Header';
import Home from './Home';
import Nav from './Nav';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import Footer from './Footer';
import Post from './Post';
import PostLayout from './PostLayout';
import {Link, Routes, Route} from "react-router-dom"

function App() {

  return (
    <div className='App'>

      {/* // Router */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/newpost">NewPost</Link></li>
          <li><Link to="/postpage">PostPage</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/newpost" element={<NewPost />}/>
        {/* // another formate is nesting router */}
        <Route path="/postpage" element={PostLayout}/> {/* // when we use postlayout we have to use Outlet in postlayout component to use id value */}
          <Route index element={<PostPage />}/>
          <Route path=":id" element={<Post />}/> 
          <Route path="newpost" element={<NewPost />}/> 
          <Route path="*" element={<Missing />}/> 
        </Routes>

       {/* <Header />
       <Nav />
       <Home />
       <NewPost />
       <PostPage />
       <About />
       <Missing />
       <Footer /> */}
    </div>
  );
}

export default App;
