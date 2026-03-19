import { createContext, useContext, useState } from "react";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <VideoContext.Provider value={{ videoLoaded, setVideoLoaded }}>
      {children}
    </VideoContext.Provider>
  );
};

// Custom hook for easy use
export const useVideo = () => useContext(VideoContext);