import React from "react";
import EventCard from "./EventCard";

const events = [
  {
    id: 1,
    title: "Big Rock Day",
    date: "October 15, 2023",
    description:
      "Join us for the first event of the year! It's going to be a day filled with fun and learning.",
    image:
      "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29uY2VydHxlbnwwfHwwfHx8MA%3D%3D",
    link: "/event-1",
  },
  {
    id: 2,
    title: "Dhaka Rock Fest",
    date: "November 10, 2023",
    description:
      "Experience the latest in technology and innovation at our annual event.",
    image:
      "https://media.istockphoto.com/id/1189205501/photo/cheering-crowd-of-unrecognized-people-at-a-rock-music-concert-concert-crowd-in-front-of.jpg?s=612x612&w=0&k=20&c=_vgyStdIBHCbnDHdu3lNTwfJxt2fTcJc9PB345ryhZo=",
    link: "/event-2",
  },
  {
    id: 3,
    title: "Concert For USHNOTA",
    date: "December 5, 2023",
    description:
      "Celebrate the holiday season with us at our special year-end event.",
    image:
      "https://tds-images.thedailystar.net/sites/default/files/images/2022/06/10/thumbnail_2.jpg",
    link: "/event-3",
  },
  {
    id: 4,
    title: "Coke Studio Conert",
    date: "January 20, 2024",
    description:
      "Start the new year right with our informative and exciting event.",
    image:
      "https://www.coca-cola.com/content/dam/onexp/bd/en/media-center/press-release/press-release-resize-hero/lalon.jpeg.jpg",
    link: "/event-4",
  },
  // Add more events as needed
];


const Events = () => {
  return (
    <div className="container mx-auto py-8 my-6">
      <h1 className="text-3xl font-semibold mb-4">Upcoming Events</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
