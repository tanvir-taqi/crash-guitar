import React, { useEffect, useState } from 'react'
import SingleTracks from './SingleTracks';

const TrendingTracks = () => {
  const [trendTracks, setTrendTracks] = useState([]);

  useEffect(() => {
    fetch("tracks.json")
      .then((res) => res.json())
      .then((data) => setTrendTracks(data));
  }, []);

  return (
    <div className="py-16">
      <h1 className="text-center my-3 text-4xl font-extrabold colored-text ">
        All TIme Favourites For Guitarists
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {trendTracks.map((ft) => (
          <SingleTracks key={ft._id} track={ft}></SingleTracks>
        ))}
      </div>
    </div>
  );
};

export default TrendingTracks