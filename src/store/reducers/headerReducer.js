import * as actionTypes from '../actionTypes';
import * as pages from '../pageNames'

const initialState = {
    clickedPage: pages.HOME
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.CLICKHOME:
            console.log("home");
            return {
                ...state,
                clickedPage: pages.HOME
            }
        case actionTypes.CLICKBROWSE:
            console.log("browse");
            return {
                ...state,
                clickedPage: pages.BROWSE
            }
        case actionTypes.CLICKPROMOTIONS:
            console.log("promotions");
            return {
                ...state,
                clickedPage: pages.PROMOTIONS
            }
        case actionTypes.CLICKDINEIN:
            console.log("dinein");
            return {
                ...state,
                clickedPage: pages.DINEIN
            }
        case actionTypes.CLICKSTORIES:
            console.log("stories");
            return {
                ...state,
                clickedPage: pages.STORIES
            }
        case actionTypes.CLICKPROFILE:
            console.log("profile");
            return {
                ...state,
                clickedPage: pages.PROFILE
            }
        default:
            return state;
    }

};

export default reducer;