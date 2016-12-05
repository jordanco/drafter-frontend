import { connect } from 'react-redux'
import Info from '../../components/email/info'

const testInfo = {
    thread_message: {  
        "subject" : "This is another test",
        "timestamp" : "1480341978000",
        "sender" : {
            "emailAddress" : "jane@test.com",
            "name" : "Jane Doe"
        }
    }
}


const mapStateToProps = (state) => {
    return {
        sender: testInfo.thread_message.sender
    }
}


const mapDispatchToProps = (dispatch) => {
  return {}
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Info)