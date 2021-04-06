import React, {useEffect, useState} from 'react';
import axios from 'axios';
import NavBar from './NavBar'
import News from './News';
import Comments from './Comments';
import Pagination from './Pagination';
import FooterSection from './FooterSection';



const Landing = ()=> {

    const [posts, setPosts] = useState([]);
    const[postComments, setPostComments] = useState([]);
    const [isdisplayComment, setIsDisplayComment] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10)
  

    useEffect(() => {
       axios.get('http://node-hnapi.herokuapp.com/news').then(res=> {
           const posts = res.data;
           setPosts(posts);
       });
    }, []);

    const handleClick = (id) => {
        const newId = id
          axios.get(`http://node-hnapi.herokuapp.com/item/${newId}`).then(response=> {
           const postComments = response.data;
           const allComments = postComments.comments;
           setPostComments(allComments);

       });
       setIsDisplayComment(false);
    }

     //Get current posts
     const indexOfLastPost = currentPage * postsPerPage;
     const indexOfFirstPost = indexOfLastPost - postsPerPage;
     const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
 
     // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
       
        <div>
            <NavBar />
           { isdisplayComment ? <News posts={currentPosts} handleClick={handleClick}/>:
             <Comments  postComments={postComments}/> 
           } 
            <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />       
            <FooterSection /> 
        </div> 
    )
}

export default Landing
 