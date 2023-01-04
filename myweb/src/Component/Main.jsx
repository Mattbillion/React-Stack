import Left from "./Sub-component/Left";
import Middle from "./Sub-component/Middle";
import Right from "./Sub-component/Right";
import '../Style/Main.css'

export default function Main() {
  return (
   <div className="main-style">
     <Left/>
    <Middle/>
    <Right/>
   </div>
  )
}