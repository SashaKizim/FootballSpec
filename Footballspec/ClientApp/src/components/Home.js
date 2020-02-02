import React from 'react';
import { connect } from 'react-redux';
import {  get_matches, get_scorers } from '../store/FootballDataBL';
import Standings from './Standings'

const Home = props => (
  
    <div>
        <button className="btn btn-primary" onClick={props.getMatches}>Matches</button>
        <button className="btn btn-primary" onClick={props.getScorers}>Scoreres</button>
    <h1>Hello, world!</h1>
    <Standings/>
  </div>
);
const mapDispatch = {
    getScorers: () => {
      return get_scorers();
    },
    getMatches: () => {
        return get_matches();
      }
}
export default connect(null,   mapDispatch)(Home);
