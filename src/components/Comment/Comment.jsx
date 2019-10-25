import React from 'react'

// Renderer kommentarer på en film
export default function Comment (props) {
  return (
	  <li key={props.id} className={'commentListElement'}>
		  <p>{ props.comment }</p>
	  </li>
  )
}
