export const ALERT_SUCCESS = 'ALERT_SUCCESS';
export const ALERT_ERROR = 'ALERT_ERROR';
export const ALERT_CLEAR = 'ALERT_CLEAR';



export const success = (message) => {
    return { type: ALERT_SUCCESS, message };
}

export const error = (message) => {
    return { type: ALERT_ERROR, message };
}

export const clear = () => {
    return { type: ALERT_CLEAR };
}