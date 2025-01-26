import { Album, Box, Content, Image, Row, Title } from "~/components/portfolio";

const DAEGUART = () => {
  return (
    <>
      <Row>
        <Box>
          <Title title="청년 예술가들을 대상으로 가상 콘텐츠 응용 교육을 진행했습니다." />
          <Content
            content={[
              "이번 교육은 3명의 전문 강연자가 3회에 걸쳐 강의를 진행하였으며, 총 약 110명의 청강생이 참여했습니다. 당사의 VP사업부 이사인 김태용 COO가 직접 강연을 맡아, 3D 그래픽, XR 콘텐츠와 더불어 디자인 응용 분야에 대한 깊이 있는 맞춤형 교육을 제공했습니다.",
              "디자인과 기술의 융합을 통해 예술적 감각과 디지털 기술을 동시에 발전시키는 방법을 제시했으며, 이를 통해 참여자들은 실질적이고 창의적인 영감을 얻을 수 있었습니다",
            ]}
          />
        </Box>
        <Image url="https://assets.visionarylabstech.com/post/portfolio/daeguart/1.jpg" />
      </Row>
      <Album
        base="https://assets.visionarylabstech.com/post/portfolio/daeguart"
        urls={["a1.jpg", "a2.jpg", "a3.jpg"]}
      />
    </>
  );
};

export { DAEGUART };
