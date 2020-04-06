import moment from "moment";

/**
 * Event Types.
 */
const eventTypes = {
  SINGULAR: "singular",
  BIRTHDAY: "birthday",
  ANNIVERSARY: "anniversary",
};

/**
 * Get days until Date.
 * @param {Date} date
 */
const getDaysUntil = (date) => {
  let eventDate = moment(date);
  let todaysDate = moment();
  return eventDate.diff(todaysDate, "days");
};

/**
 * Get Days until next occurrence of Date.
 * @param {Date} date
 */
const getDaysUntilNext = (date) => {
  let eventDate = moment(date);
  let todaysDate = moment();
  let days = eventDate.diff(todaysDate, "days");

  if (days < 0) {
    return getDaysUntilNext(eventDate.add(1, "Y"));
  }

  return days;
};

/**
 * Get years between date and nextDate.
 * @param {Date} date
 * @param {Date} nextDate
 */
const getYearsSince = (date, nextDate = "") => {
  let eventDate = moment(date);
  let diffDate = moment(nextDate);
  return diffDate.diff(eventDate, "years");
};

/**
 * Format events list.
 * @param {Array} arr Array of event items.
 */
const formatEventList = (arr) =>
  arr
    .map((item) => ({
      ...item,
      daysUntil: getDaysUntilNext(moment(item.date)),
    }))
    .filter((item) => {
      if (
        item.type === eventTypes.SINGULAR &&
        moment(item.date).diff(moment()) < 0
      ) {
        return false;
      }

      return true;
    });

export {
  getDaysUntil,
  getDaysUntilNext,
  getYearsSince,
  formatEventList,
  eventTypes,
};
