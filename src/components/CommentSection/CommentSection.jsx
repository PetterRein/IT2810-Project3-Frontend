import React from 'react'
import { useParams } from 'react-router-dom';
import './CommentSection.css'; 
import gql from 'graphql-tag'
import { Query } from 'react-apollo';
import Comment from '../Comment/Comment';
import CommentAdd from '../CommentAdd/CommentAdd';

export default function CommentSection (){

  let params = useParams();

	const movieQuery = gql`
	  {
	    commentsForMovie(movieid: "${params.id}") {
        comment
        id
	    }
	  }
	`;
  
  return (
    <div className={'commentBox page_box'}>
	    <div class="box_header">
		    <h3>Add a comment</h3>
	    </div>
	    <div class="box_content left-align">
		    <CommentAdd movieid={params.id}/>
		    <p>Comments:</p>
		    <hr/>
		    <ul>
			    <Query query={movieQuery} fetchPolicy={'network-only'}>
				    {({loading, error, data } ) => {
					    if (loading) return <div>Fetching</div>
					    if (error) return <div>Error</div>
					    const comments = data.commentsForMovie
					    return (
						    comments.map(comment => <Comment className={'comment'} key={comment.id} comment={comment.comment}/>)
					    )
				    }}
			    </Query>
		    </ul>
	    </div>
    </div>
  )
}
