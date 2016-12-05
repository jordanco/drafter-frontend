import React, { PropTypes } from 'react';
import {Link} from 'react-router';


const ListItem = ({ timestamp, from, inbound, title, body, id}) => (
    <Link to={'/home/email/'+id}>
		<span className="person-inbox" data-ix="inbox-person-actions-default"> 🎖&nbsp;&nbsp; {from.name? from.name : from.emailAddress}
			<span data-ix="hide-initial-100-opacity" className="job-title-inbox">2m ago, Unilever, Head of Sales USA </span>
		</span>
	</Link>
)

export default ListItem