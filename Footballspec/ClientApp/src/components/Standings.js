import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Table} from 'reactstrap';
import { get_standings } from '../store/FootballDataBL'

class Standings extends Component {
    
    
   componentDidMount=()=>{
      
       this.props.getStandings();
     
   }        
    
    
    
    render() {
        
        
        const list = this.props.bl.standings.data.map((item) => {
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
            
            

            <Table striped bordered hover>
  <thead>
    <tr>
    <th>Position</th>
            {/* <th>Logo</th> */}
            <th>Team</th>
            <th>PlayedGames</th>
            <th>won</th>
            <th>draw</th>
            <th>lost</th>
            <th>points</th>
            <th>goalsFor</th>
            <th>goalsAgainst</th>
            <th>goalDifference</th>
    </tr>
  </thead>
  
  <tbody>
  {list}
  </tbody>
</Table>
            )

        
    }
}
const mapStateToProps = ({bl}) => {
  
    return {

        bl
    };
}
const mapDispatch = {
    getStandings: () => {
      return get_standings();
    }
}



export default connect(mapStateToProps,mapDispatch)(Standings);