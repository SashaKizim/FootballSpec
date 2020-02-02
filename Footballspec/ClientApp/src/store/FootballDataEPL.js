import FootballServise from '../servises/FootballServise'

const loadEPLStandings = 'LOAD_EPL_STANDINGS';
const succesEPLStandings = 'SUCCES_EPL_STANDINGS';
const failedEPLStandings = 'FAILED_EPL_STANDINGS';
const loadEPLMatches = 'LOAD_EPL_MATCHES';
const succesEPLMatches = 'SUCCES_EPL_MATCHES';
const failedEPLMatches = 'FAILED_EPL_MATCHES';
const loadEPLScorers = 'LOAD_EPL_SCORERS';
const succesEPLScorers = 'SUCCES_EPL_SCORERS';
const failedEPLScorers = 'FAILED_EPL_SCORERS';


const initialState = {

    standings: {
        data:[],
        failed: false,
        loading: false,
        succes: false
    },
    scorers:{
    data:[],
    failed: false,
    loading: false,
    succes: false
},
    matches:{
        data:[],
        failed: false,
        loading: false,
        succes: false
    },
    currentmatchday: 1
}
export const reducer = (state = initialState, action = {}) => {


    if (action.type === succesEPLStandings) {
        return {
            ...state,standings:{
                data:
                Object.values (Object.values(action.data.standings)[0].table),
            
            failed:false,
            loading:false,
            succes:true
        },currentmatchday: action.data.season.currentMatchday 
        };
        
    }
    if (action.type === loadEPLStandings) {
        return {
            ...state,standings:{
               data:state.standings.data,
            failed:false,
            loading:true,
            succes:false
             }
        };
        
    }
    if (action.type === failedEPLStandings) {
        return {
            ...state,standings:{
               data:state.standings.data,
            failed:true,
            loading:false,
            succes:false
             }
        };
        
    }


    if (action.type === succesEPLMatches) {
        return {
            ...state,matches:{
                data:Object.values(action.data),
             failed:false,
             loading:false,
             succes:true
              }
            
        };
    }
    if (action.type === loadEPLMatches) {
        return {
            ...state,matches:{
               data:state.matches.data,
            failed:false,
            loading:true,
            succes:false
             }
        };
        
    }
    if (action.type === failedEPLMatches) {
        return {
            ...state,matches:{
               data:state.matches.data,
            failed:true,
            loading:false,
            succes:false
             }
        };
        
    }
    if (action.type === succesEPLScorers) {
        return {
            ...state, scorers: {
                data:Object.values(action.data),
             failed:false,
             loading:false,
             succes:true
              }
        };
    }
    if (action.type === loadEPLScorers) {
        return {
            ...state,scorers:{
               data:state.scorers.data,
            failed:false,
            loading:true,
            succes:false
             }
        };
        
    }
    if (action.type === failedEPLScorers) {
        return {
            ...state,scorers:{
               data:state.scorers.data,
            failed:true,
            loading:false,
            succes:false
             }
        };
        
    }

    return state;
};
export const standings ={
    started: () => {
        return {
            type: loadEPLStandings,
            
        }
    },
    success: (data) => {
        return {
            type: succesEPLStandings,
            data
        }
    },
    failed: (error) => {
        return {
            type: failedEPLStandings
        }
    }
}
export const matches= {
    started: () => {
        return {
            type: loadEPLMatches,
            
        }
    },
    success: (data) => {
        return {
            type: succesEPLMatches,
            data
        }
    },
    failed: (error) => {
        return {
            type: failedEPLMatches
        }
    }
}
export const scorers= {
    started: () => {
        return {
            type: loadEPLScorers
            
        }
    },
    success: (data) => {
        return {
            type: succesEPLScorers,
            data
        }
    },
    failed: (error) => {
        return {
            type: failedEPLScorers
        }
    }
}
export const get_standings=()=> {
    return (dispatch) => {
        
            dispatch(standings.started());

            FootballServise.getResource('/PL/standings')
            .then(response => {
                dispatch(standings.success(response.data));
            })
            .catch((error) => {
                dispatch(standings.failed());
            });
    }
}
export const get_matches=()=> {
    return (dispatch) => {
        dispatch(matches.started());
        FootballServise.getResource('/PL/matches')
            .then(res => {
                dispatch(matches.success(res.data.matches));
            })  
            .catch((error) => {
                dispatch(matches.failed());
            });

    }
}
export const get_scorers=()=> {
    return (dispatch) => {
        dispatch(scorers.started());
        FootballServise.getResource('/PL/scorers')
            .then(res => {
                dispatch(scorers.success(res.data.scorers))
            })
            .catch((error) => {
                dispatch(scorers.failed());
            });
    }
}