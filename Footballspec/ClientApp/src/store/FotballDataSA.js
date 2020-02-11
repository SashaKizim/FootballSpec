
import FootballServise from '../servises/FootballServise'

const loadSAStandings = 'LOAD_SA_STANDINGS';
const succesSAStandings = 'SUCCES_SA_STANDINGS';
const failedSAStandings = 'FAILED_SA_STANDINGS';
const loadSAMatches = 'LOAD_SA_MATCHES';
const succesSAMatches = 'SUCCES_SA_MATCHES';
const failedSAMatches = 'FAILED_SA_MATCHES';
const loadSAScorers = 'LOAD_SA_SCORERS';
const succesSAScorers = 'SUCCES_SA_SCORERS';
const failedSAScorers = 'FAILED_SA_SCORERS';


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


    if (action.type === succesSAStandings) {
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
    if (action.type === loadSAStandings) {
        return {
            ...state,standings:{
               data:state.standings.data,
            failed:false,
            loading:true,
            succes:false
             }
        };
        
    }
    if (action.type === failedSAStandings) {
        return {
            ...state,standings:{
               data:state.standings.data,
            failed:true,
            loading:false,
            succes:false
             }
        };
        
    }


    if (action.type === succesSAMatches) {
        return {
            ...state,matches:{
                data:Object.values(action.data),
             failed:false,
             loading:false,
             succes:true
              }
            
        };
    }
    if (action.type === loadSAMatches) {
        return {
            ...state,matches:{
               data:state.matches.data,
            failed:false,
            loading:true,
            succes:false
             }
        };
        
    }
    if (action.type === failedSAMatches) {
        return {
            ...state,matches:{
               data:state.matches.data,
            failed:true,
            loading:false,
            succes:false
             }
        };
        
    }
    if (action.type === succesSAScorers) {
        return {
            ...state, scorers: {
                data:Object.values(action.data),
             failed:false,
             loading:false,
             succes:true
              }
        };
    }
    if (action.type === loadSAScorers) {
        return {
            ...state,scorers:{
               data:state.scorers.data,
            failed:false,
            loading:true,
            succes:false
             }
        };
        
    }
    if (action.type === failedSAScorers) {
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
            type: loadSAStandings,
            
        }
    },
    success: (data) => {
        return {
            type: succesSAStandings,
            data
        }
    },
    failed: (error) => {
        return {
            type: failedSAStandings
        }
    }
}
export const matches= {
    started: () => {
        return {
            type: loadSAMatches,
            
        }
    },
    success: (data) => {
        return {
            type: succesSAMatches,
            data
        }
    },
    failed: (error) => {
        return {
            type: failedSAMatches
        }
    }
}
export const scorers= {
    started: () => {
        return {
            type: loadSAScorers
            
        }
    },
    success: (data) => {
        return {
            type: succesSAScorers,
            data
        }
    },
    failed: (error) => {
        return {
            type: failedSAScorers
        }
    }
}
export const get_standingssa=()=> {
    return (dispatch) => {
        
            dispatch(standings.started());

            FootballServise.getResource('/SA/standings')
            .then(response => {
                dispatch(standings.success(response.data));
            })
            .catch((error) => {
                dispatch(standings.failed());
            });
    }
}
export const get_matchessa=()=> {
    return (dispatch) => {
        dispatch(matches.started());
        FootballServise.getResource('/SA/matches')
            .then(res => {
                dispatch(matches.success(res.data.matches));
            })  
            .catch((error) => {
                dispatch(matches.failed());
            });

    }
}
export const get_scorerssa=()=> {
    return (dispatch) => {
        dispatch(scorers.started());
        FootballServise.getResource('/SA/scorers')
            .then(res => {
                dispatch(scorers.success(res.data.scorers))
            })
            .catch((error) => {
                dispatch(scorers.failed());
            });
    }
}