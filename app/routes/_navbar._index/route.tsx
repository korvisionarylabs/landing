import { Footer } from "~/components/footer";
import { Video } from "~/components/video";
import "~/styles/home.css";

const xrProductions = [
  {
    title: "Marketing & Promotion",
    content:
      "단순한 홍보를 넘어, 브랜드의 이야기를 세상과 공유하는 예술. 우리는 창의적인 접근과 정교한 전략으로 소비자의 감성을 자극하고, 브랜드가 선명히 각인될 수 있는 경험을 만들어냅니다. 시대를 앞서가는 아이디어로, 당신의 브랜드를 새로운 차원으로 이끌어갑니다.",
    cards: [
      {
        title: "Interactive Graphic Contents",
        content:
          "CG, VFX, 특수효과 등 그래픽 콘텐츠의 모든 요소를 통합한 종합 패키지로, 게임, 영상, 이미지 등 다양한 플랫폼에서 최상의 결과물을 제공합니다. 3D 에셋, 배경, 특수효과까지 원프로세스로 제작하며, 언리얼 엔진을 활용한 맞춤형 기기 연동 유틸리티 개발도 지원합니다. 또한, 제품 브랜딩부터 마케팅 콘텐츠까지, 미디어 커머셜과 플랫폼 통합 개발로 강력한 비주얼 경험을 선사합니다.",
        images: ["1-1-1", "1-1-2"],
      },
      {
        title: "Media Art Content",
        content:
          "빛과 소리, 그리고 움직임이 만들어내는 새로운 예술의 형태. 우리는 기술을 도구로 삼아 감성을 자극하는 작품을 창조하고, 디지털의 한계를 넘어서 예술의 새로운 지평을 엽니다. 당신의 상상 속 세계를 현실로 구현하며, 시대를 앞서가는 예술적 경험을 선사합니다.",
        images: ["1-2-1"],
      },
    ],
  },
  {
    title: "Entertainment",
    content:
      "즐거움과 감동이 함께하는 새로운 차원의 엔터테인먼트. 독창적인 스토리텔링과 첨단 기술이 만나, 몰입감 넘치는 경험을 제공합니다. 우리는 상상을 현실로 구현하여, 관객의 마음을 사로잡는 콘텐츠를 창조합니다.",
    cards: [
      {
        title: "Virtual Production Studio",
        content:
          "현실과 가상의 경계를 허무는 혁신적인 제작 공간. 최첨단 기술과 창의성이 결합된 버추얼 프로덕션 기술을 개발 및 운용하며, 실시간 협업과 실감 나는 가상 환경을 통해 창작의 새로운 가능성을 열어갑니다.",
        images: ["2-1-1"],
      },
      {
        title: "Virtual Live - Streaming",
        content:
          "버추얼 방송에 필요한 모든 기술을 통합 지원하는 원스톱 패키지 V-DORM. SKU ETRC와의 기술 협력으로 개발된 자체 버추얼 방송 플랫폼 V-DORM은 3D 에셋 제작부터 생방송 송출까지 한 번에 해결합니다. 싱글캠 기반 모션 캡처 AI 기능으로 VR 기기 없이 웹캠과 모바일캠만으로 표정, 손짓, 몸짓을 구현하며, 3D 방송 세트장 에디터와 메타휴먼 기반의 실시간 스트리밍도 지원합니다. 완벽한 버추얼 방송 제작을 위한 최적의 스튜디오 솔루션을 제공합니다.",
        images: ["2-2-1"],
      },
    ],
  },
  {
    title: "Education",
    content:
      "미래의 학습을 이끄는 혁신적인 교육 콘텐츠. 우리는 창의적이고 몰입감 있는 학습 환경을 조성하여, 지식 전달을 넘어 실제 경험을 제공하는 교육 솔루션을 제공합니다. 최신 기술과 심층적인 교육적 인사이트를 결합해, 학습자가 능동적으로 참여하고 성장할 수 있는 콘텐츠를 제작합니다.",
    cards: [
      {
        title: "Interactive Graphic Contents",
        content:
          "미래의 학습을 이끄는 혁신적인 교육 콘텐츠. 우리는 창의적이고 몰입감 있는 학습 환경을 조성하여, 지식 전달을 넘어 실제 경험을 제공하는 교육 솔루션을 제공합니다. 최신 기술과 심층적인 교육적 인사이트를 결합해, 학습자가 능동적으로 참여하고 성장할 수 있는 콘텐츠를 제작합니다.",
        images: ["3-1-1"],
      },
      {
        title: "Vision Trade",
        content:
          "창작자와 미래 인재를 위한 성장 플랫폼, 비전트레이드는 다양한 분야의 창작자와 전문가를 지원하는 혁신적인 단체입니다. 우리는 창의력과 기술을 결합하여 미디어, 콘텐츠, 디자인 등육성하고 다양한 산업에서 활동할 수 있는 인재를 양성하고, 이들이 성장할 수 있는 환경을 제공합니다. 정기적인 교육 프로그램과 워크숍을 통해 실무 능력을 향상시키며, 협업 기회를 통해 창작자 간의 네트워크를 강화하고 있습니다. 비전트레이드는 미래를 이끌어갈 창작자들의 커뮤니티이자 성장 플랫폼입니다.",
        images: ["3-2-1"],
      },
    ],
  },
];

