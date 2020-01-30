import React,{Component} from 'react';

import { Card } from './components/Card';
import ProcedureList from './components/ProcedureList';

class Procedure extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            procedures: []
        }
    }

    componentDidMount(){
        fetch('https://api.urbelis.dev/procedure',{
            mode: 'cors',
            method: 'GET',
            headers:{
                'Access-Control-Allow-Origin':'*'
            },},).then(response => {
                if(response.ok){
                    response.json().then(json => {
                        console.log(json)
                        this.setState({procedures: json});
                    });
                }
            });
        }
   
    render(){
        return(
    
        );
    }
}

export default Procedure;
