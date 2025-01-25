import { useEffect, useRef } from "react";

const Video = ({ urls, abs = false }: { urls: string[]; abs?: boolean }) => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      style={
        abs
          ? {
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 12,
            }
          : {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 12,
            }
      }>
      {urls.map((url, index) => (
        <source key={index} src={url} type="video/mp4" />
      ))}
    </video>
  );
};

export { Video };
