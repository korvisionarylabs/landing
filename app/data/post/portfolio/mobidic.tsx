import { Album, Box, Column, Content, Image, Mix, Row, Title, Video } from "~/components/portfolio";

const MOBIDIC = () => {
  return (
    <>
      <Column>
        <Row>
          <Mix>
            <Title title="완판치 인마이소중템 기획 및 촬영 성공적으로 마무리" />
            <Content
              content={[
                "이번 프로젝트는 모비딕의 '완판치 인마이소중템' 캠페인의 일환으로 진행되었으며, 콘텐츠 촬영이 성공적으로 마무리되었습니다.",
                "특히 블렌더(Blender)를 사용해 레벨 제작을 진행하고, LED Wall을 활용한 레벨 콘셉트 기획을 통해 독창적인 비주얼 효과를 구현했습니다. Aximetry 소프트웨어를 이용해 VP 스튜디오에서 콘텐츠 제작을 마무리하여, 고품질의 비디오 콘텐츠를 성공적으로 완성했습니다.",
              ]}
            />
          </Mix>
          <Image url="https://assets.visionarylabstech.com/post/portfolio/mobidic/1.jpg" />
        </Row>
        <Row gap={24}>
          <Image url="https://assets.visionarylabstech.com/post/portfolio/mobidic/2.jpg" height={320} flex={2} />
          <Video url="https://assets.visionarylabstech.com/post/portfolio/mobidic/3.mp4" height={320} />
        </Row>
      </Column>
      <Column gap={32}>
        <Title title="작업 과정" />
        <Row gap={24}>
          <Box padding={24} gap={16}>
            <Image url="https://assets.visionarylabstech.com/post/portfolio/mobidic/l1.svg" width={200} height={50} />
            <h5 className="title-s">레벨 제작</h5>
          </Box>
          <Image url="https://assets.visionarylabstech.com/post/portfolio/mobidic/4.jpg" ratio="16 / 9" />
          <Box padding={24} gap={16}>
            {" "}
            <Image url="https://assets.visionarylabstech.com/post/portfolio/mobidic/l2.svg" width={120} height={50} />
            <h5 className="title-s">녹화 후 송출</h5>
          </Box>
        </Row>
      </Column>
      <Album base="https://assets.visionarylabstech.com/post/portfolio/mobidic" urls={["a1.jpg", "a2.jpg", "a3.jpg"]} />
    </>
  );
};

export { MOBIDIC };
