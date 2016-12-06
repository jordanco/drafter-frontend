import React, { PropTypes } from 'react'
import ListItem from './list-item'

const List = ({ messages_unreplied,title }) => (
	<div>
		{ messages_unreplied.map(message =>
        <ListItem
		  key={message.id}
          title={title}
          {...message}
        />
    	)}
	</div>

)

export default List