import { Album, Column, Content, Image, List, Mix, Row, Title } from "~/components/portfolio";

const AWC = () => {
  return (
    <>
      <Row>
        <Mix>
          <Title title="AIWW 홍보관 홀로그램 영상 제작 및 디바이스 설치" />
          <Content
            content={[
              "한국수자원공사의 AIWW AWS 홍보관을 위해 홀로그램 영상을 제작 및 연출했습니다.",
              "주요 콘텐츠로는 포디움에 장착된 50인치 홀로그램 디바이스에서 송출될 로고 영상들과, 디졸브 효과가 적용된 홀로그램 디스플레이가 포함되었습니다.",
              "디지털 배너에 활용될 미디어 아트와 메인 스크린에서 상영될 홍보 영상의 인트로 부분도 제작하여 전반적인 브랜드 프로모션을 강화했습니다.",
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
