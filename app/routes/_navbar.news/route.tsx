import "~/styles/news.css";

export default function News() {
  return (
    <div id="pages">
      <div id="page-container" className="">
        <div id="page" className="news">
          <div className="header">
            <h3 className="title-m">News</h3>
            <div className="category">
              <div className="item selected">
                <p>News</p>
              </div>
              <div className="item">
                <p>Portfolio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
