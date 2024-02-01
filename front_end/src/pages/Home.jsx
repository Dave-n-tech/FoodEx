import { useState } from 'react'
import HomeHeader from '../layout-home/HomeHeader'
import HomeMenu from '../layout-home/HomeMenu'


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  
  return (
    <main className="home-page">
      <HomeHeader isOpen={menuOpen} setIsOpen={setMenuOpen} />
      <HomeMenu isOpen={menuOpen} setIsOpen={setMenuOpen} />
      
    </main>
  )
}
