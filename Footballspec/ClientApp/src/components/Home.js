import React from 'react';
import { connect } from 'react-redux';
import Standings from './Standings';
import Scorers from './Scorers';
import Matches from './Matches';
const Home = props => (
  
  <div>
  <div className="row " >
  <div className="col-sm-12 col-md-9"><Standings league='bl'/></div>
  <div className='eplclassName="col-sm-12 col-md-3'> <Matches league='bl'/></div>
</div>
<Scorers  league='bl'/>
</div>
);


export default Home;
