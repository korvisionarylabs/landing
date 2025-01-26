import "~/styles/post.css";

const Column = ({ children, gap }: { children: React.ReactNode; gap?: number }) => {
  return (
    <div
      id="column"
      style={{
        gap,
      }}>
      {children}
    </div>
  );
};

export { Column };
