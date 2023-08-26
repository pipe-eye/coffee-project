import './app-footer.sass';

const Footer = () => {
	return(
		<footer>
			<ul className='footer__menu'>
				<li className="footer__menu_item">
					<img src="../../../../icons/outline_black_beans.svg" alt="beans" />
					<a href="#no_scroll" className='footer__menu_link'>Coffee house</a>
				</li>
				<li className="footer__menu_item">
					<a href="#no_scroll" className='footer__menu_link'>Our coffee</a>
				</li>
				<li className="footer__menu_item">
					<a href="#no_scroll" className='footer__menu_link'>For your pleasure</a>
				</li>
			</ul>
			<div className="decor__wrapper decor__wrapper_black">
				<span></span>
				<img src="../../../../icons/filled_beans.svg" alt="beans" />
				<span></span>
			</div>
		</footer>
	)
}

export default Footer;