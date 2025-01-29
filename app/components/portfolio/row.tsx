import "~/styles/post.css";

const Row = ({ children, gap, flex }: { children: React.ReactNode; gap?: number; flex?: number }) => {
  return (
    <div
      id="row"
      style={{
        gap,
        flex,
      }}>
      {children}
    </div>
  );
};

export { Row };
