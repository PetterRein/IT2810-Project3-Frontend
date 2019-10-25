import React from 'react'

export default function Comment (props) {
  return (
	  <li className={'commentListElement'}>
		  <p>{props.comment}</p>
	  </li>
  )
}
