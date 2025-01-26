const List = ({
  items,
  two,
}: {
  items: { key: string; value?: string }[];
  two?: boolean;
}) => (
  <div id="list" className={two ? "two" : ""}>
    {items.map((item, index) => (
      <div key={index} className="item">
        <div className="content">
          <p className="body-s key">{item.key}</p>
          <p className="body-s value">{item.value}</p>
        </div>
      </div>
    ))}
  </div>
);

export { List };
