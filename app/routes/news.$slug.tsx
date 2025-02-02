import "~/styles/post.css";

import type { LoaderFunctionArgs } from "@remix-run/node";
import { type MetaFunction, NavLink, useParams } from "@remix-run/react";
import { Container } from "~/components/container";
import { Image } from "~/components/image";
import { newsList } from "~/data/post/news";

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  const post = newsList.find((item) => item.slug === slug);

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

export default function News() {
  const params = useParams();
  const { slug } = params;

  const post = newsList.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div id="news">
        <div id="view">
          <h3 className="title-m">404</h3>
        </div>
      </div>
    );
  }

  return (
    <Container>
      <div id="news">
        <div id="view">
          <div className="title">
            <h3 className="title-m">{post.title}</h3>
            <h5 className="title-s">{post.subtitle}</h5>
          </div>
          <div className="thumbnail">
            <Image url={`https://assets.visionarylabstech.com/post/news/${slug}/thumbnail.jpg`} />
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
    </Container>
  );
}
