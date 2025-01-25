const Image = ({ url }: { url: string }) => {
  return (
    <div
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${url})`,
      }}
    />
  );
};

export { Image };
