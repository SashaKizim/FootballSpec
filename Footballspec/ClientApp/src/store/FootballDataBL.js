import FootballServise from '../servises/FootballServise'

const loadBLStandings = 'LOAD_BL_STANDINGS';
const loadBLMatches = 'LOAD_BL_MATCHES';
const loadBLScorers = 'LOAD_BL_SCORERS';


const initialState = {

    standings: [],
    scorers: [],
    matches: [],
    currentmatchday: 1
}
export const reducer = (state = initialState, action = {}) => {


    if (action.type === loadBLStandings) {
        return {
            ...state, standings:
                action.data.standings,
            currentmatchday: action.data.season.currentMatchday
        };
        
    }

    if (action.type === loadBLMatches) {
        return {
            ...state, matches: action.data
        };
    }
    if (action.type === loadBLScorers) {
        return {
            ...state, scorers: action.data
        };
    }

    return state;
};
export function standings(data) {
    return {
        type: loadBLStandings,
        data
    };
}
export function matches(data) {
    return {
        type: loadBLMatches,
        data
    };
}
export function scorers(data) {
    return {
        type: loadBLScorers,
        data
    };
}
export function get_standings() {
    return dispatch => {
        FootballServise.getResource('/BL1/standings')
            .then(res => {

                dispatch(standings(res.data))
            });
    }
}
export function get_matches() {
    return dispatch => {
        FootballServise.getResource('/BL1/matches')
            .then(res => {

                dispatch(matches(res.data.matches))
            });

    }
}
export function get_scorers() {
    return dispatch => {
        FootballServise.getResource('/BL1/scorers')
            .then(res => {

                dispatch(scorers(res.data.scorers))
            });
    }
}