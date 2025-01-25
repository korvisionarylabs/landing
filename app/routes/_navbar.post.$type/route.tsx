import "~/styles/post.css";

import { type MetaFunction, NavLink, useParams } from "@remix-run/react";
import { Footer } from "~/components/footer";
import { Image } from "~/components/image";
import { newsList } from "~/data/post/news";
import { portfolioList } from "~/data/post/portfolio";

export const meta: MetaFunction = () => {
  return [
    { title: "VisionaryLabs - Post" },
    {
      property: "og:title",
      content: "VisionaryLabs - Post",
    },
    {
      name: "description",
      content: "아이디어가 현실이 되는 공간, 차세대 콘텐츠 제작의 중심에서, 우리는 미래를 만듭니다.",
    },
  ];
};

export default function Post() {
  const params = useParams();
  const { type } = params;

  return (
    <div id="pages">
      <div id="page-container" className="no-min">
        <div id="page" className="post">
          <div className="header">
            <h3 className="title-m">Post</h3>
            <div className="category">
              <NavLink to="/post/news">
                <div className={`item ${type === "news" ? "selected" : ""}`}>
                  <p>News</p>
                </div>
              </NavLink>
              <NavLink to="/post/portfolio">
                <div className={`item ${type === "portfolio" ? "selected" : ""}`}>
                  <p>Portfolio</p>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="list">
            {(type === "news" ? newsList : portfolioList).map((item) => (
              <NavLink key={item.slug} to={`/${type}/${item.slug}`}>
                <div className="item">
                  <div className="thumbnail">
                    <Image url={`/post/${type}/${item.slug}/thumbnail.jpg`} />
                  </div>
                  <div className="info">
                    <p className="body-s">{item.date}</p>
                    <p className="body-m-b">{item.title}</p>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <Footer text={false} />
    </div>
  );
}
