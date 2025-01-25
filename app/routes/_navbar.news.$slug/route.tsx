import "~/styles/news.css";

import { NavLink, useParams } from "@remix-run/react";
import { Image } from "~/components/image";
import { newsList } from "~/data/post/news";

export default function Post() {
  const params = useParams();
  const { slug } = params;

  const post = newsList.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div id="container">
        <div id="view">
          <h3 className="title-m">404</h3>
        </div>
      </div>
    );
  }

  return (
    <div id="container">
      <div id="view">
        <div className="title">
          <h3 className="title-m">{post.title}</h3>
          <h5 className="title-s">{post.subtitle}</h5>
        </div>
        <div className="thumbnail">
          <Image url={`/post/news/${slug}/thumbnail.jpg`} />
        </div>
        {post.post()}
        <div className="divider" />
        <div className="buttons">
          <NavLink to="/post/news">
            <div className="button">
              <p className="body-s-b">리스트로 돌아가기</p>
            </div>
          </NavLink>
          <div
            className="button"
            onClick={() => {
              window.navigator.share({
                title: post.title,
                url: window.location.href,
              });
            }}>
            <p className="body-s-b">공유</p>
          </div>
        </div>
      </div>
    </div>
  );
}
