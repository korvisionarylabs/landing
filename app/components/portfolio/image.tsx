import "~/styles/post.css";

const Image = ({ url }: { url: string }) => {
  return (
    <div
      id="image"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${url})`,
        borderRadius: 12,
      }}
    />
  );
};

export { Image };
