import "~/styles/post.css";
import { Column } from "./column";
import { Title } from "./title";

const Album = ({ base, urls }: { base: string; urls: string[] }) => {
  return (
    <Column gap={32}>
      <Title title="앨범" />
      <div id="album">
        {urls.map((url, index) => (
          <div key={index} className="image" style={{ backgroundImage: `url(${base}/${url})` }} />
        ))}
      </div>
    </Column>
  );
};

export { Album };
