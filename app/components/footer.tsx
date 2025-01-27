import "~/styles/footer.css";

const Footer = ({ text = true }: { text?: boolean }) => {
  return (
    <div id="footer">
      <div className="inner top">
        {text && (
          <div className="title">
            <h1 className="title-l">아이디어가</h1>
            <h1 className="title-l gradient">현실이 되는 공간</h1>
          </div>
        )}
      </div>
      <div className="inner bottom">
        <div className="vl">
          <div className="logo" />
          <div className="info">
            <p className="body-s">서울특별시 성북구 124 서경대학교 유담관 16층 E-1호</p>
            <div className="contact">
              <div className="mix">
                <p className="body-s">010-7556-8034</p>
                <a className="body-s link" href="tel:010-7556-8034">
                  전화하기
                </a>
              </div>
              <div className="mix">
                <p className="body-s">korvisionarylabs@gmail.com</p>
                <a className="body-s link" href="mailto:korvisionarylabs@gmail.com">
                  이메일 보내기
                </a>
              </div>
            </div>
          </div>
          <p className="body-s cr desktop">ⓒ 2024 VisionaryLabs. All Rights Reserved.</p>
        </div>
        <div className="items">
          {/* <div className="item">
            <h5 className="title-s">이용안내</h5>
            <div className="links">
              <a href="#/" className="body-s">
                서비스 이용약관
              </a>
              <a href="#/" className="body-s">
                개인정보처리방침
              </a>
            </div>
          </div> */}
          <div className="item">
            <h5 className="title-s">SNS</h5>
            <div className="icons">
              <a
                href="https://www.youtube.com/@VisionaryLabs-dr5ub"
                target="_blank"
                className="icon youtube"
                rel="noreferrer">
                {/* youtube */}
              </a>
              <a href="https://instagram.com" target="_blank" className="icon instagram" rel="noreferrer">
                {/* Instagram */}
              </a>
            </div>
          </div>
          <div className="item">
            <div className="download">
              <p className="body-s-b">회사소개서 다운로드</p>
            </div>
          </div>
        </div>
        <div className="res">
          <p className="body-s cr down">ⓒ 2024 VisionaryLabs. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export { Footer };
