import "~/styles/post.css";

const Box = ({
  children,
  flex,
  direction,
  gap,
  highlight,
  padding,
  paddingVertical,
  paddingHorizontal,
}: {
  children: React.ReactNode;
  flex?: number;
  direction?: "row" | "column";
  gap?: number;
  highlight?: boolean;
  padding?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
}) => {
  return (
    <div
      id="box"
      className={highlight ? "highlight" : ""}
      style={{
        flex,
        flexDirection: direction === "row" ? "row" : "column",
        alignItems: "center",
        justifyContent: "center",
        gap,
        padding: padding ? padding : `${paddingVertical}px ${paddingHorizontal}px`,
      }}>
      {children}
    </div>
  );
};

export { Box };
