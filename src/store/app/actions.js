/**
 * Namespace.
 */
const NS = "@timestack/app";

/**
 * App action types.
 */
export const actionTypes = {
  APP_FILTER_TEXT: `${NS}/FILTER_TEXT`,
};

const action = (type, payload) => ({ type, payload });

export const setTextFilter = (filter) => (dispatch) => {
  dispatch(action(actionTypes.APP_FILTER_TEXT, filter));
};
