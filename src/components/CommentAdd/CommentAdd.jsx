import { Field, Formik } from "formik";
import React from "react";
import gql from 'graphql-tag';
import { Mutation } from "react-apollo";

const commentAddQuery = gql`
  mutation AddComment($movieid: ID!, $comment: String!) {
    addMovieComment(movieid: $movieid, comment: $comment){
      id
      comment
    }
  }
`;

export default function CommentAdd (props) {
  return (
    <Mutation mutation={commentAddQuery} >
      { addComment => (
        <Formik
          validateOnBlur={false}
	  className={'page_box'}
          validateOnChange={false}
          onSubmit={async (data) => {
            try {
              if (!data.comment){
                throw alert("You must write something")
              }
              await addComment({
                variables: {
                  comment: data.comment,
                  movieid: props.movieid
                }
              });
              window.location.reload();
            } catch (err) {
              console.log("Tried to submit comment without text")
              }
            }}
            initialValues={{
              comment: "",
            }}
          >
          {({ handleSubmit }) => (
            <form className={"commentForm"} onSubmit={handleSubmit}>
              <label>Write a comment: </label>
              <br></br>
              <Field component="textarea" name="comment" />
              <br></br>
              <button type="submit">submit</button>
            </form>
            )}
          </Formik>
        )}
    </Mutation>
  )
}
