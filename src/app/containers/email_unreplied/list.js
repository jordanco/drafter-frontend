import { connect } from 'react-redux';
import List from '../../components/email_unreplied/list';
import { dismissEmail } from '../../actions/email-unreplied/list';


const getList = (messages_unreplied = {}, filter) => {

    var filter_name = 'all';

    switch(filter){
        
        case 'today':
            filter_name='today';
            break;
        case 'yesterday':
            filter_name='yesterday';
            break;
        default: 
            filter_name='today';

    }
    return messages_unreplied.filter(function(email){
        if(email.when==filter_name){
            return email;
        };
    });
   
}

const mapStateToProps = (state, {filter}) => {
    return {
        messages_unreplied: getList(state.messages_unreplied,filter)
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onDismissClick: (id) => {
            dispatch(dismissEmail(id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(List)