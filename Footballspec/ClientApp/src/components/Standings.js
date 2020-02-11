import React, { Component,  useState  } from 'react';
import { connect } from 'react-redux';
import {Table,UncontrolledTooltip} from 'reactstrap';
import { get_standingsbl } from '../store/FootballDataBL'
import { get_standingssa } from '../store/FotballDataSA'
import { get_standingsepl } from '../store/FootballDataEPL'
class Standings extends Component {
    
    
   componentDidMount=()=>{
    
    if(this.props.league==='bl')
       this.props.getStandingsbl();
     if(this.props.league==='epl')
       this.props.getStandingsepl();
     if(this.props.league==='sa')
       this.props.getStandingssa();
     
   }        
    
    
    
    render() {
        
        let lg =[];
        if(this.props.league==='bl')
        lg=this.props.bl.standings.data;
         if(this.props.league==='epl')
        lg=this.props.epl.standings.data;
         if(this.props.league==='sa')
        lg=this.props.seriea.standings.data;
        const list = lg.map((item) => {
            return <tr>
            <td>{item.position}</td>
            {/* <td>{item.team.crestUrl}</td> */}
            <td>{item.team.name}</td>
            <td>{item.playedGames}</td>
            <td>{item.won}</td>
            <td>{item.draw}</td>
            <td>{item.lost}</td>
            <td>{item.points}</td>
            <td>{item.goalsFor}</td>
            <td>{item.goalsAgainst}</td>
            <td>{item.goalDifference}</td>
          </tr>
         });
         
        return (
          <Table dark striped hover size="sm">
   <thead>
    <tr>
    <th></th>
            {/* <th>Logo</th> */}
            <th>Team</th>
            <th href="#" id="pg" >PG</th>
            <th>won</th>
            <th>draw</th>
            <th>lost</th>
            <UncontrolledTooltip placement="top" target="pg">
        PlayedGames
      </UncontrolledTooltip>
            <th className="text-danger">points</th>
            <th href="#" id="gf">gF</th>
            <th href="#" id="ga">gA</th>
            <th href="#" id="gd">gD</th>
            <UncontrolledTooltip placement="top" target="gf">
        GoalsFor
      </UncontrolledTooltip>
      <UncontrolledTooltip placement="top" target="ga">
        GoalsAgainst
      </UncontrolledTooltip>
      <UncontrolledTooltip placement="top" target="gd">
        GoalsDifference
      </UncontrolledTooltip>
    </tr>
  </thead>
  
  <tbody>
  {list}
  </tbody>
</Table>
            )

        
    }
}
const mapStateToProps = ({bl,seriea,epl}) => {
  
    return {

        bl,seriea,epl
    };

}
const mapDispatch = {
    getStandingsbl: () => {
      return get_standingsbl();
    },
    getStandingsepl: () => {
        return get_standingsepl();
      },
      getStandingssa: () => {
        return get_standingssa();
      }
}



export default connect(mapStateToProps,mapDispatch)(Standings);