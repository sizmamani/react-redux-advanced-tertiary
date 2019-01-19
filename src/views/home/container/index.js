import React from 'react'
import HomeComponent from '../component/homeComponent'
import service from '../../../util/service'

class HomeContainer extends React.Component{
    constructor(){
        super()
       
    }
    componentDidMount(){
        console.log("I did mount")
    }
    componentWillMount(){
        console.log("I will mount")
        this.props.fetchData()
    }
    componentWillReceiveProps(newProps){
        console.log(">>>>>>>>>>>>>>>",newProps)
    }
    render(){
        return (
            <HomeComponent {...this.props}/>
        )
    }
}

export default HomeContainer