import React, { PropTypes } from 'react'
import ListItem from './list-item'

const List = ({ messages }) => (
	<div>
			{ messages.map(message =>
	        <ListItem
	          key={message.id}
	          {...message}
	        />
	    	)}
	</div>

)

export default List