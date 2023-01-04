import '../../Style/Left.css'
export default function Left() {
  return (
    <div className="left-navigation">
      <ol className="nav-links">
        <li className="Home">
          <a href="#">Home</a>
        </li>
        <li>
          <ol className="list">
            <li className='Public'>Public</li>
            <li className='Questions'><img src='./globe-americas.svg'></img>Questions</li>
            <li>Tags</li>
            <li>Users</li>
            <li>Companies</li>
          </ol>
        </li>
      </ol>
    </div>
  );
}