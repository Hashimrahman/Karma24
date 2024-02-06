import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import events from "../data/events";
import workshops from "../data/workshops";
import FilledButton from "../components/FilledButton";

const EventDetailsView = ({ isWorkshop }) => {
  const { id } = useParams();

  const item = isWorkshop
    ? workshops.find((workshop) => workshop.id === id)
    : events.find((event) => event.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto max-w-screen-xl py-20 px-4">
      <h1 className="text-karma-blue font-bold font-retroTeam text-5xl sm:text-7xl">
        {item.title}
      </h1>
      <div className="flex gap-8 mt-8">
        {/* <img
          src={`/src/assets/events/${item.image}`}
          alt=""
          className="h-72 rounded-3xl"
        /> */}
        <p className="text-2xl font-retroTeam tracking-wide leading-8">
          {item.dateTime} <br />
          {item.description ? item.description.map((desc) => <p>{desc}</p>) : null}
        </p>
      </div>
      <p className="font-bold font-retroTeam text-3xl mt-4 text-karma-green">
        {item.prize}
      </p>
      <p className="font-bold font-retroTeam text-2xl mt-4">Fee: ₹{item.fee}/-</p>
      <FilledButton text="REGISTER" />
    </div>
  );
};

export default EventDetailsView;