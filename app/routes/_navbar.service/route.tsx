import type { MetaFunction } from "@remix-run/react";
import { Footer } from "~/components/footer";
import { Image } from "~/components/image";
import { Indicator } from "~/components/indicator";
import { Video } from "~/components/video";
import "~/styles/service.css";

export const meta: MetaFunction = () => {
  return [
    { title: "VisionaryLabs - Service" },
    {
      property: "og:title",
      content: "VisionaryLabs - Service",
    },
    {
      name: "description",
      content: "아이디어가 현실이 되는 공간, 차세대 콘텐츠 제작의 중심에서, 우리는 미래를 만듭니다.",
    },
  ];
};

const programs = [
  "3D 그래픽, CG, VFX",
  "IT 개발 및 데이터 관리",
  "프로젝트 관리 컨설팅",
  "미디어 콘텐츠 설계/기획",
  "재무 및 회계",
  "커뮤니티 관리",
  "사업 전략 기획",
  "마케팅",
  "2D, 3D 디자인",
  "상품기획",
];

export default function Service() {
  return (
    <>
      <div className="page-container" id="1">
        <div id="background">
          <div className="filter" />
          <img src="https://assets.visionarylabstech.com/service/section.png" alt="" />
        </div>
        <div id="page" className="section">
          <div className="container">
            <div className="title">
              <div className="chip">
                <p className="body-m">Service #1</p>
              </div>
              <h1 className="title-l">Marketing & Promotion</h1>
            </div>
            <div className="description">
              <h5 className="title-s">혁신적인 마케팅 & 프로모션으로 브랜드의 가치를 극대화하다</h5>
              <p className="body-s">
                단순한 홍보를 넘어, 우리는 창의적 전략과 데이터 기반 인사이트로 브랜드의 가치를 극대화합니다. 트렌드를
                선도하는 콘텐츠와 강렬한 메시지로 소비자의 마음을 사로잡고, 브랜드와 고객 간의 깊은 유대감을 형성합니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-container">
        <div id="page" className="mp">
          <div className="section top ma">
            <div className="info ma">
              <div className="title">
                <div className="chip">
                  <p className="body-s-b">Marketing & Promotion</p>
                </div>
                <h1 className="title-lm gradient">Media Art</h1>
              </div>
              <div className="description ma">
                <h5 className="title-s">초실감 미디어 아트로 예술의 경계를 넘다</h5>
                <p className="body-s">
                  극실감 디지털 기술로 탄생한 미디어 아트. 감각을 자극하는 빛과 소리, 그리고 움직임을 통해 새로운 차원의
                  예술 경험을 제공합니다. 한눈에 감동을 선사하는 몰입형 작품을 만나보세요.
                </p>
              </div>
            </div>
            <div className="media">
              <div className="player">
                <div className="viewer">
                  <Video
                    abs
                    urls={[
                      "https://assets.visionarylabstech.com/service/ma/1.mp4",
                      "https://assets.visionarylabstech.com/service/ma/2.mp4",
                      "https://assets.visionarylabstech.com/service/ma/3.mp4",
                      "https://assets.visionarylabstech.com/service/ma/4.mp4",
                      "https://assets.visionarylabstech.com/service/ma/5.mp4",
                    ]}
                  />
                </div>
                <div className="progress">{/* */}</div>
              </div>
            </div>
          </div>
          <div className="section middle ma">
            <div className="item first">
              <div className="thumbnail" />
              <div className="content">
                <div className="title">
                  <h3 className="title-ms">초실감 몰입형 경험 제공</h3>
                </div>
                <div className="mix">
                  <p className="body-s-b">
                    최첨단 디지털 기술을 활용한 초실감 미디어 아트는 관객에게 몰입감을 극대화하는 예술 경험을
                    제공합니다.
                  </p>
                  <p className="body-s">
                    기술과 예술의 경계를 허무는 초실감 표현을 통해, 관객들은 단순히 감상하는 것을 넘어 작품 속으로 직접
                    들어가는 듯한 몰입감을 느낍니다.
                  </p>
                </div>
                <div className="mix">
                  <p className="body-s-b">우리는 관객과의 상호작용을 통해 예술을 체험할 수 있는 기회를 제공합니다.</p>
                  <p className="body-s">
                    관객이 작품에 참여하고 상호작용할 수 있는 인터랙티브 기능을 통해, 미디어 아트는 더욱 생동감 넘치는
                    예술 경험을 선사합니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="item second">
              <div className="thumbnail" />
              <div className="content">
                <div className="title">
                  <h3 className="title-ms">맞춤형 공간 연출</h3>
                </div>
                <div className="mix">
                  <p className="body-s-b">
                    미디어 아트는 공간에 따라 유연하게 변형될 수 있어, 다양한 환경에 맞는 맞춤형 연출이 가능합니다.
                  </p>
                  <p className="body-s">
                    미디어 아트는 설치 공간의 특성에 맞춰 작품을 디자인하고 구현할 수 있어, 실내외 전시, 이벤트, 상업
                    공간 등 다양한 장소에서 독창적인 공간 연출을 선보일 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section bottom">
            <div className="up">
              <div className="item">
                <h5 className="title-s">콘텐츠 기획 - 디자인 - 개발</h5>
                <p className="body-s">전문 콘텐츠 PD 그룹의 콘텐츠 제작 올인원 프로세스</p>
              </div>
              <div className="divider" />
              <div className="item">
                <h5 className="title-s">콘텐츠 기획 - 디자인 - 개발</h5>
                <p className="body-s">전문 콘텐츠 PD 그룹의 콘텐츠 제작 올인원 프로세스</p>
              </div>
              <div className="divider" />
              <div className="item">
                <h5 className="title-s">콘텐츠 기획 - 디자인 - 개발</h5>
                <p className="body-s">전문 콘텐츠 PD 그룹의 콘텐츠 제작 올인원 프로세스</p>
              </div>
            </div>
            <div className="symbol" />
            <div className="down">
              <div className="item">
                <h5 className="title-s">Exhibition Promotion</h5>
                <p className="body-s-b">전시관, 홍보관 기념관, 박물관</p>
              </div>
              <div className="item">
                <h5 className="title-s">Immersive Contents</h5>
                <p className="body-s-b">설치형-전시형 실감 콘텐츠</p>
              </div>
              <div className="item">
                <h5 className="title-s">Company Branding</h5>
                <p className="body-s-b">기업-기관 시각화 브랜딩</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-container">
        <div id="page" className="mp">
          <div className="section top igc">
            <div className="media">
              <div className="player">
                <div className="viewer">
                  <Video
                    abs
                    urls={[
                      "https://assets.visionarylabstech.com/service/igc/1.mp4",
                      "https://assets.visionarylabstech.com/service/igc/2.mp4",
                      "https://assets.visionarylabstech.com/service/igc/3.mp4",
                      "https://assets.visionarylabstech.com/service/igc/4.mp4",
                      "https://assets.visionarylabstech.com/service/igc/5.mp4",
                      "https://assets.visionarylabstech.com/service/igc/6.mp4",
                    ]}
                  />
                </div>
                <div className="progress">{/* */}</div>
              </div>
            </div>
            <div className="info igc">
              <div className="title">
                <div className="chip">
                  <p className="body-s-b">Marketing & Promotion</p>
                </div>
                <h1 className="title-lm gradient">
                  Interactive
                  <br />
                  Graphic Contents
                </h1>
              </div>
              <div className="description igc">
                <h5 className="title-s">몰입형 그래픽 콘텐츠 솔루션</h5>
                <p className="body-s">
                  CG, VFX, 특수효과 등 고퀄리티 그래픽 요소를 결합하여 게임, 영상, 이미지 등 다양한 플랫폼에서
                  인터랙티브한 콘텐츠를 제공합니다. 프로듀싱부터 그래픽, 개발까지 포함된 종합 패키지로, 3D 에셋, 배경,
                  특수효과가 통합된 원프로세스 제작 방식을 지원합니다. 맞춤형 기기 연동을 위한 언리얼 엔진 기반 유틸리티
                  개발로, 더욱 풍부하고 생동감 넘치는 콘텐츠를 제작할 수 있습니다. 제품 브랜딩, 마케팅 등 다양한 목적에
                  맞춘 콘텐츠와 플랫폼 통합 개발로 최적화된 시각적 경험을 선사합니다.
                </p>
              </div>
            </div>
          </div>
          <div className="section middle igc">
            <div className="item first">
              <div className="thumbnail">
                <Image url="https://assets.visionarylabstech.com/service/igc/1-1.png" />
                <Image url="https://assets.visionarylabstech.com/service/igc/1-2.png" />
                <Image url="https://assets.visionarylabstech.com/service/igc/1-3.gif" />
              </div>
              <div className="content">
                <div className="title">
                  <h3 className="title-ms">기획부터 제작, 개발까지 한 번에</h3>
                </div>
                <div className="mix">
                  <p className="body-s">
                    프로듀싱, 그래픽 디자인, 개발을 모두 포함한 종합 패키지로, 3D 에셋, 배경, 특수효과를 통합한
                    원프로세스 제작을 지원하여 빠르고 효율적인 콘텐츠 제작이 가능합니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="item second">
              <div className="thumbnail">
                <Image url="https://assets.visionarylabstech.com/service/igc/2-1.gif" />
                <Image url="https://assets.visionarylabstech.com/service/igc/2-2.png" />
              </div>
              <div className="content">
                <div className="title">
                  <h3 className="title-ms">
                    맞춤형 기기 연동과 최적화 및 언리얼 엔진 기반의 맞춤형 연동 유틸리티 개발
                  </h3>
                </div>
                <div className="mix">
                  <p className="body-s">
                    다양한 기기에 맞춘 유연한 연동과 최적화된 인터랙티브 그래픽 콘텐츠 제공으로, 사용자 경험을
                    극대화하고 콘텐츠 활용 범위를 넓힙니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section bottom">
            <div className="up">
              <div className="item">
                <h5 className="title-s">콘텐츠 제작 종합 패키지</h5>
                <p className="body-s">프로듀싱 – 그래픽 – 개발이 모두 포함된 통합 패키지</p>
              </div>
              <div className="divider" />
              <div className="item">
                <h5 className="title-s">원 -프로세스 그래픽 패키지</h5>
                <p className="body-s">3D 에셋 – 배경 레벨 – 특수효과 올인원 프로세스</p>
              </div>
              <div className="divider" />
              <div className="item">
                <h5 className="title-s">기기 연동 Unreal 엔지니어링</h5>
                <p className="body-s">콘텐츠 맞춤 연동 유틸리티 개발 서비스</p>
              </div>
            </div>
            <div className="symbol" />
            <div className="down">
              <div className="item">
                <h5 className="title-s">Commercial Contents</h5>
                <p className="body-s-b">제품 브랜딩 미디어 커머셜</p>
              </div>
              <div className="item">
                <h5 className="title-s">Promotion Contents</h5>
                <p className="body-s-b">마케팅 홍보 목적 미디어 콘텐츠</p>
              </div>
              <div className="item">
                <h5 className="title-s">Virtual Platformer</h5>
                <p className="body-s-b">콘텐츠 + 플랫폼 통합 개발</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-container" id="2">
        <div id="background">
          <div className="filter" />
          <img src="https://assets.visionarylabstech.com/service/section.png" alt="" />
        </div>
        <div id="page" className="section">
          <div className="container">
            <div className="title">
              <div className="chip">
                <p className="body-m">Service #2</p>
              </div>
              <h1 className="title-l">Entertainment</h1>
            </div>
            <div className="description">
              <h5 className="title-s">감동과 상상을 자극하는 차세대 엔터테인먼트</h5>
              <p className="body-s">
                창의적 스토리텔링과 첨단 기술로 당신의 콘텐츠가 관객에게 깊은 감동을 선사합니다. 영화, 게임, 광고 등
                다양한 엔터테인먼트 분야에서 혁신적 솔루션을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-container">
        <div id="page" className="mp vps">
          <div className="section top igc">
            <div className="info igc">
              <div className="title">
                <div className="chip">
                  <p className="body-s-b">Entertainment</p>
                </div>
                <h1 className="title-lm gradient">
                  Virtual <br className="optional" />
                  Production
                  <br />
                  Studio
                </h1>
              </div>
              <div className="description vps">
                <h5 className="title-s">XR 스튜디오로 여는 실시간 콘텐츠 제작의 혁신</h5>
                <p className="body-s">
                  최첨단 모션캡처 시설과 LED 월이 설치된 VP스튜디오에서 Aximmetry를 활용한 실시간 콘텐츠 제작을
                  제공합니다. 협약된 파트너 기업과의 제휴로 타사보다 경쟁력 있는 가격에 콘텐츠 제작이 가능하며, 영화,
                  광고, 가상 이벤트 등 다양한 미디어에서 혁신적이고 효율적인 결과물을 만들어냅니다.
                </p>
              </div>
            </div>
            <div className="media">
              <div className="player">
                <div className="viewer">
                  <Video abs urls={["https://assets.visionarylabstech.com/service/vps/1.mp4"]} />
                </div>
                <div className="progress">{/* */}</div>
              </div>
            </div>
          </div>
          <div className="section middle igc">
            <div className="item first">
              <div className="thumbnail">
                <Image url="https://assets.visionarylabstech.com/service/vps/1-1.png" />
                <Image url="https://assets.visionarylabstech.com/service/vps/1-2.png" />
              </div>
              <div className="content">
                <div className="title">
                  <h3 className="title-ms">최첨단 모션캡처와 실시간 콘텐츠 제작</h3>
                </div>
                <div className="mix">
                  <p className="body-s-b">
                    첨단 모션캡처 기술과 CG, VFX기술을 결합하여, 실시간으로 고품질의 콘텐츠를 제작합니다.
                  </p>
                  <p className="body-s">
                    기술의 경계를 뛰어넘는 혁신적인 솔루션으로 영화, 광고, 가상 이벤트 등 다양한 분야에서 실시간으로
                    현실감 넘치는 결과물을 제공합니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="item second">
              <div className="thumbnail">
                <Image url="https://assets.visionarylabstech.com/service/vps/2-1.png" />
                <Image url="https://assets.visionarylabstech.com/service/vps/2-2.png" />
              </div>
              <div className="content">
                <div className="title">
                  <h3 className="title-ms">Unreal과 Aximmetry를 활용한 실시간 콘텐츠 제작 및 송출</h3>
                </div>
                <div className="mix">
                  <p className="body-s">
                    Unreal과 Aximmetry 기술을 결합한 VP 스튜디오에서, 몰입감 넘치는 콘텐츠를 실시간으로 제작하고 송출할
                    수 있습니다. 가상 배경과 실시간 렌더링을 통해, 다양한 미디어와 이벤트에서 실시간 방송부터 영상
                    콘텐츠 제작까지 원활하게 진행할 수 있습니다.
                  </p>
                </div>
                <div className="mix">
                  <p className="body-s-b">
                    XR 스튜디오 운영사 GRAE과의 제휴로, 타사 대비 경쟁력 있는 가격에 콘텐츠 제작이 가능합니다.
                  </p>
                  <p className="body-s">
                    최고의 기술력을 기반으로 비용 절감을 실현해, 보다 효율적이고 경제적인 제작 환경을 제공합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="section flow">
            <div className="box first">
              <h5 className="title-s">방송 CG – VFX 기술 지원</h5>
              <div className="divider" />
              <div className="list">
                <p className="body-s-b">3D 버추얼 에셋 제작</p>
                <p className="body-s-b">4DX 연출 기법</p>
                <p className="body-s-b">자체 VFX 프리셋</p>
                <p className="body-s-b">콘텐츠 연출 기획</p>
              </div>
            </div>
            <div className="symbol" />
            <div className="box middle">
              <h5 className="title-s">Unreal – Aximmetry 운용기술 개발</h5>
              <div className="divider" />
              <div className="list">
                <p className="body-s">
                  <span>VIVE VR Tracker System</span>
                  <br />
                  카메라의 가상 공간을 실시간 연동
                </p>
                <p className="body-s">
                  <span>Aximmetry Operating System</span>
                  <br />
                  후처리가 필요없는 실시간 CG 동기화
                </p>
                <p className="body-s">
                  <span>Unreal Engine - VIVE VR - Aximmetry 혼합 운용 체계</span>
                  <br />
                  Screen EXT 활용, 공간의 제약이 없는 실시간 CG 촬영 연출 기법 지원
                </p>
              </div>
            </div>
            <div className="symbol" />
            <div className="box last">
              <h5 className="title-s">엔터테인먼트 콘텐츠 활용</h5>
              <div className="divider" />
              <div className="list">
                <p className="body-s">
                  <span>Virtual YouTube</span>
                  <br />
                  라이브 유튜브/숏폼
                </p>
                <p className="body-s">
                  <span>Live Commerce</span>
                  <br />
                  라이브 커머스
                </p>
                <p className="body-s">
                  <span>MV / CF 스튜디오</span>
                  <br />
                  광고/홍보/뮤직비디오
                </p>
              </div>
            </div>
          </div>
          <div className="vdorm">
            <div id="background">
              <div className="filter" />
              <img src="https://assets.visionarylabstech.com/service/vps/vdorm.png" alt="" />
            </div>
            <div className="chip">
              <p className="body-s-b">Entertainment</p>
            </div>
            <h1 className="title-lm">V-DORM Studio</h1>
            <div className="description">
              <h5 className="title-s">VisionaryLabs의 핵심기술로 구현한 혁신적 버추얼 프로덕션 솔루션</h5>
              <p className="body-s">
                V-DORM은 버추얼 크리에이터를 위한 방송 콘텐츠 제작, 방송 종합 솔루션입니다.
                <br />
                3D 콘텐츠 에디터, 스튜디오 플랫폼, 모션 캡쳐 AI 등 우리의 기술을 집약하였습니다.
              </p>
            </div>
          </div>
          <div className="package">
            <div className="title-container">
              <div className="title">
                <h3 className="title-ms">버추얼 방송 콘텐츠에 필요한 모든 제작 기술 통합 지원 패키지</h3>
              </div>
              <p className="body-s">
                최첨단 기술을 바탕으로 한 몰입형 교육 콘텐츠는 학습자들이 주도적으로 참여하고 체험할 수 있는 혁신적인
                학습 환경을 제공합니다. VR, AR, 3D 시뮬레이션을 통해 지식 전달을 넘어 실제 경험을 통해 깊이 있는 학습을
                이끌어냅니다.
              </p>
            </div>
            <div className="items">
              <img src="https://assets.visionarylabstech.com/service/vps/package1.gif" alt="" />
              <img src="https://assets.visionarylabstech.com/service/vps/package2.gif" alt="" />
              <video
                autoPlay
                loop
                muted
                playsInline
                src="https://assets.visionarylabstech.com/service/vps/package3.mp4"
              />
            </div>
          </div>
          <div className="pack">
            <div className="box">
              <div className="thumbnail first" />
              <div className="content">
                <h5 className="title-s">가상 공간에서 팬과 아티스트의 만남</h5>
                <p className="body-s">
                  혁신적인 가상 기술로 팬들은 디지털 공간에서 아티스트와 실시간으로 소통하며, 특별한 상호작용을
                  경험합니다. 물리적 거리를 넘어선 새로운 팬 경험을 제공합니다.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="thumbnail second" />
              <div className="content">
                <h5 className="title-s">아티스트의 세계를 탐구하는 인터랙티브 콘텐츠</h5>
                <p className="body-s">
                  팬들은 아티스트의 세계를 직접 탐험하며, 상호작용을 통해 자신만의 방식으로 콘텐츠를 즐길 수 있습니다.
                  디지털 공간에서 아티스트와 깊이 연결된 경험을 통해 더욱 강력한 유대감을 형성합니다.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="thumbnail third" />
              <div className="content">
                <h5 className="title-s">온라인 콘텐츠 통합 제작 솔루션</h5>
                <p className="body-s">
                  우리는 온라인 방송 콘텐츠와 영상 콘텐츠의 기획·제작·진행을 원스톱으로 제공합니다. 팬미팅, 제품 런칭,
                  세미나, 콘서트 등 다양한 행사에서 창의적인 연출과 첨단 기술을 통해 몰입감 넘치는 경험을 선사합니다.
                </p>
              </div>
            </div>
          </div>
          <div className="section middle igc">
            <div className="item first">
              <div className="thumbnail">
                <Image url="https://assets.visionarylabstech.com/service/vdorm/1-1.png" />
                <Image url="https://assets.visionarylabstech.com/service/vdorm/1-2.png" />
                <Image url="https://assets.visionarylabstech.com/service/vdorm/1-3.png" />
              </div>
              <div className="content">
                <div className="title">
                  <h3 className="title-ms">자체 버추얼 방송 플랫폼 개발</h3>
                </div>
                <div className="mix">
                  <p className="body-s">
                    3D 에셋 제작부터 방송 송출까지 한번에 진행합니다. SaaS 기반의 플랫폼을 통해 사용자는 간편하게 방송을
                    제작하고 실시간 송출할 수 있습니다. 추가적인 모션 캡처, 표정 인식, 그리고 실시간 상호작용 기능을
                    통합하여 더 생동감 넘치는 방송을 제공합니다. 사용자 맞춤형 UI와 통합된 클라우드 서비스로, 공간과
                    장비의 제약 없이 효율적인 제작 환경을 지원합니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="item second">
              <div className="thumbnail">
                <Image url="https://assets.visionarylabstech.com/service/vdorm/2-1.png" />
                <Image url="https://assets.visionarylabstech.com/service/vdorm/2-2.png" />
              </div>
              <div className="content">
                <div className="title">
                  <h3 className="title-ms">싱글캠 기반 모션 캡쳐 AI 기능 지원</h3>
                </div>
                <div className="mix">
                  <p className="body-s">
                    캠 하나로 사용자의 모든 동작을 정밀하게 인식하고, 이를 실시간으로 버추얼 아바타의 동작으로
                    변환합니다. 안면 이목구비와 섬세한 표정 변화를 동시에 캡처하여 사실적인 표현을 제공합니다. 15개 손
                    Pivot 회전값을 머신 러닝으로 분석하고, 이를 다양한 콘텐츠 기믹 실행 방식에 응용할 수 있습니다. 공간
                    제약 없는 4DX 방송 연출 세트장 유틸리티를 통해 어디서나 몰입감 넘치는 방송 제작이 가능합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="comp">
            <div className="title">
              <h5 className="title-s">버추얼 방송 플랫폼 구성 요소</h5>
            </div>
            <div className="box">
              <div className="item first">
                <div className="content">
                  <h5 className="title-s">Virtual Editor</h5>
                  <p className="body-s">3D 방송 세트장 에디터 플랫폼</p>
                </div>
              </div>
              <div className="divider" />
              <div className="item second">
                <div className="content">
                  <h5 className="title-s">Live Streaming</h5>
                  <p className="body-s">버추얼 유튜버 메타 휴먼</p>
                </div>
              </div>
              <div className="divider" />
              <div className="item third">
                <div className="content">
                  <h5 className="title-s">Virtual Studio</h5>
                  <p className="body-s">생방송 송출 스튜디오 플랫폼</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="page-container" id="3">
        <div id="background">
          <div className="filter" />
          <img src="https://assets.visionarylabstech.com/service/section.png" alt="" />
        </div>
        <div id="page" className="section">
          <div className="container">
            <div className="title">
              <div className="chip">
                <p className="body-m">Service #3</p>
              </div>
              <h1 className="title-l">Education Content</h1>
            </div>
            <div className="description">
              <h5 className="title-s">몰입형 교육 콘텐츠로 학습의 새로운 기준을 세우다</h5>
              <p className="body-s">
                최첨단 기술을 바탕으로 한 몰입형 교육 콘텐츠는 학습자들이 주도적으로 참여하고 체험할 수 있는 혁신적인
                학습 환경을 제공합니다.
                <br />
                VR, AR, 3D 시뮬레이션을 통해 지식 전달을 넘어 실제 경험을 통해 깊이 있는 학습을 이끌어냅니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="page-container">
        <div id="page" className="vt">
          <div className="step">
            <div className="item">
              <div className="number">
                <h5 className="title-s">1</h5>
              </div>
              <h5 className="title-s">몰입형 학습 경험</h5>
              <div className="content">
                <p className="body-s primary">
                  VR, AR, 3D 시뮬레이션 등을 통해 학습자가 실제로 체험하고 몰입할 수 있는 학습 환경을 제공합니다.
                </p>
                <p className="body-s">
                  전통적인 학습 방식을 넘어, 실감 나는 가상 환경에서 학습자가 직접 경험을 통해 배우며, 더 깊고 지속적인
                  이해를 도모합니다.
                </p>
              </div>
            </div>
            <div className="divider" />
            <div className="item">
              <div className="number">
                <h5 className="title-s">2</h5>
              </div>
              <h5 className="title-s">주도적인 참여와 상호작용</h5>
              <div className="content">
                <p className="body-s primary">
                  학습자가 단순히 정보를 받는 것이 아니라, 적극적으로 참여하고 상호작용하는 학습을 지원합니다.
                </p>
                <p className="body-s">
                  인터랙티브한 콘텐츠를 통해 학습자는 자신의 속도에 맞춰 주도적으로 학습에 참여하고, 스스로 지식을
                  탐구하는 능력을 키울 수 있습니다.
                </p>
              </div>
            </div>
            <div className="divider" />
            <div className="item">
              <div className="number">
                <h5 className="title-s">3</h5>
              </div>
              <h5 className="title-s">개인 맞춤형 학습 제공</h5>
              <div className="content">
                <p className="body-s primary">
                  기술을 활용한 데이터 분석으로 학습자의 수준과 요구에 맞춘 맞춤형 학습 경로를 제공합니다.
                </p>
                <p className="body-s">
                  학습자의 성과와 요구에 기반한 개인화된 학습 경험을 제공하여, 더욱 효율적이고 목표 지향적인 교육이
                  가능합니다
                </p>
              </div>
            </div>
          </div>
          <div className="main">
            <div className="title-container">
              <div className="title">
                <div className="chip">
                  <p className="body-s-b">Education Content</p>
                </div>
                <h1 className="title-lm gradient">VISION TRADE</h1>
              </div>
              <div className="content">
                <h5 className="title-s">
                  VisionaryLabs는 미래 인재 양성을 위해 다양한 분야의 창작자들이 모인 Vision Trade를 설립했습니다.
                </h5>
                <p className="body-s">
                  우리는 지속 가능한 미디어 산업 생태계를 구축하기 위해, 미디어 창작자, 프리랜서, 대학생을 대상으로 한
                  정기적인 교육 프로그램을 운영하고 있습니다. 또한, 기업의 사회적 책임을 실현하기 위해 강연 프로그램과
                  교육 콘텐츠 개발에 주력하며, 미래 인재 양성에 힘쓰고 있습니다.
                </p>
              </div>
            </div>
            <div className="grid">
              <div className="row">
                <div className="thumbnail first" />
                <div className="thumbnail second" />
              </div>
              <div className="row">
                <div className="thumbnail third" />
                <div className="thumbnail fourth" />
              </div>
            </div>
          </div>
          <div className="program">
            <div className="left">
              <div className="title-container">
                <div className="title">
                  <h3 className="title-ms">다양한 분야의 실무 중심 교육 프로그램</h3>
                </div>
                <p className="body-s">
                  우리는 다양한 분야의 창작자와 전문가를 위한 교육 커리큘럼을 제공합니다. 또한 실무 중심의 교육과
                  더불어, 정기적인 행사와 프로젝트 참여를 통해 실질적인 경험을 쌓을 수 있는 기회를 제공합니다.
                </p>
              </div>
              <div className="items">
                {programs.map((program, index) => (
                  <div key={index} className="item">
                    <p className="body-s-b">{program}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="divider" />
            <div className="right">
              <div className="item">
                <div className="circle first" />
                <h5 className="title-s">교육 리소스 개발 인력 제공</h5>
              </div>
              <div className="symbol" />
              <div className="item">
                <div className="circle second" />
                <h5 className="title-s">내부 교육 커리큘럼 설계</h5>
              </div>
              <div className="symbol" />
              <div className="item">
                <div className="circle third" />
                <h5 className="title-s">교육 콘텐츠 자체 제작</h5>
              </div>
              <div className="symbol" />
              <div className="item">
                <div className="circle fourth" />
                <h5 className="title-s">내부 세미나 교육 컨퍼런스</h5>
              </div>
              <div className="symbol" />
              <div className="item">
                <div className="circle fifth" />
                <h5 className="title-s">외부 초청 강연 교육 프로그램 진행</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Indicator items={["Marketing & Promotion", "Entertainment", "Education Content"]} />
    </>
  );
}
