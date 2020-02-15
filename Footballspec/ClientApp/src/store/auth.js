import axios from 'axios';
import jwt from 'jsonwebtoken';


import isEmpty from 'lodash/isEmpty';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const DISPOSE_CURRENT_USER = 'DISPOSE_CURRENT_USER';
const initialState = {
    isAuthenticated: false,
    user: {}
};

export const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            };
        case DISPOSE_CURRENT_USER:
            return {
                isAuthenticated: false,
                user: {}
            };
        default: return state;
    }

}



export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    };
}
export const disposeCurrentUser = () => {
    localStorage.clear();
    return {
        type: DISPOSE_CURRENT_USER,

    };
}

export function login(data) {
    return dispatch => {
        return axios.post('api/Account/login', data)
            .then(res => {
                var token = res.data;
                //console.log("data login", token);
                var user = jwt.decode(token);
                console.log('-----user login------', user);
                localStorage.setItem('jwtToken', token);
                setAuthorizationToken(token);
                dispatch(setCurrentUser(user));
            });
    }
}

export function register(data) {
    console.log("REGISTER asdfasfd - ", data);

    return dispatch => {
        return axios.post('api/Account/register', data)
            .then(res => {
                var token = res.data;
                //console.log("data login", token);
                var user = jwt.decode(token);
                console.log('-----user login------', user);
                localStorage.setItem('jwtToken', token);
                setAuthorizationToken(token);
                dispatch(setCurrentUser(user));
            });
    }
}


export  function setAuthorizationToken(token) {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}