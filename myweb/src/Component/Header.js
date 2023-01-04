import '../Style/Header.css'
export default function Header () {
  return (
    <div className="header-container">
      <div className="header">
        <img src="./stackLogo.png" alt="logo" />
        <ul className='menu-list'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Product</a></li>
          <li><a href="#">For Teams</a></li>
        </ul>
        <input type="text" placeholder='Search'></input>
        <button className='Log-in'>Log in</button>
        <button className='Sign-in'>Sign in</button>
      </div>
    </div>
  );
}