import type { MetaFunction } from "@remix-run/react";
import { Container } from "~/components/container";
import { Footer } from "~/components/footer";
import "~/styles/about-us.css";

export const meta: MetaFunction = () => {
  return [
    { title: "VisionaryLabs - About Us" },
    {
      property: "og:title",
      content: "VisionaryLabs - About Us",
    },
    {
      name: "description",
      content: "미래를 그리다, 혁신을 이루다. XR콘텐츠 프로덕션과 미디어 아트의 새로운 가능성을 제시합니다.",
    },
  ];
};

const histories = [
  {
    category: "시작",
    title: "1인 미디어 방송 콘텐츠 TF",
    year: "2019 - 2021",
    items: [
      {
        year: "",
        title: "프리랜서 콘텐츠 TF",
        description: "Vision 결정",
      },
      {
        year: "",
        title: "트레저헌터",
        description: "늪지대 블러드문",
      },
      {
        year: "",
        title: "Microsoft",
        description: "MOJANG 마켓플레이스 프로덕션",
      },
      {
        year: "",
        title: "샌드박스 네트워크",
        description: "애니메이션 스튜디오",
      },
      {
        year: "",
        title: "급식 게임즈",
        description: "두더지 레볼루션",
      },
      {
        year: "",
        title: "급식 게임즈",
        description: "마법소녀 초아",
      },
      {
        year: "",
        title: "SPWANER",
        description: "Minecraft Story-Boo",
      },
      {
        year: "",
        title: "픽셀 네트워크",
        description: `라이브 콘텐츠 "스무고개"`,
      },
      {
        year: "",
        title: "픽셀 네트워크",
        description: `라이브 콘텐츠 "숨은 괴도 찾기"`,
      },
    ],
  },
  {
    category: "발전",
    title: "B2B 3D 프로모션 콘텐츠 TF",
    year: "2021 - 2024",
    items: [
      {
        year: "2020",
        title: "YouTube Creator Town",
        description: "네트워킹 페스티벌 콘텐츠",
      },
      {
        year: "2020",
        title: "나이키 비대면 워크숍",
        description: "NIKE_WORLD 실감형 콘텐츠",
      },
      {
        year: "2021",
        title: "수원삼성블루윙즈",
        description: "블루메리 크리스마스",
      },
      {
        year: "2021",
        title: "YouTube Creator Town",
        description: "네트워킹 페스티벌 콘텐츠",
      },
      {
        year: "2021",
        title: "LS전선",
        description: "세상을 바꾸는 ESG 콘텐츠 콘테스트",
      },
      {
        year: "2021",
        title: "충청북도 테크노파크",
        description: "이노 크래프트 체험형 콘텐츠",
      },
      {
        year: "2022",
        title: "금천구청",
        description: "G밸리 박물관 실감형 콘텐츠",
      },
      {
        year: "2022",
        title: "국가유산진흥원",
        description: "궁중 문화 축전",
      },
      {
        year: "2023",
        title: "Meechu",
        description: `버추얼 인플루언서 재데뷔 "Dive in"`,
      },
      {
        year: "2023",
        title: "KIOST",
        description: "제주연구소 - MCBE 제주바다 프로젝트",
      },
      {
        year: "2023",
        title: "Meechu",
        description: `버추얼 라이브 콘텐츠 "수호기"`,
      },
    ],
  },
  {
    category: "법인 설립",
    title: "XR 미디어 테크 스타트업",
    year: "2024 - 현재",
    items: [
      {
        year: "",
        title: "SKU ETRC",
        description: "오픈 에셋 메타버스 플랫폼 R&D 프로젝트",
      },
      {
        year: "",
        title: "천재교육",
        description: "생성형 AI 디지털 교과서 프로젝트 제작",
      },
      {
        year: "",
        title: "PIXELIVE",
        description: "버추얼 프로덕션 스튜디오 운용사 협업",
      },
      {
        year: "",
        title: "LOCUS",
        description: "OUD PERFUME - FOOH 브랜딩 영상 제작사",
      },
      {
        year: "",
        title: "SBS 모비딕",
        description: "완판치 예능 콘텐츠 - 버추얼 기술 지원 참여",
      },
      {
        year: "",
        title: "AWC 아시아 국제 물 주간",
        description: "한국수자원공사 미디어 아트 콘텐츠 제작",
      },
      {
        year: "",
        title: "헬로웍스",
        description: "TIMT LIVE  라이브 송출",
      },
      {
        year: "",
        title: "톡시온",
        description: "숏폼  CF 콘텐츠 제작",
      },
    ],
  },
];

