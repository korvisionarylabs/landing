import "~/styles/post.css";

const Column = ({ children, gap, flex }: { children: React.ReactNode; gap?: number; flex?: number }) => {
  return (
    <div
      id="column"
      style={{
        flex,
        gap,
      }}>
      {children}
    </div>
  );
};

export { Column };
