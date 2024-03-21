import { Categories } from "./components/Categories"
import { Footer } from "./components/Footer"
import { Principal } from "./components/Principal"
import { Productos } from "./components/Productos"
import { Sidebar } from "./components/navbar/MiniNavbar"
import { Navbar } from "./components/navbar/Navbar"


export const App = () => {
  return (
    <>
       <div className="flex flex-col w-full h-auto  overflow-hidden ">
        <Navbar/>
        <Sidebar/>
        <main className="w-full h-auto">
          <Principal/>
          <Categories/>
          <Productos/>
        </main>
        <Footer/>
       </div>
    </>
  )
}

