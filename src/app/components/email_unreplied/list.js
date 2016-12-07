import React, { PropTypes } from 'react';
import ListItem from './list-item';

const List = ({ messages_unreplied, onDismissClick }) => (
	<div>
    { messages_unreplied.filter(message => message.show == true).map(message =>
        <ListItem
        key={message.id}
            {...message}
            onClick={() => onDismissClick(message.id)}
        />
      )}
	</div>

);

List.propTypes = {
  onDismissClick: PropTypes.func.isRequired
}


export default List