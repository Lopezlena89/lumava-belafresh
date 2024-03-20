import { Link, Navbar, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/react';
import  { useState } from 'react'

export const MiniNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Exfoliantes",
    "Tónicos faciales",
    "Sueros faciales",
    "Cremas faciales",
    "Suero de pestañas y cejas",
  ];

  return (
    <>
        <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className='bg-white'
        
        >
            <NavbarContent   justify="start">
                <NavbarMenuToggle className='text-orange-600 ' aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>
            <NavbarMenu  className='mt-9 ' >
                {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`} >
                    <Link
                    className="w-full text-orange-600 hover:text-orange-800"
                    href="#"
                    size="lg"
                    >
                    {item}
                    </Link>
                </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>

    </>
  )
}
