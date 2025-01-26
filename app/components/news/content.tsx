const Content = ({ content }: { content: string[] }) => {
  return (
    <div
      style={{
        gap: 20,
      }}>
      {content.map((text, index) => (
        <p key={index} className="body-s">
          {text}
        </p>
      ))}
    </div>
  );
};

export { Content };
