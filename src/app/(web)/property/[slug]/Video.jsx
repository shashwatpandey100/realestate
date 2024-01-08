import React from "react";

const Video = ({ youtubeVideo, loading }) => {
  return (
    <div className="flex flex-col mt-[30px]">
      {loading ? (
        <>
          <span className="h-[30px] w-[100px] mb-[12px] rounded-[12px] bg-gray-300 animate-pulse"></span>
          <div className="mt-[10px] w-full h-[400px] rounded-[25px] bg-gray-300 animate-pulse h-[30px]"></div>
        </>
      ) : (
        <>
          <span className="text-[18px] mb-[12px] font-[600]">Video</span>
          {youtubeVideo && (
            <div className="mt-[10px] w-full h-[400px] rounded-[25px] overflow-hidden border border-[rgba(0,0,0,0.1)]">
              <iframe
                width="100%"
                height="100%"
                src={youtubeVideo}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Video;
