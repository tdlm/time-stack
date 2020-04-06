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

/**
 * Action helper.
 * @param {string} type Action type.
 * @param {string} payload Action payload.
 */
const action = (type, payload) => ({ type, payload });

/**
 * Set text filter for events.
 * @param {string} filter
 */
export const setTextFilter = (filter) => (dispatch) => {
  dispatch(action(actionTypes.APP_FILTER_TEXT, filter));
};
