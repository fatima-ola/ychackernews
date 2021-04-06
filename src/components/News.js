import React from 'react';
import {Row,Col} from 'react-materialize';


const News = (props) => {
    const {posts, handleClick} = props
    console.log(posts);
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
                        <li onClick={()=>handleClick(post.id)} className="numberOfComments">View {post.comments_count} comments</li>
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
