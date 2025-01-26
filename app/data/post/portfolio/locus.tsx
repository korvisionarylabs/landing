import { Box, Content, Image, Row, Title } from "~/components/portfolio";

const LOCUS = () => {
  return (
    <>
      <Row>
        <Box>
          <Title title="Locus가 제안한 향수 브랜드 마케팅 영상 제작 프로젝트 요구사항에 대해 적합한 콘텐츠 제작을 제안드렸습니다." />
          <Content
            content={[
              "이번 프로젝트는 Locus가 제안한 향수 브랜드 이미지를 시각적으로 극대화하고, 소비자의 감각을 자극하는 3D 마케팅 영상 제작에 중점을 두었습니다. 당사는 제품의 독창적인 매력을 부각하기 위해 디테일한 시각 연출과 세련된 컬러 팔레트를 활용하여 브랜드 아이덴티티와 완벽하게 어우러지는 영상미를 구현했습니다. 또한, 이 영상은 단순한 제품 홍보를 넘어 브랜드 철학과 감성을 담아내어 시청자의 기억에 오래 남을 수 있도록 기획되었습니다.",
            ]}
          />
        </Box>
        <Image url="https://assets.visionarylabstech.com/post/portfolio/locus/1.gif" />
      </Row>
    </>
  );
};

export { LOCUS };
