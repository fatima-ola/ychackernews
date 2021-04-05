import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Row,Col, Modal, Button} from 'react-materialize';
import Comments from './Comments';

const News = () => {
    const [posts, setPosts] = useState([]);
    const[postComments, setPostComments] = useState([]);

    useEffect(() => {
       axios.get('http://node-hnapi.herokuapp.com/news').then(res=> {
           const posts = res.data;
           setPosts(posts);
       });
    }, []);

    const handleClick = (id) => {
        console.log("directpost",posts)
        const newId = id
        console.log("id", newId)
          axios.get(`http://node-hnapi.herokuapp.com/item/${newId}`).then(response=> {
           const postComments = response.data;
           const allComments = postComments.comments;
           setPostComments(allComments);
        //    console.log("comments", postComments);
       });
   
    }

console.log("comments", postComments);
    return (
        <div className="container">    
            <Row>
                {posts.map((post)=>{
                return (
                <Col m={4}  s={12} className="box" key={post.id}>
                    <ul className="postlist" >
                        <li className="titlebox">
                            <a className="linking" href={post.url}>
                                {post.title}
                            </a> 
                        </li>
                        <li>{post.points} points by {post.user} {post.time_ago}</li>
                        <li>
                            <Modal
                                actions={[
                                <Button flat modal="close" node="button" waves="green">Close</Button>
                                ]}
                                bottomSheet={false}
                                fixedFooter
                                header="Comments"
                                id="Modal-0"
                                open={false}
                                options={{
                                    dismissible: true,
                                    endingTop: '10%',
                                    inDuration: 250,
                                    onCloseEnd: null,
                                    onCloseStart: null,
                                    onOpenEnd: null,
                                    onOpenStart: null,
                                    opacity: 0.5,
                                    outDuration: 250,
                                    preventScrolling: true,
                                    startingTop: '4%'
                                }}
                                trigger={<p onClick={()=>handleClick(post.id)} className="numberOfComments">View {post.comments_count} comments</p>}
                                >
                               <Comments />
                            </Modal> 
                        </li>
                    </ul>
                    <hr />
                </Col>        
                )
            })}
            </Row>
        </div>
    );
}

export default News

{/* <Modal
  actions={[
    <Button flat modal="close" node="button" waves="green">Close</Button>
  ]}
  bottomSheet={false}
  fixedFooter
  header="Modal Header"
  id="Modal-0"
  open={false}
  options={{
    dismissible: true,
    endingTop: '10%',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    opacity: 0.5,
    outDuration: 250,
    preventScrolling: true,
    startingTop: '4%'
  }}
  root={[object HTMLBodyElement]}
  trigger={<Button node="button">MODAL WITH FIXED FOOTER</Button>}
>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
</Modal> */}