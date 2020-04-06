import { actionTypes } from "./actions";
import countdowns from "../../utilities/countdowns.json";
import { formatEventList } from "../../utilities/time";
import { sortArrayByProperty } from "../../utilities/array";

// Get initial set of events from countdowns json and format/sort it.
let events = sortArrayByProperty(
  formatEventList(countdowns),
  "daysUntil",
  "descending"
);

// Set up our app reducer.
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
