import React, { PropTypes } from 'react'
import { FormattedRelative } from 'react-intl'

const ListItem = ({ timestamp, from, inbound, subject, body }) => (
    <div className={ inbound ? "bubble-lhs-holder" : "bubble-rhs-holder" }>
        <div className={ inbound ? "bubble-lhs" : "bubble-rhs" }>
            <strong>Subject: { subject }</strong>
            <br/>
            { body.body }
        </div>
        <div className="bubble-metadata"><FormattedRelative value={timestamp} units="day"/></div>
    </div>
)

// Todo.propTypes =

export default ListItem