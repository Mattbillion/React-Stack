import '../Style/MainBar.css'
export default function MainBar () {
  return (
    <div className="main-container">
      <div className="header">
        <h1>All Questions</h1>
        <a href="#">Ask Question</a>
      </div>
      <div className="middle">
        <span>23,366,605 questions</span>
        <div className="menus">
          <ul>
            <li>Newest</li>
            <li>Active</li>
            <li>Bountied</li>
            <li>Unanswered</li>
            <li>More</li>
          </ul>
          <a href = "#">Filter</a>
        </div>
      </div>

    <div className="posts">
      <div className="item">
        <div className="left">
        <span>0 votes</span>
        <span>0 answers</span>
        <span>2 views</span>
        </div>
        <div className="right">
          <h1>How to combine multiple column by specific symbols followed in each column?</h1>
          <p>I have recently been using TOMST data logger to measure air temperature, soil temperature and humidity, but the original data csv output is pretty dirty...for example, the whole data was split ei</p>
        </div>
        
      </div>
      <div className="bottom">
          <div className="chips">
            <a href="#">sorting</a>
            <a href="#">tidyverse</a>
            <a href="#">combine</a>
          </div>

          <div className="publisher">
            <img src="" alt="" />
            <span>Syuan-Jyun Sun</span>
            <span> 1 asked 24 sec ago</span>
          </div>
        </div>
    </div>
    </div>
  )
}