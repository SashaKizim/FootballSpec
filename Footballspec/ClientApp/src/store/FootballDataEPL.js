import FootballServise from '../servises/FootballServise'

const loadEPLStandings = 'LOAD_EPL_STANDINGS';
const loadEPLMatches = 'LOAD_EPL_MATCHES';
const loadEPLScorers = 'LOAD_EPL_SCORERS';


const initialState = {

    standings: [],
    scorers: [],
    matches: [],
    currentmatchday: 1
}
export const reducer = (state = initialState, action = {}) => {


    if (action.type === loadEPLStandings) {
        return {
            ...state, standings:
                Object.values(Object.values(action.data.standings)[0].table),
            currentmatchday: action.data.season.currentMatchday
        
        };
    }

    if (action.type === loadEPLMatches) {
        return {
            ...state, matches: Object.values(action.data)
        };
    }
    if (action.type === loadEPLScorers) {
        return {
            ...state, scorers: Object.values(action.data)
        };
    }

    return state;
};
export function standings(data) {
    return {
        type: loadEPLStandings,
        data
    };
}
export function matches(data) {
    return {
        type: loadEPLMatches,
        data
    };
}
export function scorers(data) {
    return {
        type: loadEPLScorers,
        data
    };
}
export function get_standings() {
    return dispatch => {
        FootballServise.getResource('/PL/standings')
            .then(res => {

                dispatch(standings(res.data))
            });
    }
}
export function get_matches() {
    return dispatch => {
        FootballServise.getResource('/PL/matches')
            .then(res => {

                dispatch(matches(res.data.matches))
            });

    }
}
export function get_scorers() {
    return dispatch => {
        FootballServise.getResource('/PL/scorers')
            .then(res => {

                dispatch(scorers(res.data.scorers))
            });
    }
}