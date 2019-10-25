import React from 'react'

export default function Comment (props) {
  return (
	  <li key={props.id} className={'commentListElement'}>
		  <p>{ props.comment }</p>
	  </li>
  )
}
