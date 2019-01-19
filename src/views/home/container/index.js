import React from 'react'
import HomeComponent from '../component/homeComponent'
import service from '../../../util/service'

class HomeContainer extends React.Component{
    constructor(){
        super()
       
    }
    componentWillMount(){
        this.props.fetchData()
    }
    render(){
        return (
            <HomeComponent movie={this.props.movie}/>
        )
    }
}

export default HomeContainer