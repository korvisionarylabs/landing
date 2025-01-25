const Title = ({
  title,
}: {
  title: string;
}) => {
  return (
    <h5 className="title-s" style={{ paddingTop: 32 }}>
      {title}
    </h5>
  );
};

export { Title };
