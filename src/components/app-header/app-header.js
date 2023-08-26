import './app-header.sass';

const Header = () => {    
    return(
        <header>
            <nav>
                <ul className='menu'>
                    <li className="menu__item">
                        <img src="../../../../icons/outline_beans.svg" alt="beans" />
                        <a href="#no_scroll" className='menu__link'>Coffee house</a>
                    </li>
                    <li className="menu__item">
                        <a href="#no_scroll" className='menu__link'>Our coffee</a>
                    </li>
                    <li className="menu__item">
                        <a href="#no_scroll" className='menu__link'>For your pleasure</a>
                    </li>
                </ul>
            </nav>
            <h1>
                Everything You Love About Coffee
            </h1>
            <div className="decor__wrapper">
                <span></span>
                <img src="../../../../icons/white_beans.svg" alt="beans" />
                <span></span>
            </div>
            <div className='subtitle'>
                We makes every day full of energy and taste <br />
                Want to try our beans?
            </div>
            <button>
                More
            </button>
        </header>
    )
}



export default Header;

