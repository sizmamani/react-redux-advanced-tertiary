import { connect } from 'react-redux'
import { 
  fetchData
} from './module/home'
import HomeContainer from './container'


function mapStateToProps(state) {
  return {
    loading: state && state.home && state.home.loading,
    movie: state && state.home && state.home.movie
  }
}

const mapDispatchToProps = {
    fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)