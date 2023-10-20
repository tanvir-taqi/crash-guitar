import React from "react";

const SingleTracks = ({ track }) => {
  const { picture, name, band, urlTube } = track;

  const openTube = (url) => {
    // 👇️ setting target to _blank with window.open
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="color-bg flex justify-center items-center flex-col p-6 md:p-10 rounded-lg ">
      <img src={picture} className="w-96 h-96 " alt="" />
      <h1 className="colored-text font-semibold text-xl my-2">{name}</h1>
      <h1 className=" font-semibold text-xl my-2">{band}</h1>
      <button
        onClick={() => openTube(urlTube)}
        className="bg-cyan-600 duration-500 hover:text-black duration-500 hover:bg-cyan-400 transition-all ease-linear duration-150 py-2 px-4 rounded-lg font-bold"
      >
        Open In Youtube
      </button>
    </div>
  );
};

export default SingleTracks;
