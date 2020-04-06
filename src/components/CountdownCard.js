import React from "react";
import moment from "moment";

import { genderTypes } from "../utilities/genderTypes";
import { getYearsSince, eventTypes } from "../utilities/time";
import {
  IMAGE_DEFAULT,
  IMAGE_ANNIVERSARY,
  IMAGE_BIRTHDAY,
} from "../utilities/image";

const Anniversary = ({ title, date, daysUntil, image }) => {
  let nextDate = moment(date).set("year", moment().year());
  let yearsSince = getYearsSince(date, nextDate).toString();

  return (
    <div className="countdown-card countdown-card--anniversary">
      <div className="countdown-card__background">
        <img src={image || IMAGE_ANNIVERSARY} />
      </div>
      <div
        className={`countdown-card__days countdown-card__days--${daysUntil.length}`}
      >
        {daysUntil}
      </div>
      <div className="countdown-card__days-text">Days Until</div>
      <div className="countdown-card__title">{title}</div>
      <div className="countdown-card__date">
        {nextDate.format("dddd, MMMM Do")}
      </div>
      <div className="countdown-card__age">
        It will have been {yearsSince} years.
      </div>
    </div>
  );
};

const Birthday = ({ title, date, gender, daysUntil, image }) => {
  let nextDate = moment(date).set("year", moment().year());
  let yearsSince = getYearsSince(date, nextDate).toString();

  return (
    <div className="countdown-card countdown-card--birthday">
      <div className="countdown-card__background">
        <img src={image || IMAGE_BIRTHDAY} />
      </div>
      <div
        className={`countdown-card__days countdown-card__days--${daysUntil.length}`}
      >
        {daysUntil}
      </div>
      <div className="countdown-card__days-text">Days Until</div>
      <div className="countdown-card__title">{title}</div>
      <div className="countdown-card__date">
        {nextDate.format("dddd, MMMM Do")}
      </div>
      <div className="countdown-card__age">
        {gender === genderTypes.MALE
          ? "He"
          : gender === genderTypes.FEMALE
          ? "She"
          : "They"}{" "}
        will be {yearsSince} years old!
      </div>
    </div>
  );
};

const Singular = ({ title, date, daysUntil, image }) => {
  let nextDate = moment(date);

  return (
    <div className="countdown-card">
      <div className="countdown-card__background">
        <img src={image || IMAGE_DEFAULT} />
      </div>
      <div
        className={`countdown-card__days countdown-card__days--${daysUntil.length}`}
      >
        {daysUntil}
      </div>
      <div className="countdown-card__days-text">Days Until</div>
      <div className="countdown-card__title">{title}</div>
      <div className="countdown-card__date">
        {nextDate.format("dddd, MMMM Do")}
      </div>
    </div>
  );
};

const CountdownCard = ({
  type,
  title,
  gender,
  date,
  daysUntil,
  image,
  repeating,
}) => {
  daysUntil = daysUntil.toString();
  switch (type) {
    case eventTypes.BIRTHDAY:
      return (
        <Birthday
          title={title}
          gender={gender}
          date={date}
          daysUntil={daysUntil}
          image={image}
        />
      );
    case eventTypes.ANNIVERSARY:
      return (
        <Anniversary
          title={title}
          date={date}
          daysUntil={daysUntil}
          image={image}
        />
      );
    default:
    case eventTypes.SINGULAR:
      return (
        <Singular
          title={title}
          date={date}
          daysUntil={daysUntil}
          image={image}
        />
      );
  }
};

export default CountdownCard;
