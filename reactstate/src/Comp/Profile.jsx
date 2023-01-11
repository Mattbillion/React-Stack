export default function Profile(prop) {
  const { setLogout } = prop;
  // const [isLogout, setIsLoggedOut] = useState(false);

  // function logoutHandler() {
  //   setIsLoggedOut(true);
  // }

  return (
   <div className="">
    <h1>Profile</h1>
    <div className="App">
      <button onClick={()=>{
        setLogout()
      }}>Logout</button>
    </div>
   </div>
  )
}