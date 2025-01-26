import { Box, Content, Image, Mix, Row, Title } from "~/components/portfolio";

const SUCHANG = () => {
  return (
    <>
      <Row>
        <Mix>
          <Title title="가상공간 NFT기획전시회 및 라이브 송출" />
          <Content
            content={[
              "당사는 수창청춘맨숀과 협력하여 가상 아트 플랫폼을 구축하고, 총 69명의 예술인이 참여하여 70점 이상의 출품작을 전시하는 디지털 공간을 마련했습니다.",
              "이 플랫폼은 관람객이 가상 공간에서 다양한 예술 작품을 감상할 수 있도록 3D 그래픽 및 XR 기술을 활용하여 몰입감 있는 경험을 제공했습니다.",
            ]}
          />
        </Mix>
        <Row gap={12}>
          <Image url="https://assets.visionarylabstech.com/post/portfolio/suchang/1.jpg" />
          <Image url="https://assets.visionarylabstech.com/post/portfolio/suchang/2.jpg" />
        </Row>
      </Row>
      <Row>
        <Mix>
          <Title title="유튜브 라이브 방송" />
          <Row gap={24}>
            <Content
              content={[
                "NFT 기획전시 마다 유튜브 라이브 방송을 송출하여 작가들에게 가상공간내 작품을 소개하고 인터뷰를 진행하는 콘텐츠를 진행했습니다. 유튜브 라이브는 국내를 넘어 해외 유저까지 시청하였고 수창 가상 아트 플랫폼에도 많은 관람객이 유치 되었습니다.",
              ]}
            />
            <Box highlight flex={0} paddingVertical={24} paddingHorizontal={28}>
              <div id="list-highlight">
                <div className="item">
                  <p className="body-m-b">
                    사업기간 내 <span>구독자 30% 증가</span>
                  </p>
                </div>
                <div className="item">
                  <p className="body-m-b">
                    사업기간 내 <span>조회수 326% 증가</span>
                  </p>
                </div>
                <div className="item">
                  <p className="body-m-b">
                    사업기간 내 <span>노출수 430%증가</span>
                  </p>
                </div>
              </div>
            </Box>
          </Row>
        </Mix>
        <Mix>
          <Title title="가상공간 NFT기획전시회" />
          <Row gap={24}>
            <Content
              content={[
                "가상 공간 플랫폼을 구현하여 NFT 기획전시를 진행하였습니다. 가상 공간 내 다양한 NFT작품을 전시하고 해외유저와의 만남을 주선하여 세계 최대규모 NFT시장인 Opensea에 작품을 선보여 많은 아티스트에게 다양한 경험을 제공했습니다.",
              ]}
            />
            <Box highlight flex={0} paddingVertical={24} paddingHorizontal={28}>
              <div id="list-highlight">
                <div className="item">
                  <p className="body-m-b">
                    기획전시 관람객 수 <span>437명</span>
                  </p>
                </div>
              </div>
            </Box>
          </Row>
        </Mix>
      </Row>
    </>
  );
};

export { SUCHANG };
