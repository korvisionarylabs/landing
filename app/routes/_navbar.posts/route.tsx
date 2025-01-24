import "~/styles/posts.css";

export default function Posts() {
  return (
    <div id="pages">
      <div id="page-container" className="">
        <div id="page" className="posts">
          <div className="header">
            <h3 className="title-m">Posts</h3>
            <div className="category">
              <div className="item selected">
                <p>전체</p>
              </div>
              <div className="item">
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
