import { Box, Content, Image, List, Mix, Row, Title } from "~/components/portfolio";

const LOCUS = () => {
  return (
    <>
      <Row>
        <Mix>
          <Title title="Locus가 제안한 향수 브랜드 마케팅 영상 제작 프로젝트 요구사항에 대해 적합한 콘텐츠 제작을 제안드렸습니다." />
          <Content
            content={[
              "이번 프로젝트는 Locus가 제안한 향수 브랜드 이미지를 시각적으로 극대화하고, 소비자의 감각을 자극하는 3D 마케팅 영상 제작에 중점을 두었습니다. 당사는 제품의 독창적인 매력을 부각하기 위해 디테일한 시각 연출과 세련된 컬러 팔레트를 활용하여 브랜드 아이덴티티와 완벽하게 어우러지는 영상미를 구현했습니다. 또한, 이 영상은 단순한 제품 홍보를 넘어 브랜드 철학과 감성을 담아내어 시청자의 기억에 오래 남을 수 있도록 기획되었습니다.",
            ]}
          />
        </Mix>
        <Image url="https://assets.visionarylabstech.com/post/portfolio/locus/1.gif" />
      </Row>
      <Row>
        <Image url="https://assets.visionarylabstech.com/post/portfolio/locus/2.gif" />
        <Mix width={380}>
          <Title title="주요 개요" />
          <Content
            content={[
              "Locus 향수 브랜드의 마케팅을 위한 3D 제품 영상을 제작하였습니다. 이번 프로젝트는 향수 1개를 중심으로 15~20초 길이의 짧지만 강렬한 스토리를 담은 영상으로 완성되었으며, 향수의 고유한 매력을 시각적으로 강조했습니다. 완성된 영상은 브랜드의 온라인 모든 채널에서 워터마크 없이 활용될 수 있도록 2차 활용 가능한 포맷으로 제공되었습니다.",
            ]}
          />
          <List
            items={[
              {
                key: "3D 영상 길이: 15~20초",
              },
              {
                key: "제품: 향수 1개",
              },
              {
                key: "스토리 중심의 콘셉트",
              },
              {
                key: "워터마크 없이 브랜드 온라인 전 채널에 활용 가능",
              },
            ]}
          />
        </Mix>
        <Mix width={320}>
          <Title title="사용 기술" />
          <Box padding={60}>
            <Image url="https://assets.visionarylabstech.com/post/portfolio/locus/l1.svg" width={200} height={50} />
          </Box>
        </Mix>
      </Row>
    </>
  );
};

export { LOCUS };
