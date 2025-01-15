import "~/styles/service.css";

export default function Service() {
  return (
    <div id="pages">
      <div id="page-container" className="full">
        <div id="background">
          <div className="filter" />
          <img src="/assets/service/section.png" alt="" />
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

      <div id="page-container" className="full-min">
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
                <div className="viewer">{/* */}</div>
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

      <div id="page-container" className="full-min">
        <div id="page" className="mp">
          <div className="section top igc">
            <div className="media">
              <div className="player">
                <div className="viewer">{/* */}</div>
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
              <div className="thumbnail" />
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
              <div className="thumbnail" />
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

      <div id="page-container" className="full">
        <div id="background">
          <div className="filter" />
          <img src="/assets/service/section.png" alt="" />
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

      <div id="page-container" className="full">
        <div id="background">
          <div className="filter" />
          <img src="/assets/service/section.png" alt="" />
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
    </div>
  );
}
