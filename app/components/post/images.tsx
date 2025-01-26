const Images = ({ column, base, urls }: { column: number; base: string; urls: string[] }) => {
  return (
    <div id="images" style={{ gridTemplateColumns: `repeat(${column}, 1fr)` }}>
      {urls.map((url, index) => (
        <div key={index} className="image" style={{ backgroundImage: `url(${base}/${url})` }} />
      ))}
    </div>
  );
};

export { Images };