export default function Home() {
  return (
    <div id="pages">
      <div id="page-container">
        <div id="background">
          <div className="filter" />
          <video autoPlay loop muted playsInline>
            <source src="/assets/home/main.mp4" type="video/mp4" />
          </video>
        </div>
        <div id="page" className="main">
          <div className="title-container">
            <div className="title">
              <h1 className="title-l">아이디어가 현실이 되는 공간,</h1>
              <div className="inline">
                <h1 className="title-l">VisionaryLabs</h1>
                <p className="title-s">
                  차세대 콘텐츠 제작의 중심에서,
                  <br />
                  우리는 미래를 만듭니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="page-container">
        <div id="page" className="vision">
          <div className="container">
            <Video
              urls={[
                "/assets/home/wyv/1.mp4",
                "/assets/home/wyv/2.mp4",
                "/assets/home/wyv/3.mp4",
                "/assets/home/wyv/4.mp4",
                "/assets/home/wyv/5.mp4",
              ]}
            />
          </div>
          <div className="title-container">
            <div className="title">
              <h1 className="title-l">Watch Your</h1>
              <h1 className="title-l gradient">Vision</h1>
            </div>
            <div className="content">
              <h5 className="title-s">버추얼 그래픽으로 창조하는 고객의 가치</h5>
              <div className="inline">
                <p className="body-s">엔터테인먼트, 미디어 아트, 마케팅 및 프로모션까지</p>
                <p className="body-s">체험형 콘텐츠로 혁신적인 가치를 제공합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="page-container">
        <div id="background">
          <div className="filter" />
          <img src="/assets/home/xr.png" alt="" />
        </div>
        <div id="page" className="xr">
          <div className="title-container">
            <h1 className="title-l">XR Contents Production</h1>
            <div className="content one">
              <p className="body-s">
                AR/VR 등 버추얼 기술과 CG, VFX, 3D 모델링을 아우르는 3D 콘텐츠 통합 프로세스를 통해 기획에서 완성까지,
                창의성과 완벽을 추구합니다.
              </p>
            </div>
            <div className="content two">
              <p className="body-s">AR/VR 등 버추얼 기술과 CG, VFX, 3D 모델링을 아우르는</p>
              <p className="body-s">3D 콘텐츠 통합 프로세스를 통해 기획에서 완성까지, 창의성과 완벽을 추구합니다.</p>
            </div>
          </div>
          <div className="items">
            <div className="item">
              <p className="body-m">Marketing & Promotion</p>
            </div>
            <div className="line" />
            <div className="item">
              <p className="body-m">Entertainment</p>
            </div>
            <div className="line" />
            <div className="item">
              <p className="body-m">Education</p>
            </div>
          </div>
        </div>
      </div>

      <div id="page-container">
        <div id="page" className="xr-production">
          {xrProductions.map((xrProduction, index) => (
            <div className="section" key={xrProduction.title}>
              <div className="title-container">
                <div className="title">
                  <h5 className="title-s">XR Contents Production #{index + 1}</h5>
                  <h1 className="title-l gradient">{xrProduction.title}</h1>
                </div>
                <div className="content">
                  <p className="body-s">{xrProduction.content}</p>
                  <div className="more">
                    <p className="body-s-b">자세히 알아보기</p>
                  </div>
                </div>
              </div>
              <div className="content">
                {xrProduction.cards.map((card) => (
                  <div className="card" key={card.title}>
                    <div className="images">
                      {card.images.map((image, index) => (
                        <div className="image" key={index}>
                          <img src={`/assets/home/xr/${image}.png`} alt="" />
                        </div>
                      ))}
                    </div>
                    <div className="body">
                      <div className="title">
                        <h3 className="title-m">{card.title}</h3>
                      </div>
                      <p className="body-s">{card.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="page-container">
        <div id="background">
          <div className="filter" />
          <img src="/assets/home/vdorm.png" alt="" />
        </div>
        <div id="page" className="vdorm">
          <img src="/assets/home/vdormlogo.png" alt="" />
          <div className="title">
            <h1 className="title-l">V-DORM</h1>
            <h1 className="title-l">Production</h1>
          </div>
          <div className="content">
            <p className="body-s">버추얼 크리에이터를 위한 방송 콘텐츠 제작, 방송 종합 솔루션입니다.</p>
            <p className="body-s">
              3D 콘텐츠 에디터, 스튜디오 플랫폼, 모션 캡쳐 AI 등 VisonaryLabs의 기술을 집약하였습니다.
            </p>
          </div>
        </div>
      </div>

      {/* <div id="page-container">
        <div id="page" className="post">
          <div className="title-container">
            <div className="title">
              <h1 className="title-l gradient">Post</h1>
              <p className="body-s">VisionaryLabs가 지금까지 수행했던 프로젝트를 만나보세요.</p>
            </div>
            <div className="sub">
              <div className="control left">
                <p className="body-s">뒤로 넘기기</p>
              </div>
              <div className="selector">
                <div className="select selected">
                  <p>전체</p>
                </div>
                <div className="select">
                  <p>News</p>
                </div>
                <div className="select">
                  <p>Portfolio</p>
                </div>
              </div>
              <div className="control right">
                <p className="body-s">앞으로 넘기기</p>
              </div>
            </div>
          </div>
          <div className="content" />
        </div>
      </div> */}

      <div id="page-container">
        <div id="page" className="partners">
          <div className="title">
            <h1 className="title-l gradient">Partners</h1>
            <p className="body-s">바로 지금, VisionaryLabs와 함께하고 있는 파트너입니다.</p>
          </div>
          <div className="content">
            <img src={"/assets/home/partners/1.png"} alt="" />
            <img src={"/assets/home/partners/2.png"} alt="" />
            <img src={"/assets/home/partners/3.png"} alt="" />
            <img src={"/assets/home/partners/4.png"} alt="" />
          </div>
        </div>
      </div>

      <div id="page-container">
        <div id="page" className="contact">
          <div className="container">
            <div className="left">
              <div className="title">
                <h1 className="title-l gradient">Contact</h1>
                <p className="body-s">VisionaryLabs와 함께하고 싶으신가요? 저희는 언제나 연락을 기다리고 있습니다!</p>
              </div>
              <div className="form">
                <div className="who">
                  <div className="group">
                    <div className="mix">
                      <div className="name">
                        <p>회사명</p>
                        <p className="required">*</p>
                      </div>
                      <input placeholder="회사명" />
                    </div>
                    <div className="mix">
                      <div className="name">
                        <p>담당자</p>
                        <p className="required">*</p>
                      </div>
                      <input placeholder="담당자" />
                    </div>
                    <div className="mix">
                      <div className="name">
                        <p className="">예산</p>
                      </div>
                      <input placeholder="예산" />
                    </div>
                  </div>
                  <div className="group">
                    <div className="mix">
                      <div className="name">
                        <p>이메일</p>
                        <p className="required">*</p>
                      </div>
                      <input placeholder="이메일" />
                    </div>

                    <div className="mix">
                      <div className="name">
                        <p>연락처</p>
                        <p className="required">*</p>
                      </div>
                      <input placeholder="연락처" />
                    </div>
                  </div>
                </div>
                <div className="what">
                  <div className="mix">
                    <div className="name">
                      <p>문의 내용</p>
                      <p className="required">*</p>
                    </div>
                    <textarea />
                  </div>
                </div>
              </div>
              <div className="submit">
                <p className="body-s">보내기</p>
              </div>
            </div>
            <div className="divider" />
            <div className="right">
              <div className="content">
                <h5 className="title-s">주소 및 연락처</h5>
                <div className="information">
                  <div className="info">
                    <p className="body-s">서울특별시 성북구 124 서경대학교 유담관 16층 E-1호</p>
                  </div>
                  <div className="info">
                    <p className="body-s">010-7556-8034</p>
                    <a className="body-s link" href="tel:010-7556-8034">
                      전화하기
                    </a>
                  </div>
                  <div className="info">
                    <p className="body-s">korvisionarylabs@gmail.com</p>
                    <a className="body-s link" href="mailto:korvisionarylabs@gmail.com">
                      이메일 보내기
                    </a>
                  </div>
                </div>
              </div>
              <div className="map">{/* */}</div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
