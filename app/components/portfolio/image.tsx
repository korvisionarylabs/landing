import "~/styles/post.css";

const Image = ({
  url,
  flex,
  width,
  height,
  radius = 12,
  ratio,
}: { url: string; flex?: number; width?: number; height?: number; radius?: number; ratio?: string }) => {
  return (
    <div
      id="image"
      style={{
        flex,
        minWidth: width,
        minHeight: height,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${url})`,
        borderRadius: radius,
        aspectRatio: ratio ? ratio : undefined,
      }}
    />
  );
};

export { Image };
