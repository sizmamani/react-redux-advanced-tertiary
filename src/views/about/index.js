import React, { Component } from 'react';
import { connect } from 'react-redux'

class AboutComponent extends Component {
  constructor(props) {
    super(props);
    console.log(props)  
  }



  render() {
    return (
      <div>
          About
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    movie: state && state.home && state.home.movie
  }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutComponent)


