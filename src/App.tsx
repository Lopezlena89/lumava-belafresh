import { Principal } from "./components/Principal"
import { Navbar } from "./components/navbar/Navbar"


export const App = () => {
  return (
    <>
       <div className="flex flex-col w-screen h-screen">
        <Navbar/>
        <Principal/>
       </div>
    </>
  )
}

