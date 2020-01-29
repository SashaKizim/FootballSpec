
import FootballServise from '../servises/FootballServise'

const loadSAStandings = 'LOAD_SA_STANDINGS';
const loadSAMatches = 'LOAD_SA_MATCHES';
const loadSAScorers = 'LOAD_SA_SCORERS';


const initialState = {
    
    standings: [],
    scorers: [],
    matches: [],
    currentmatchday:1
}
export const reducer = (state = initialState, action = {}) => {

    if (action.type === loadSAStandings) {
        return {
            ...state, standings:
                action.data.standings,
            currentmatchday: action.data.season.currentMatchday
            };
    }

    if (action.type === loadSAMatches) {
        return {
            ...state, matches:action.data
                
            
             };
    }
    if (action.type === loadSAScorers) {
        return {
            ...state, scorers: action.data
        };
    }

    return state;
};
export function standings(data) {
    return {
        type: loadSAStandings,
        data
    };
}
export function matches(data) {
    return {
        type: loadSAMatches,
        data
    };
}
export function scorers(data) {
    return {
        type: loadSAScorers,
        data
    };
}
export function get_standings() {
    return dispatch => {
        FootballServise.getResource('/SA/standings')
            .then(res => {
               
                dispatch(standings(res.data))
            });
    }
}
export function get_matches() {
    return dispatch => {
        FootballServise.getResource('/SA/matches')
        .then(res => {

            dispatch(matches(res.data.matches))
        });

    }
}
export function get_scorers() {
    return dispatch => {
        FootballServise.getResource('/SA/scorers')
            .then(res => {

                dispatch(scorers(res.data.scorers))
            });
    }
}