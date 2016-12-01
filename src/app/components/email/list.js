import React, { PropTypes } from 'react'
import ListItem from './list-item'

const List = ({ messages, onTodoClick }) => (
  <div className="bubbles">
    {todos.map(messages =>
        <ListItem
          key={message.id}
          {..message}
        />
    )}
  </div>
)

export default List