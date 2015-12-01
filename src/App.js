import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Counter from './Counter'
import * as CounterActions from './actions/counter'

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}
//CounterActions.increment() === {type:INCREMENT_COUNTER}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)