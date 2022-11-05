export const saveAccount = (account) => async (dispatch) => {
    try {
        dispatch({
            type: "SAVE_ACCOUNT",
            payload: { account },
        });
    } catch (error) {
        console.log(error);
    }
};

export const removeAccount = () => async (dispatch) => {
    try {
        dispatch({
            type: "REMOVE_ACCOUNT",
            payload: {},
        });
    } catch (error) {
        console.log(error);
    }
};