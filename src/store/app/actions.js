/**
 * Namespace.
 */
const NS = "@timestack/app";

/**
 * App action types.
 */
export const actionTypes = {
  APP_FILTER_TEXT: `${NS}/FILTER_TEXT`,
  APP_FILTER_TYPE: `${NS}/FILTER_TYPE`,
};

/**
 * Action helper.
 * @param {string} type Action type.
 * @param {string} payload Action payload.
 */
const action = (type, payload) => ({ type, payload });

/**
 * Set text filter for events.
 * @param {string} filter Filter string string.
 */
export const setTextFilter = (filter) => (dispatch) => {
  dispatch(action(actionTypes.APP_FILTER_TEXT, filter));
};

/**
 * Set type filter for events.
 * @param {string} type Filter type string.
 */
export const setTypeFilter = (type) => (dispatch) => {
  dispatch(action(actionTypes.APP_FILTER_TYPE, type));
};
