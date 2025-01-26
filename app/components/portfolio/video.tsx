import "~/styles/post.css";

const Video = ({ url, flex, height }: { url: string; flex?: number; height?: number }) => {
  return (
    <div
      style={{
        flex,
        minHeight: height,
        borderRadius: 12,
        overflow: "hidden",
      }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        id="video"
        style={{
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}>
        <source src={url} type="video/mp4" />
      </video>
    </div>
  );
};

export { Video };
