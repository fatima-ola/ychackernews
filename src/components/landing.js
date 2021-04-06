import React, {useEffect, useState} from 'react';
import axios from 'axios';
import NavBar from './NavBar'
import News from './News';
import Comments from './Comments';
import FooterSection from './FooterSection';



const Landing = ()=> {

    const [posts, setPosts] = useState([]);
    const[postComments, setPostComments] = useState([]);
    const [isdisplayComment, setIsDisplayComment] = useState(true);
  

    useEffect(() => {
       axios.get('http://node-hnapi.herokuapp.com/news').then(res=> {
           const posts = res.data;
           setPosts(posts);
       });
    }, []);

    const handleClick = (id) => {
        console.log("here ooooo")
        console.log("directpost",posts)
        const newId = id
        console.log("id", newId)
          axios.get(`http://node-hnapi.herokuapp.com/item/${newId}`).then(response=> {
           const postComments = response.data;
           const allComments = postComments.comments;
           setPostComments(allComments);
        //    console.log(`allComments`, allComments)
        //    console.log(`response`, response)

       });
       setIsDisplayComment(false);
    
   
    }

console.log("comments", postComments);

    return (
       
        <div>
            <NavBar />
           { isdisplayComment ? <News posts={posts} handleClick={handleClick}/>:
             <Comments  postComments={postComments}/> 
           }         
            <FooterSection /> 
        </div> 
    )
}

export default Landing
 