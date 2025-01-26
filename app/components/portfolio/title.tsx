const Title = ({
  title,
  align,
}: {
  title: string;
  align?: "left" | "center" | "right";
}) => {
  return (
    <h3
      className="title-m"
      style={{
        textAlign: align,
      }}>
      {title}
    </h3>
  );
};

export { Title };