const activities = [
  {
    id: "vtc",
    title: "Vision Trade Community",
    subtitle: "미디어 창작 협력 네트워크 허브",
    items: [
      "프로젝트 TF식 산하 인력 풀",
      "미디어 창작자, 프리랜서, 대학생 연합체",
      "전국 권역별 대학 연합 동아리 운영 체계",
      "자체 세미나, 오프라인 행사 참여",
    ],
  },
  {
    id: "ep",
    title: "Education Program",
    subtitle: "대/내외 교육 프로그램",
    items: [
      "초청 강연, 신규 교육 프로그램 기획 운영",
      "자체 교육 교보재 - 콘텐츠 보유",
      "현장 체험, 실무 경험, 실습 프로그램",
      "커뮤니티 멘토링 매칭 시스템",
    ],
  },
];

export default function AboutUs() {
  return (
    <Container>
      <div className="page-container">
        <div id="background">
          <div className="filter" />
          <video autoPlay loop muted playsInline>
            <source src="https://assets.visionarylabstech.com/about-us/main.mp4" type="video/mp4" />
          </video>
        </div>
        <div id="page" className="main">
          <div className="title-container">
            <div className="title">
              <h3 className="title-m">VisionaryLabs</h3>
              <h1 className="title-lm">
                미래를 그리다, 혁신을 이루다.
                <br />
                XR콘텐츠 프로덕션과
                <br />
                미디어 아트의
                <br />
                새로운 가능성을 제시합니다.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="page-container">
        <div id="page" className="ourhistory">
          <div className="container">
            <h1 className="title-lm gradient">Our History</h1>
            {histories.map((history) => (
              <div className="section" key={history.title}>
                <div className="title-container">
                  <div className="category">
                    <p className="body-s-b">{history.category}</p>
                  </div>
                  <div className="title">
                    <h3 className="title-m">{history.title}</h3>
                    <h3 className="title-m year">{history.year}</h3>
                  </div>
                </div>
                <div className="items">
                  {history.items.map((item, index) => (
                    <div className="item" key={index}>
                      <div className="body">
                        <div className="withyear">
                          {item.year && <p className="body-m year">{item.year}</p>}
                          <p className="body-m-m title">{item.title}</p>
                        </div>
                        <p className="body-m description">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="page-container">
        <div id="page" className="ourteam">
          <div className="container">
            <div className="left">
              <div className="title">
                <h1 className="title-l gradient">Our Team</h1>
                <p className="body-s">
                  VisionaryLabs는 각 분야의 뛰어난 전문가들로 구성되어 있으며, 주요 팀을 주축으로 한 사업부 TF 구조로
                  운영됩니다. 내부 인원부터 산하 창작자 집단까지 유동적인 팀빌딩이 가능합니다.
                </p>
              </div>
              <div className="box person">
                <div className="profile" />
                <div className="personal">
                  <div className="name">
                    <h3 className="title-ms">박상우</h3>
                    <div className="level">
                      <p className="body-s-b">CEO</p>
                    </div>
                  </div>
                  <div className="items">
                    <div className="item">
                      <div className="body">
                        <p className="body-s primary">前 OMS CREATIVE</p>
                        <p className="body-s">공동 부사장</p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="body">
                        <p className="body-s primary">前 Pixel 콘텐츠 제작소</p>
                        <p className="body-s">프로젝트 매니저</p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="body">
                        <p className="body-s primary">前 맥켄에릭슨</p>
                        <p className="body-s">레벨기획 팀장</p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="body">
                        <p className="body-s primary">前 샌드박스 네트워크</p>
                        <p className="body-s">콘텐츠 PD</p>
                      </div>
                    </div>
                    <div className="item">
                      <div className="body">
                        <p className="body-s primary">前 SKU ETRC</p>
                        <p className="body-s">R&D 연구원</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider" />
            <div className="right">
              <div className="box struct">
                <div className="item">
                  <p className="body-m-b">전략기획실</p>
                </div>
                <div className="divider" />
                <div className="item vp">
                  <p className="body-m-b">VP 사업부</p>
                  <div className="team">
                    <p className="body-s">기술 개발 팀</p>
                    <div className="divider" />
                    <p className="body-s">아트 그래픽 팀</p>
                  </div>
                </div>
                <div className="divider" />
                <div className="item">
                  <p className="body-m-b">콘텐츠 스튜디오</p>
                </div>
              </div>
              <div className="tfs">
                <div className="box tf">
                  <div className="title-container">
                    <div className="title">
                      <h3 className="title-ms">Contents Service</h3>
                      <p className="body-m-b">콘텐츠 사업 TF</p>
                    </div>
                    <p className="body-s">버추얼-그래픽 기술을 활용한 콘텐츠 제작 사업</p>
                  </div>
                  <div className="items">
                    <div className="item">
                      <div className="category">
                        <p className="body-s-b">마케팅 & 프로모션</p>
                      </div>
                      <div className="body">
                        <div className="mix">
                          <div className="name">
                            <p className="body-s-b">미디어 아트</p>
                            <p className="body-s">설치형-전시형 그래픽 콘텐츠</p>
                          </div>
                          <p className="body-s">그래픽 영상 제작 + 설치 기기, SW 개발 조달</p>
                        </div>
                        <div className="divider" />
                        <div className="mix">
                          <div className="name">
                            <p className="body-s-b">특수효과 & 그래픽</p>
                            <p className="body-s">다목적 그래픽 콘텐츠 기획, 개발</p>
                          </div>
                          <p className="body-s">3D 에셋 - 배경 레벨 - 특수효과 - 플랫폼까지</p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="category">
                        <p className="body-s-b">마케팅 & 프로모션</p>
                      </div>
                      <div className="body">
                        <div className="mix">
                          <div className="name">
                            <p className="body-s-b">미디어 아트</p>
                            <p className="body-s">미디어 콘텐츠 제작 기술 지원</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box tf">
                  <div className="title-container">
                    <div className="title">
                      <h3 className="title-ms">Virtual Production</h3>
                      <p className="body-m-b">버추얼 프로덕션 TF</p>
                    </div>
                    <p className="body-s">버추얼 방송을 위한 종합 솔루션 개발 사업</p>
                  </div>
                  <div className="items">
                    <div className="item">
                      <div className="category">
                        <p className="body-s-b">VP 기술 개발</p>
                      </div>
                      <div className="body">
                        <div className="mix">
                          <div className="name">
                            <p className="body-s-b">버추얼 프로덕션 스튜디오</p>
                          </div>
                          <p className="body-s">
                            XR 기술을 적용한 미디어 콘텐츠 제작 기술, 실시간 CG 동기화 촬영 기법 - 4DX 연출 기술
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="category">
                        <p className="body-s-b">버추얼 방송 솔루션 개발</p>
                      </div>
                      <div className="body">
                        <div className="mix">
                          <div className="name">
                            <p className="body-s-b">SaSS 프로그램 제품 개발</p>
                          </div>
                          <p className="body-s">V-DORM STUDIO - 버튜버들을 위한 버추얼 방송 솔루션</p>
                          <p className="body-s">3D 방송 세트장 에디터 - 방송 송출 스튜디오 플랫폼</p>
                          <p className="body-s">싱글캠 모션 캡쳐 AI 개발 - Non-Suit Motion Capture</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-container">
        <div id="page" className="activity">
          <div className="container">
            {activities.map((activity) => (
              <div className="box" key={activity.title}>
                <div className={`thumbnail ${activity.id}`} />
                <div className="content">
                  <div className="title">
                    <h3 className="title-ms">{activity.title}</h3>
                    <p className="body-m-b">{activity.subtitle}</p>
                  </div>
                  <div className="items">
                    {activity.items.map((item, index) => (
                      <div className="item" key={index}>
                        <p className="body-s">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="page-container">
        <div id="page" className="ourtechnology">
          <h1 className="title-l gradient">Our Technology</h1>
          <div className="container">
            <div className="box award">
              <div className="title-container">
                <div className="title">
                  <h3 className="title-ms">
                    <span>기술력과 시장성</span>을 인정받은 솔루션
                  </h3>
                </div>
                <p className="body-s">
                  <span>
                    저희 제품은 공신력 있는 대회에서 수상을 통해 기술적 우수성과 시장성을 꾸준히 인정받고 있습니다.
                  </span>{" "}
                  이러한 수상 실적은 제품의 성능을 증명할 뿐만 아니라, 점진적인 성과 향상을 통해 시장에서의 적합성을
                  입증해 나가고 있습니다.
                </p>
              </div>
              <div className="items">
                <div className="item">
                  <div className="thumbnail first" />
                  <p className="body-s">2023 미디어 뉴테크 경진대회</p>
                </div>
                <div className="item">
                  <div className="thumbnail second" />
                  <p className="body-s">2023 메타버스 개발자 경진대회</p>
                </div>
              </div>
            </div>
            <div className="box content">
              <div className="title-container">
                <div className="title">
                  <h3 className="title-ms">
                    창의적인 기획으로 <span>차별화된 콘텐츠</span>를 창출하다
                  </h3>
                </div>
                <p className="body-s">
                  <span>
                    VisionaryLabs는 철저한 분석과 독창적인 아이디어를 바탕으로, 고객의 니즈에 부합하는 맞춤형 콘텐츠
                    기획을 제공합니다.
                  </span>{" "}
                  트렌드에 민감하게 반응하면서도 장기적인 비전을 담아내어, 엔터테인먼트, 마케팅, 교육 등 다양한 분야에서
                  최적의 전략을 제시합니다. 디테일한 기획력과 혁신적인 접근을 통해, 단순한 콘텐츠 이상의 차별화된 경험과
                  가치를 창출해내고 있습니다.
                </p>
              </div>
              <div className="grid">
                <div className="column">
                  <div className="thumbnail first" />
                  <div className="thumbnail second" />
                </div>
                <div className="thumbnail third" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-container">
        <div id="page" className="technology">
          <div className="container">
            <div className="box first">
              <div className="thumbnail-container">
                <div className="thumbnail">
                  <div className="first" />
                </div>
              </div>
              <div className="content">
                <div className="title">
                  <h3 className="title-ms">
                    누구나 사용 가능한 <span>카메라 기반 모션인식 시스템</span>
                  </h3>
                </div>
                <p className="body-s">
                  <span>
                    카메라 기반 전신 모션인식 시스템은 인체의 모든 움직임을 정밀하게 추적하여 자연스러운 동작과 역동성을
                    구현합니다.
                  </span>{" "}
                  카메라 센서의 고도화된 인식 기술을 통해 복잡한 모션도 실시간으로 정확하게 캡처하여, 버추얼
                  엔터테인먼트, XR 콘텐츠에서 현실감 넘치는 캐릭터 애니메이션을 제공합니다. 비접촉식 방식으로 유연한
                  사용 환경을 조성하며, 다양한 산업 분야에서 효율적이고 혁신적인 솔루션을 제시합니다.
                </p>
              </div>
            </div>
            <div className="box second">
              <div className="thumbnail-container">
                <div className="thumbnail">
                  <div className="second" />
                  <div className="third" />
                </div>
              </div>
              <div className="content">
                <div className="title">
                  <h3 className="title-ms">
                    <span>정교한 페이셜 기술</span>로 생동감을 더하다
                  </h3>
                </div>
                <p className="body-s">
                  최첨단 페이셜 캡처 기술을 통해 캐릭터의 표정과 감정을 정밀하게 구현하여,{" "}
                  <span>실제 인물과 같은 생동감을 콘텐츠에 담아냅니다.</span> 자연스러운 얼굴 움직임과 미세한 표정
                  변화를 디테일하게 재현함으로써, 몰입도 높은 경험을 제공하며 버추얼 엔터테인먼트, 게임, XR 콘텐츠
                  전반에서 강력한 시각적 효과를 실현하고 있습니다.{" "}
                </p>
              </div>
            </div>
            <div className="box third">
              <div className="thumbnail-container">
                <div className="thumbnail">
                  <div className="fouth" />
                </div>
              </div>
              <div className="content">
                <div className="title">
                  <h3 className="title-ms">
                    복잡한 3D 폴리곤 메쉬 <span>데이터 단순화</span>
                  </h3>
                </div>
                <p className="body-s">
                  원본 모델의 기하학적 구조와 특징을 유지하면서도 다각형의 개수를 효율적으로 감소시켜,{" "}
                  <span>복잡한 데이터에서도 세부 디테일을 손실하지 않습니다.</span> 이는 XR 콘텐츠, 미디어 아트 등
                  다양한 분야에서 최적의 성능으로 활용 가능하며, 렌더링 및 그래픽 엔진 구동에 탁월한 이점을 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-container">
        <div id="page" className="whatweuse">
          <div className="container">
            <div className="title">
              <h1 className="title-l gradient">What We Use</h1>
              <p className="body-s">
                3D 콘텐츠 개발을 통해 축적한 기술로 고객 만족도를 높이는 다양한 작업이 가능합니다.
              </p>
            </div>
            <div className="items">
              <div className="item">
                <div className="category">
                  <p className="body-s-b">3D & VFX</p>
                </div>
                <div className="box first">
                  <img src="https://assets.visionarylabstech.com/about-us/whatweuse/3dvfx/1.png" alt="1" />
                  <img src="https://assets.visionarylabstech.com/about-us/whatweuse/3dvfx/2.png" alt="2" />
                  <img src="https://assets.visionarylabstech.com/about-us/whatweuse/3dvfx/3.png" alt="3" />
                  <img src="https://assets.visionarylabstech.com/about-us/whatweuse/3dvfx/4.png" alt="4" />
                </div>
              </div>
              <div className="item">
                <div className="category">
                  <p className="body-s-b">Gragphic Design</p>
                </div>
                <div className="box second">
                  <img src="https://assets.visionarylabstech.com/about-us/whatweuse/graphicdesign/1.png" alt="1" />
                  <img src="https://assets.visionarylabstech.com/about-us/whatweuse/graphicdesign/2.png" alt="2" />
                  <img src="https://assets.visionarylabstech.com/about-us/whatweuse/graphicdesign/3.png" alt="3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Container>
  );
}
