import React, { PropTypes } from 'react';
import ListItem from './list-item';

const List = ({ messages_unreplied, onDismissClick, onEmailClick }) => (
	<div>
    { messages_unreplied.map(message =>
        <ListItem
        key={message.id}
            {...message}
            onClick={() => onDismissClick(message.id)}
            onEmailClick={() => onEmailClick(message.id)}
        />
      )}
	</div>

);

List.propTypes = {
  onDismissClick: PropTypes.func.isRequired,
  onEmailClick: PropTypes.func.isRequired
}


export default List