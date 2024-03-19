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
        isBordered
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className='bg-white border-0'
        >
            <NavbarContent className="sm:hidden " justify="start">
                <NavbarMenuToggle className='text-orange-600' aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`} >
                    <Link
                    className="w-full text-orange-600 hover:text-orange-300"
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
