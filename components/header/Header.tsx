import { MenuIcon } from '@heroicons/react/outline'
import { useState, useEffect } from 'react'

const Header = () => {
  const [bg, setBg] = useState('')
  const [text, setText] = useState('text-white')
  const [hover, setHover] = useState('text-secondary')
  const [color, setColor] = useState('text-white')

  const listenScrollEvent = () => {
    if (window.scrollY > 100) {
      setBg('bg-white')
      setText('text-black')
      setHover('text-primary')
      setColor('text-primary')
    } else {
      setBg('')
      setText('text-white')
      setHover('text-secondary')
      setColor('text-white')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  })

  return (
    <div className="fixed top-0 left-0 right-0">
        <div className={`${bg} ${bg !== '' && 'shadow-md'}`}>
            <div className="w-full 2xl:w-10/12 2xl:mx-auto px-4 py-4 lg:px-8 lg:py-6">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-auto h-8 lg:h-16"
                            src={`/assets/images/${bg === '' ? 'logo.png' : 'logo-white.png'}`}
                            alt='logo' loading='lazy'
                        />
                    </div>
                    <ul className="hidden lg:flex space-x-10 items-center text-black">
                        <li className="hover:text-primary cursor-pointer transition-all duration-300 ease-in-out">Beranda</li>
                        <li className="hover:text-primary cursor-pointer transition-all duration-300 ease-in-out">Profil Madrasah</li>
                        <li className="hover:text-primary cursor-pointer transition-all duration-300 ease-in-out">Berita Madrasah</li>
                        <li className="hover:text-primary cursor-pointer transition-all duration-300 ease-in-out">Kurikulum</li>
                        <li className="hover:text-primary cursor-pointer transition-all duration-300 ease-in-out">PPDB</li>
                        <li className="hover:text-primary cursor-pointer transition-all duration-300 ease-in-out">Kontak</li>
                        <li className="flex items-center space-x-3">
                            <img className="w-6 h-auto -mr-1" alt="facebook" src="/assets/icons/facebook.png"/>
                            <img className="w-6 h-auto" alt="facebook" src="/assets/icons/ig.png"/>
                            <img className="w-6 h-auto" alt="facebook" src='/assets/icons/twitter.png'/>
                        </li>
                    </ul>
                    <div className="block lg:hidden">
                        <MenuIcon className="h-5 w-5 text-primary"
                            fill="none" stroke="currentColor"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header