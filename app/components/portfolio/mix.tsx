import "~/styles/post.css";

const Mix = ({ children, width }: { children: React.ReactNode; width?: number }) => {
  return (
    <div id="mix" style={{ minWidth: width, flex: width ? 0 : 1 }}>
      {children}
    </div>
  );
};

export { Mix };
