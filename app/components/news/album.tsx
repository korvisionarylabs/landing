import "~/styles/post.css";
import { Title } from "./title";

const Album = ({ base, urls }: { base: string; urls: string[] }) => {
  return (
    <>
      <Title title="앨범" />
      <div id="album">
        {urls.map((url, index) => (
          <div key={index} className="image" style={{ backgroundImage: `url(${base}/${url})` }} />
        ))}
      </div>
    </>
  );
};

export { Album };
