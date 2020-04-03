import { connect } from 'react-redux'
import { setFilter } from '../actions'
import Footer from '../components/Footer'

const mapDispatchToProps = dispatch => ({
    action: type => dispatch(setFilter(type))
})

export default connect(null, mapDispatchToProps)(Footer)