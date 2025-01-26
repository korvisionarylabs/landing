import { Album, Box, Column, Content, Image, List, Mix, Row, Title } from "~/components/portfolio";

const TIMT = () => {
  return (
    <>
      <Row>
        <Mix>
          <Title title="TIMT LIVE - 해외 K-POP 팬덤을 겨냥한 글로벌 음악 방송 콘텐츠" />
          <Content
            content={[
              "이번 프로젝트에서는 해외 K-POP 팬덤을 겨냥한 글로벌 음악 방송 브랜드 TIMT LIVE의 시각적 임팩트를 극대화하고, 시청자의 감성을 자극하는 혁신적인 XR 라이브 쇼 제작에 주력하였습니다. 당사는 XR 기술과 LED WALL, Horizon 공간 등을 활용하여 아티스트의 퍼포먼스를 더욱 생동감 있게 표현하고, 정교한 CG-VFX와 세련된 연출로 브랜드 아이덴티티와 완벽하게 조화를 이루는 방송미를 구현했습니다. 또한, 이 프로젝트는 단순한 음악 방송을 넘어 글로벌 팬덤과 아티스트를 연결하는 플랫폼으로서의 역할을 강조하여, 시청자의 기억에 오래 남을 수 있도록 기획되었습니다.",
            ]}
          />
        </Mix>
        <Image url="https://assets.visionarylabstech.com/post/portfolio/timt/1.jpg" />
      </Row>
      <Row>
        <Row gap={12}>
          <Image url="https://assets.visionarylabstech.com/post/portfolio/timt/2.jpg" height={320} />
          <Image url="https://assets.visionarylabstech.com/post/portfolio/timt/3.jpg" height={320} />
        </Row>
        <Mix width={440}>
          <Title title="주요 개요" />
          <List
            items={[
              {
                key: "플랫폼",
                value: "Youtube Streaming",
              },
              {
                key: "주요 요소",
                value: "정규 뮤직 캠프, 뮤직 뱅크 스타일 B급 미디어 콘텐츠",
              },
              {
                key: "포맷",
                value: "XR, LED WALL 활용 + Horizon 공간 인터뷰",
              },
              {
                key: "방송 시간",
                value: "11월 17일 (일) 오후 3시~6시",
              },
              {
                key: "길이",
                value: "약 90분 내외",
              },
              {
                key: "콘텐츠 유형",
                value: "연출 기획, CG-VFX 제작, XR 활용 라이브 쇼",
              },
            ]}
          />
        </Mix>
      </Row>
      <Column gap={20}>
        <Title title="출연진" align="center" />
        <Row gap={12}>
          <Box direction="row" gap={12} padding={20}>
            <Image
              url="https://assets.visionarylabstech.com/post/portfolio/timt/l1.jpg"
              width={80}
              height={80}
              radius={40}
            />
            <Column gap={4} flex={1}>
              <h5 className="title-s">TIMT</h5>
              <p className="body-s">글로벌 K-POP 댄스 커버 팀</p>
            </Column>
          </Box>
          <Box direction="row" gap={12} padding={20}>
            <Image
              url="https://assets.visionarylabstech.com/post/portfolio/timt/l2.jpg"
              width={80}
              height={80}
              radius={40}
            />
            <Column gap={4} flex={1}>
              <h5 className="title-s">KAMBI</h5>
              <p className="body-s">K-POP 키즈돌</p>
            </Column>
          </Box>
          <Box direction="row" gap={12} padding={20}>
            <Image
              url="https://assets.visionarylabstech.com/post/portfolio/timt/l3.jpg"
              width={80}
              height={80}
              radius={40}
            />
            <Column gap={4} flex={1}>
              <h5 className="title-s">셀레스티</h5>
              <p className="body-s">K-POP 댄스커버팀</p>
            </Column>
          </Box>
        </Row>
      </Column>
      <Row>
        <Mix>
          <Title title="기술 지원 및 제작" />
          <List
            two
            items={[
              {
                key: "XR 연출 기술 개발",
                value: "LED WALL과 XR 기술을 활용한 혁신적인 방송 연출 구현.",
              },
              {
                key: "CG-VFX 디자인",
                value: "실감형 그래픽 제작으로 시청자들에게 몰입감 제공.",
              },
              {
                key: "송출 시스템 설계",
                value: "Unreal Engine, Aximmetry, OBS Studio 등을 활용한 최적화된 라이브 송출 체계 개발.",
              },
            ]}
          />
        </Mix>
        <Row gap={12}>
          <Image url="https://assets.visionarylabstech.com/post/portfolio/timt/4.jpg" ratio="16 / 9" />
        </Row>
      </Row>
      <Album
        base="https://assets.visionarylabstech.com/post/portfolio/timt"
        urls={["a1.jpg", "a2.jpg", "a3.jpg", "a4.jpg", "a5.jpg"]}
      />
    </>
  );
};

export { TIMT };
