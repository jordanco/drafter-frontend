import React, { PropTypes } from 'react';
import {Link} from 'react-router';
import { FormattedRelative } from 'react-intl';

const ListItem = ({ onClick, onEmailClick, timestamp, from, id}) => (
	<div>
		<span className="person-inbox" data-ix="inbox-person-actions-default" onClick={ onEmailClick }> 
			🎖&nbsp;&nbsp; <Link to={'/home/email/'+id}>{from.name? from.name : from.emailAddress} </Link>
		</span>
		<span data-ix="hide-initial-100-opacity" className="job-title-inbox"> (<FormattedRelative value={new Date(timestamp)}/>)</span>
		<span data-ix="hide-initial-100-opacity" className="job-title-inbox dismiss" onClick={onClick}>Dismiss</span>
		<br/>
	</div>
);
ListItem.propTypes = {
	onClick: PropTypes.func.isRequired,
	onEmailClick: PropTypes.func.isRequired,
	timestamp: PropTypes.number.isRequired,
	from: PropTypes.object.isRequired,
	id: PropTypes.number.isRequired
}

export default ListItem
