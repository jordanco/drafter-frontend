import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import { FormattedRelative } from 'react-intl';

const ListItem = ({ onClick, timestamp, from, id}) => (
	<div>
		<span className="person-inbox" data-ix="inbox-person-actions-default"> 
			🎖&nbsp;&nbsp; <Link to={'/home/email/'+id}>{from.name? from.name : from.emailAddress} </Link>
		</span>
		<span data-ix="hide-initial-100-opacity" className="job-title-inbox"> (<FormattedRelative value={new Date(parseInt(timestamp))}/>)</span>
		<span data-ix="hide-initial-100-opacity" className="job-title-inbox dismiss" onClick={onClick}>Dismiss</span>
		<br/>
	</div>
);
ListItem.propTypes = {
	onClick: PropTypes.func.isRequired,
	timestamp: PropTypes.string.isRequired,
	from: PropTypes.object.isRequired,
	id: PropTypes.string.isRequired
}

export default ListItem
