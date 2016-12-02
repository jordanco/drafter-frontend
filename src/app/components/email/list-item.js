import React, { PropTypes } from 'react'

const ListItem = ({ timestamp, from, inbound, subject, body }) => (
    <div className="bubble-lhs-holder">
        <div className="bubble-lhs">
            <strong>Subject: { subject }</strong>
            <br/>
            { body.body }
        </div>
        <div className="bubble-metadata">Today 1:52pm</div>
    </div>
)

// Todo.propTypes =

export default ListItem