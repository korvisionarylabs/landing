import "~/styles/post.css";

const Row = ({ children, gap }: { children: React.ReactNode; gap?: number }) => {
  return (
    <div
      id="row"
      style={{
        gap,
      }}>
      {children}
    </div>
  );
};

export { Row };
