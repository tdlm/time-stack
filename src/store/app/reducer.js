import { actionTypes } from "./actions";
import countdowns from "../../utilities/countdowns.json";
import { formatEventList } from "../../utilities/time";
import { sortArrayByProperty } from "../../utilities/array";

let events = sortArrayByProperty(
  formatEventList(countdowns),
  "daysUntil",
  "descending"
);

const app = (
  state = {
    events,
    filterText: "",
  },
  action
) => {
  switch (action.type) {
    case actionTypes.APP_FILTER_TEXT:
      return { ...state, filterText: action.payload };
    default:
      return state;
  }
};

export default app;
