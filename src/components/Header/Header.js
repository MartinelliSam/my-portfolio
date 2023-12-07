import './Header.css';
import Wallpaper from 'assets/WallpaperPortfolioByDesignecologist.jpg';

export default function Header() {
  return (
    <header>
       <img
        src={Wallpaper}
        alt='Wallpaper'
        className="header-img"
      />
    </header>
  )
}


