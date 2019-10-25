import React from 'react'
import { useParams } from 'react-router-dom';
import './CommentSection.css'; 
import gql from 'graphql-tag'
import { Query } from 'react-apollo';
import Comment from '../Comment/Comment';
import CommentAdd from '../CommentAdd/CommentAdd';

export default function CommentSection (){
  let params = useParams();

  return (
    <div className={'commentBox page_box'}>
	    <div class="box_header">
		    <h3>Add a comment</h3>
	    </div>
	    <div class="box_content left-align">
		    <CommentAdd movieid={params.id} comments={GET_COMMENTS} />
	    </div>
    </div>
  )
}
