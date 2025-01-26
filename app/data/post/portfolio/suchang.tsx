import { Box, Content, Image, Row, Title } from "~/components/portfolio";

const SUCHANG = () => {
  return (
    <>
      <Row>
        <Box>
          <Title title="가상공간 NFT기획전시회 및 라이브 송출" />
          <Content
            content={[
              "당사는 수창청춘맨숀과 협력하여 가상 아트 플랫폼을 구축하고, 총 69명의 예술인이 참여하여 70점 이상의 출품작을 전시하는 디지털 공간을 마련했습니다.",
              "이 플랫폼은 관람객이 가상 공간에서 다양한 예술 작품을 감상할 수 있도록 3D 그래픽 및 XR 기술을 활용하여 몰입감 있는 경험을 제공했습니다.",
            ]}
          />
        </Box>
        <Row gap={12}>
          <Image url="https://assets.visionarylabstech.com/post/portfolio/suchang/1.jpg" />
          <Image url="https://assets.visionarylabstech.com/post/portfolio/suchang/2.jpg" />
        </Row>
      </Row>
    </>
  );
};

export { SUCHANG };
