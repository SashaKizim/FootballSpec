import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Table} from 'reactstrap';
import { get_scorersbl } from '../store/FootballDataBL';
import {get_scorersepl} from '../store/FootballDataEPL';
import {get_scorerssa} from '../store/FotballDataSA';

class Scorers extends Component {
    
    
    componentDidMount=()=>{
        if(this.props.league==='bl')
       this.props.getScorersbl();
      if(this.props.league==='epl')
       this.props.getScorersepl();
     if(this.props.league==='sa')
       this.props.getScorerssa();
      
    }        
    render() {
        
        let lg =[];
        if(this.props.league==='bl')
        lg=this.props.bl.scorers.data;
         if(this.props.league==='epl')
        lg=this.props.epl.scorers.data;
         if(this.props.league==='sa')
        lg=this.props.seriea.scorers.data;

        const list = lg.map((item) => {
            return <tr>
            <td>{item.player.name}</td>
            <td>{item.team.name}</td>
            <td>{item.numberOfGoals}</td>
          </tr>
         });
        return (
            
            

            <Table  size='sm'>
  <thead>
    <tr>
    <th>PlayerName</th>
            <th>Team</th>
            <th>Goals</th>
    </tr>
  </thead>
  
  <tbody>
  {list}
  </tbody>
</Table>
        )

        
    }
}
const mapStateToProps = ({bl,epl,seriea}) => {
  
    return {

        bl,epl,seriea
    };
}
const mapDispatch = {
    getScorersbl: () => {
      return get_scorersbl();
    },
    getScorerssa: () => {
        return get_scorerssa();
      },
      getScorersepl: () => {
        return get_scorersepl();
      }
}



export default connect(mapStateToProps,mapDispatch)(Scorers);