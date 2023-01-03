import '../Style/SideMenu.css'
export default function SideMenu () {
  return (
    <div className = "sidenav">
      <a href = "#">Home</a>
      <div>
      <span>Public</span>
      <a href = "#" className="withIcon"><img className ="QuestionIcon" src="./search.png"></img>Questions</a>
      <a href = "#">Tags</a>
      <a href = "#">Users</a>
      <a href = "#">Companies</a>
      </div>
    </div>
  );
}