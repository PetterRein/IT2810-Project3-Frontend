import React from 'react'
import { useParams } from 'react-router-dom';
import './CommentSection.css'; 
import gql from 'graphql-tag'
import { Query } from 'react-apollo';
import Comment from '../Comment/Comment';
import CommentAdd from '../CommentAdd/CommentAdd';
import { useQuery, useMutation } from "react-apollo";


export default function CommentSection (props){
	const GET_COMMENTS = gql`
	  {
	    commentsForMovie(movieid: "${props.movie}") {
		comment
		id
	    }
	  }
	`;


	const { loading, error, data } = useQuery(GET_COMMENTS,
		{
			pollInterval: 1000,
			// evt bruke Refetch i onClick
		});

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`;

	console.log(data.commentsForMovie);
		let input;

	return (
		<div className={'commentBox page_box'}>
			<div class="box_header">
				<h3>Add a comment</h3>
			</div>
			<div class="box_content left-align">
				<CommentAdd movieid={props.movie} />
				<p>Comments:</p>
				<div>
					{data.commentsForMovie.map(({ id, comment }) => {
						let input;
						return (
							<Comment key={id} comment={comment} />
						)
					})}
				</div>
			</div>
		</div>
	)
}
