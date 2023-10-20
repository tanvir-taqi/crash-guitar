import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        className="w-full h-40 object-cover object-center"
        src={event.image}
        alt={event.title}
      />
      <div className="px-6 py-4">
        <h3 className="text-2xl font-semibold">{event.title}</h3>
        <p className="mt-2 text-gray-600">{event.date}</p>
        <p className="mt-2 ">{event.description}</p>
        <p className="mt-2  text-gray-700  ">Join in Facebook Event <a className="underline  text-blue-700" href='https://www.facebook.com/'>Click Here</a></p>
      </div>
    </div>
  );
};

export default EventCard;
