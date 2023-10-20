import React from 'react';

const About = ({ about }) => {
  const { title, content,id } = about;
  return (
    <div>
      <div className={`px-2 md:px-12 w-full grid grid-cols-1 ${id%2 ===0 ? 'md:grid-cols-[4fr,1fr]' : 'md:grid-cols-[1fr,4fr]'}  my-6 `}>
        <h2 className={`text-2xl font-bold text-cyan-900 text-center  ${id%2 ===0 && 'hidden'}`}>
          {title}
        </h2>
        <p className="text-justify">{content}</p>
         <h2 className={`text-2xl font-bold text-cyan-900 text-center ${id%2 !==0 && 'hidden'}`}>
          {title}
        </h2>
      </div>
    </div>
  );
};

export default About;