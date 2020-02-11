import FootballServise from '../servises/FootballServise'

const loadBLStandings = 'LOAD_BL_STANDINGS';
const succesBLStandings = 'SUCCES_BL_STANDINGS';
const failedBLStandings = 'FAILED_BL_STANDINGS';
const loadBLMatches = 'LOAD_BL_MATCHES';
const succesBLMatches = 'SUCCES_BL_MATCHES';
const failedBLMatches = 'FAILED_BL_MATCHES';
const loadBLScorers = 'LOAD_BL_SCORERS';
const succesBLScorers = 'SUCCES_BL_SCORERS';
const failedBLScorers = 'FAILED_BL_SCORERS';


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


    if (action.type === succesBLStandings) {
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
    if (action.type === loadBLStandings) {
        return {
            ...state,standings:{
               data:state.standings.data,
            failed:false,
            loading:true,
            succes:false
             }
        };
        
    }
    if (action.type === failedBLStandings) {
        return {
            ...state,standings:{
               data:state.standings.data,
            failed:true,
            loading:false,
            succes:false
             }
        };
        
    }


    if (action.type === succesBLMatches) {
        return {
            ...state,matches:{
                data:Object.values(action.data),
             failed:false,
             loading:false,
             succes:true
              }
            
        };
    }
    if (action.type === loadBLMatches) {
        return {
            ...state,matches:{
               data:state.matches.data,
            failed:false,
            loading:true,
            succes:false
             }
        };
        
    }
    if (action.type === failedBLMatches) {
        return {
            ...state,matches:{
               data:state.matches.data,
            failed:true,
            loading:false,
            succes:false
             }
        };
        
    }
    if (action.type === succesBLScorers) {
        return {
            ...state, scorers: {
                data:Object.values(action.data),
             failed:false,
             loading:false,
             succes:true
              }
        };
    }
    if (action.type === loadBLScorers) {
        return {
            ...state,scorers:{
               data:state.scorers.data,
            failed:false,
            loading:true,
            succes:false
             }
        };
        
    }
    if (action.type === failedBLScorers) {
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
            type: loadBLStandings,
            
        }
    },
    success: (data) => {
        return {
            type: succesBLStandings,
            data
        }
    },
    failed: (error) => {
        return {
            type: failedBLStandings
        }
    }
}
export const matches= {
    started: () => {
        return {
            type: loadBLMatches,
            
        }
    },
    success: (data) => {
        return {
            type: succesBLMatches,
            data
        }
    },
    failed: (error) => {
        return {
            type: failedBLMatches
        }
    }
}
export const scorers= {
    started: () => {
        return {
            type: loadBLScorers
            
        }
    },
    success: (data) => {
        return {
            type: succesBLScorers,
            data
        }
    },
    failed: (error) => {
        return {
            type: failedBLScorers
        }
    }
}
export const get_standingsbl=()=> {
    return (dispatch) => {
        
            dispatch(standings.started());

            FootballServise.getResource('/BL1/standings')
            .then(response => {
                dispatch(standings.success(response.data));
            })
            .catch((error) => {
                dispatch(standings.failed());
            });
    }
}
export const get_matchesbl=()=> {
    return (dispatch) => {
        dispatch(matches.started());
        FootballServise.getResource('/BL1/matches')
            .then(res => {
                dispatch(matches.success(res.data.matches));
                
            })  
            .catch((error) => {
                dispatch(matches.failed());
            });

    }
}
export const get_scorersbl=()=> {
    return (dispatch) => {
        dispatch(scorers.started());
        FootballServise.getResource('/BL1/scorers')
            .then(res => {
                dispatch(scorers.success(res.data.scorers));
            
            })
            .catch((error) => {
                dispatch(scorers.failed());
            });
    }
}