import "~/styles/post.css";

import type { LoaderFunctionArgs } from "@remix-run/node";
import { type MetaFunction, NavLink, useParams } from "@remix-run/react";
import { Container } from "~/components/container";
import { Image } from "~/components/image";
import { portfolioList } from "~/data/post/portfolio";

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  const post = portfolioList.find((item) => item.slug === slug);

  return {
    slug,
    post,
  };
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data || !data.post) {
    return [
      {
        title: "404",
      },
    ];
  }

  return [
    { title: data.post.title },
    {
      property: "og:title",
      content: data.post.title,
    },
    {
      name: "description",
      content: "VisionaryLabs - Post",
    },
  ];
};

export default function Portfolio() {
  const params = useParams();
  const { slug } = params;

  const post = portfolioList.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div id="portfolio">
        <div id="view">
          <h3 className="title-m">404</h3>
        </div>
      </div>
    );
  }

  return (
    <Container>
      <div id="portfolio">
        <div id="view">
          <div className="head">
            <div className="header">
              <div className="title">
                <div className="tags">
                  {post.tags.map((tag) => (
                    <div key={tag} className="tag">
                      <p className="body-s-b">{tag}</p>
                    </div>
                  ))}
                </div>
                <h3 className="title-m">{post.title}</h3>
              </div>
              <div className="extra">
                {post.extra.map((item) => (
                  <div className="item" key={item.key}>
                    <p className="body-m-b">{item.key}</p>
                    <p className="body-m">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="thumbnail">
              <Image url={`https://assets.visionarylabstech.com/post/portfolio/${slug}/thumbnail.jpg`} />
            </div>
          </div>
          {post.post()}
          <div className="foot">
            <div className="divider" />
            <div className="buttons">
              <NavLink to="/post/portfolio">
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
      </div>
    </Container>
  );
}
