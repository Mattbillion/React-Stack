import '../Style/Header.css'
export default function Header () {
  return (
    <header>
      <ul>
        <img src = "./stackLogo.png"></img>
        <li>About</li>
        <li>Products</li>
        <li>For Teams</li>
        <input className = "searchBar" type="text" placeholder= "Searchs"></input>
      </ul>
      <div className = 'Button-container'>
        <button className = "Button1">
          Log in
        </button>
        <button className = "Button2">
          Sign in
        </button>
      </div>
    </header>
  );
}