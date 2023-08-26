import './second-header.sass';

const SecondHeader = () => {

	return(
		<header className='second__header'>
			<nav>
                <ul className='second__header_menu'>
                    <li className="second__header_item">
                        <img src="../../../../icons/outline_beans.svg" alt="beans" />
                        <a href="#no_scroll" className='second__header_link'>Coffee house</a>
                    </li>
                    <li className="second__header_item">
                        <a href="#no_scroll" className='second__header_link'>Our coffee</a>
                    </li>
                    <li className="second__header_item">
                        <a href="#no_scroll" className='second__header_link'>For your pleasure</a>
                    </li>
                </ul>
            </nav>
			<h2>
				Our Coffee
			</h2>
		</header>
	)
}

export default SecondHeader;