import { Album, Column, Content, Image, List, Mix, Row, Title } from "~/components/portfolio";

const AWC = () => {
  return (
    <>
      <Row>
        <Mix>
          <Title title="AIWW 홍보관 홀로그램 영상 제작 및 디바이스 설치" />
          <Content
            content={[
              "이번 프로젝트에서는 해외 K-POP 팬덤을 겨냥한 글로벌 음악 방송 브랜드 TIMT LIVE의 시각적 임팩트를 극대화하고, 시청자의 감성을 자극하는 혁신적인 XR 라이브 쇼 제작에 주력하였습니다. 당사는 XR 기술과 LED WALL, Horizon 공간 등을 활용하여 아티스트의 퍼포먼스를 더욱 생동감 있게 표현하고, 정교한 CG-VFX와 세련된 연출로 브랜드 아이덴티티와 완벽하게 조화를 이루는 방송미를 구현했습니다. 또한, 이 프로젝트는 단순한 음악 방송을 넘어 글로벌 팬덤과 아티스트를 연결하는 플랫폼으로서의 역할을 강조하여, 시청자의 기억에 오래 남을 수 있도록 기획되었습니다.",
            ]}
          />
        </Mix>
        <Row gap={12}>
          <Image url="https://assets.visionarylabstech.com/post/portfolio/awc/1.jpg" />
          <Image url="https://assets.visionarylabstech.com/post/portfolio/awc/2.jpg" />
        </Row>
      </Row>
      <Row>
        <Row gap={12}>
          <Image url="https://assets.visionarylabstech.com/post/portfolio/awc/3.jpg" height={320} />
          <Image url="https://assets.visionarylabstech.com/post/portfolio/awc/4.jpg" height={320} />
        </Row>
        <Mix width={440}>
          <h5 className="title-s">
            당사는 포디움 설계 및 디지털 베너 콘텐츠를 자체 제작하여 현장의 시각적 몰입감을 극대화하고, 브랜드 메시지를
            효과적으로 전달했습니다.
          </h5>
          <Column gap={8}>
            <p className="body-s-b">디바이스 정보:</p>
            <List
              items={[
                {
                  key: "홀로그램 디바이스 사이즈: 50인치",
                },
                {
                  key: "360도 디지털 배너",
                },
              ]}
            />
          </Column>
        </Mix>
      </Row>
      <Album
        base="https://assets.visionarylabstech.com/post/portfolio/awc"
        urls={["a1.jpg", "a2.jpg", "a3.jpg", "a4.jpg", "a5.jpg", "a6.jpg"]}
      />
    </>
  );
};

export { AWC };
