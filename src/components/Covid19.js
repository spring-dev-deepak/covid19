import React from 'react'
import axios from 'axios'
import IndiaReport from './IndiaReport'

class Covid19 extends React.Component{

    state = {
        covid19 : []
    }

    componentDidMount(){
        axios.get('https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true').then((res) => {
            if(res.status === 200){
                this.setState({ covid19 : res.data })
            }else{
                console.log('failed')
            }
        })
    }

    render(){
        return(
            <div className="container jumbotron">
                <h4 className="text-center text-primary">Covid 19 India Data</h4>
                
                <IndiaReport covid19={this.state.covid19} />
            </div>
        );
    }
}

export default Covid19