import React from "react";
import gql from 'graphql-tag';
import { useQuery, useMutation } from "react-apollo";
import Comment from '../Comment/Comment';

const ADD_COMMENT = gql`
  mutation AddComment($movieid: ID!, $comment: String!) {
    addMovieComment(movieid: $movieid, comment: $comment){
      id
      comment
    }
  }
`;

export default function CommentAdd (props) {

	const GET_COMMENTS = gql`
	  {
	    commentsForMovie(movieid: "${props.movieid}") {
comment
id
    }
  }
`;

	let input;

	const { loading, error, data } = useQuery(GET_COMMENTS)
	const [addComment, { commentdata }] = useMutation(ADD_COMMENT)



	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	function handleSubmission(e) {
		e.preventDefault();
		addComment({ variables: { movieid: props.movieid, comment: input.value } });

		input.value = '';
		// Optimalt bruker vi Apollo her, men vanskelig med nåværende struktur
		window.location.reload()
	}
	return (
		<div>
			<form onSubmit={ handleSubmission } >
				<input ref={node => { input = node; }}/>
				<button type="submit">Add Comment</button>
			</form>
			<p>Comments:</p>
			<div>
				{data.commentsForMovie.map(comment => (
					<li key={comment.id} className={'commentListElement'}>
						<p>{ comment.comment }</p>
					</li>
				))}
			</div>
		</div>
	);
}
