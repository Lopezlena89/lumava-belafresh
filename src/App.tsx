import { Categories,Footer,Mapa,Principal } from "./components";
import { Sidebar } from "./components/navbar/MiniNavbar";
import { Navbar } from "./components/navbar/Navbar";


export const App = () => {
  return (
    <>
       <div className="flex flex-col w-full h-auto  overflow-hidden ">
        <Navbar/>
        <Sidebar/>
        <main className="w-full h-auto">
          <Principal/>
          <Categories/>
          <Mapa/>
        </main>
        <Footer/>
       </div>
    </>
  )
}

