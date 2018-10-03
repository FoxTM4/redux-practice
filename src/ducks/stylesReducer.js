const colors = [
    'var(--light)',
    'var(--blue)',
    'var(--purp)',
    'var(--pink)',
    'var(--dark)'
]
const fonts = [
    'var(--font-1)',
    'var(--font-2)',
    'var(--font-3)',
    'var(--font-4)'
]
const initialState = {
    backgroundColor: colors[4],
    textColor: colors[3],
    fontFamily: fonts[0]
}

const BACKGROUND_COLOR = 'BACKGROUND_COLOR';
const TEXT_COLOR = 'TEXT_COLOR';
const FONT = 'FONT';

export function changeFont (index = 0) {
    var payload;
    if ( index < 0 || index > 3 ) 
        payload = fonts[0];
    else payload = fonts[index];
    return {
        type: FONT,
        payload
    }
}

export function changeTextColor (index = 0) {
    // index may be 0 - 4
    var payload;
    if (index < 0 || index > 4) 
        payload = colors[0];
    else payload = colors[index];
    return {
        type: TEXT_COLOR,
        payload
    }
}

export function changeBGColor (index = 0) {
    // index may be 0 - 4
    var payload;
    if (index < 0 || index > 4)
        payload = colors[0];
    else payload = colors[index];
    return {
        type: BACKGROUND_COLOR,
        payload
    }
}

export default function reducer(state = initialState, action) {
    switch( action.type ) {
        case FONT:
            return Object.assign( {}, state, {fontFamily: action.payload})
        case TEXT_COLOR: 
            return Object.assign( {}, state, {textColor: action.payload})
        case BACKGROUND_COLOR:
            return Object.assign( {}, state, {backgroundColor: action.payload})
        default:
            return state;
    }
}