import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Badge} from 'reactstrap';
import { get_matchesbl } from '../store/FootballDataBL';
import {get_matchesepl} from '../store/FootballDataEPL';
import {get_matchessa} from '../store/FotballDataSA';


class Matches extends Component {
    
  constructor(props){
    super();
    
    this.state={day:1}
    
  }
    componentDidMount=()=>{
        if(this.props.league==='bl'){
      
        this.props.getMatchesbl()
      }
      if(this.props.league==='epl'){
        
          this.props.getMatchesepl() 
      }
     if(this.props.league==='sa'){
      
        this.props.getMatchessa() 
      }
      
      console.log('mount')
    }       
    componentWillReceiveProps(nextProps) {
      if(this.props.league==='sa'){
      if (nextProps!==this.props) {
        console.log('props');
        this.setState({ day: nextProps.seriea.currentmatchday});
      }
    }
    if(this.props.league==='bl'){
      if (nextProps!==this.props) {
        this.setState({ day: nextProps.bl.currentmatchday});
      }
    }
    if(this.props.league==='epl'){
      if (nextProps!==this.props) {
        this.setState({ day: nextProps.epl.currentmatchday});
      }
    }
  }
  handleChange=(event)=>{
    this.setState({day:event.target.value});
  }
    leaguematches=()=>{
      let lg =[];
      let numberofmatches=38; 
      let currentmatchday=1;
      

        if(this.props.league==='bl'){
        lg=this.props.bl.matches.data;
        numberofmatches=34;
        currentmatchday=this.props.bl.currentmatchday;
        }
         if(this.props.league==='epl'){
        lg=this.props.epl.matches.data;
        currentmatchday=this.props.epl.currentmatchday;
         }
         if(this.props.league==='sa'){
        lg=this.props.seriea.matches.data;
        currentmatchday=this.props.seriea.currentmatchday;
         }
        
         return (
           {
             lg,numberofmatches,currentmatchday
           }

         );
    }
    
    render() {
        let{lg,numberofmatches,currentmatchday}=this.leaguematches();
        let{day}=this.state;
        lg=lg.filter(lg=>lg.matchday==day);
        let arr = [];
        for(let i=0;i<numberofmatches;i++)
        {
          arr[i]=i+1;
        }
        
      
        
        const list = lg.map((item => {
                        return  <h5><Badge color="secondary">
                        {item.homeTeam.name}
                        </Badge>
                        <Badge color="primary">
                        {item.score.fullTime.homeTeam}
                          -  {item.score.fullTime.awayTeam}
                        </Badge>
                        <Badge color="secondary">{item.awayTeam.name}</Badge>
                        
                        </h5>
                     }));
        
        
        return(<div>
<select   value={day} onChange={this.handleChange}>
            { arr.map((option) => <option value={option}>{option}</option>)}
          </select>


 <div>
    {list}
 </div>

</div>
)

        
     }
}
const mapStateToProps = ({bl,epl,seriea}) => {
  
    return {

        bl,epl,seriea
    };
}
const mapDispatch = {
    getMatchesbl: () => {
      return  get_matchesbl();
    },
    getMatchessa: () => {
        return get_matchessa();
      },
      getMatchesepl: () => {
        return get_matchesepl();
      }
}



export default connect(mapStateToProps,mapDispatch)(Matches);