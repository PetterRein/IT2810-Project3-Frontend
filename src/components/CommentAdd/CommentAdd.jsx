import React, { useState } from "react";
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
	let input;

	const [addComment] = useMutation(ADD_COMMENT)

	function handleSubmission(e) {
		e.preventDefault();
		addComment({ variables: { movieid: props.movieid, comment: input.value } });

		input.value = '';
		// Appollo sin Poll-funskjon vil automatisk hente inn nye comments etter submission
	}
	return (
		<div>
			<form onSubmit={ handleSubmission } >
				<input ref={node => { input = node; }}/>
				<button type="submit">Add Comment</button>
			</form>
		</div>
	);
}
