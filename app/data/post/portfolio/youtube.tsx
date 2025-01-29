import { Box, Column, Content, Image, Mix, Row, Title } from "~/components/portfolio";

const YOUTUBE = () => {
  return (
    <>
      <Row>
        <Mix>
          <h5 className="title-s">
            당사는 2020 유튜브 크리에이터 타운 프로젝트에서 마이크로소프트의 가상 공간 플랫폼인 마인크래프트를 활용하여
            창의적인 엔터테인먼트 콘텐츠를 기획하고 구현했습니다.
          </h5>
          <Content
            content={[
              "이번 프로젝트는 기획 단계부터 맵 디자인, 시스템 개발, 운영까지 전 과정을 총괄하며, 유튜브 크리에이터들에게 새로운 차원의 몰입형 가상 체험을 제공하고자 했습니다.",
            ]}
          />
        </Mix>
        <Row gap={12}>
          <Image url="https://assets.visionarylabstech.com/post/portfolio/youtube/1.jpg" height={320} />
          <Image url="https://assets.visionarylabstech.com/post/portfolio/youtube/2.jpg" height={320} />
        </Row>
      </Row>
      <Column>
        <h5 className="title-s" style={{ textAlign: "right" }}>
          당사는 지난 2020 유튜브 크리에이터 타운에 이어 2년 연속 재계약에 성공해
          <br />
          마이크로소프트의 가상공간 플랫폼인 마인크래프트를 활용하여 엔터테인먼트 콘텐츠를 새롭게 기획했습니다.
        </h5>
        <Row gap={12}>
          <Image url="https://assets.visionarylabstech.com/post/portfolio/youtube/3.jpg" height={320} flex={2} />
          <Image url="https://assets.visionarylabstech.com/post/portfolio/youtube/4.jpg" height={320} />
          <Image url="https://assets.visionarylabstech.com/post/portfolio/youtube/5.jpg" height={320} />
          <Image url="https://assets.visionarylabstech.com/post/portfolio/youtube/6.jpg" height={320} />
        </Row>
      </Column>
      <Column>
        <Column gap={20}>
          <Title align="center" title="상호작용과 몰입감을 더한 인게임 시스템" />
          <p className="body-s" style={{ textAlign: "center" }}>
            독창적인 인게임 시스템 설계와 상호작용 요소를 통해 참가자들이 더욱 생생하게 경험할 수 있는 환경을 조성하는
            데 중점을 두었습니다.
          </p>
        </Column>
        <Row gap={24}>
          <Column gap={20}>
            <Image url="https://assets.visionarylabstech.com/post/portfolio/youtube/7.jpg" height={320} />
            <h5 className="title-s" style={{ textAlign: "center" }}>
              게임 내 송출 시스템
            </h5>
          </Column>
          <Column gap={20}>
            <Image url="https://assets.visionarylabstech.com/post/portfolio/youtube/8.jpg" height={320} />
            <h5 className="title-s" style={{ textAlign: "center" }}>
              타 스트리머 상호작용 시스템
            </h5>
          </Column>
        </Row>
      </Column>
      <Row>
        <Mix>
          <Title title="독창적 맵 설계를 통한 혁신적 콘텐츠 경험" />
          <Content
            content={[
              "마인크래프트 내의 독창적 맵 설계를 통해 사용자들이 가상 세계에서 몰입감을 느끼도록 구현하였으며, 가상공간을 활용한 혁신적 콘텐츠의 가능성을 보여주었습니다.",
            ]}
          />
        </Mix>
        <Image url="https://assets.visionarylabstech.com/post/portfolio/youtube/9.jpg" height={320} />
      </Row>
      <Column gap={20}>
        <Title align="center" title="원-프로세스 제작 지원" />
        <Box padding={24} direction="row">
          <Row gap={24} flex={1}>
            <Column gap={20}>
              <Image url="https://assets.visionarylabstech.com/post/portfolio/youtube/10.jpg" height={220} />
              <h5 className="title-s" style={{ textAlign: "center" }}>
                콘텐츠 기획
              </h5>
            </Column>
            <Column gap={20}>
              <Image url="https://assets.visionarylabstech.com/post/portfolio/youtube/11.jpg" height={220} />
              <h5 className="title-s" style={{ textAlign: "center" }}>
                맵 디자인
              </h5>
            </Column>
            <Column gap={20}>
              <Image url="https://assets.visionarylabstech.com/post/portfolio/youtube/12.jpg" height={220} />
              <h5 className="title-s" style={{ textAlign: "center" }}>
                시스템 개발
              </h5>
            </Column>
            <Column gap={20}>
              <Image url="https://assets.visionarylabstech.com/post/portfolio/youtube/13.jpg" height={220} />
              <h5 className="title-s" style={{ textAlign: "center" }}>
                행사 진행
              </h5>
            </Column>
          </Row>
        </Box>
      </Column>
    </>
  );
};

export { YOUTUBE };
