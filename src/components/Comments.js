import React from 'react';
import {Row, Col, CardPanel} from 'react-materialize';


const Comments = (props) => {
    
    const {postComments} = props;
    const regex = /(<([^>]+)>)/ig ;

    return (
        <div className="container">
            <h4 className="center-align">Comment Section</h4>
           {postComments.map((postComment)=>{
               return(
                <Row>
                <Col
                  m={12}
                  s={12}
                >
                  <CardPanel className="white">
                    <span className="black-text">
                    {postComment.content.replace(regex, '')}
                    </span>
                    <div className="commentinfo">
                        <p>{postComment.user} {postComment.time_ago}</p>
                    </div>
                  </CardPanel>
                </Col>
              </Row>
               )
           })}

        </div>
    )
}

export default Comments

