const initialProps = {
    errorFormAddTweet: false
}

export default function(state = initialProps, action) {
    switch (action.type) {
        case "ERROR_VALIDATION_FORM_ADD_TWEET":
            return {
                ...state,
                errorFormAddTweet: action.payload
            };
        default:
            return state;
    }
}