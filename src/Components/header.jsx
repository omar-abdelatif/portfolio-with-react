const Header = () => {
	return (
		<header className="header">
			<div className="profile-img">
				<img src={process.env.PUBLIC_URL + '/imgs/profile.jpg'} alt="" />
			</div>
			<div className="social">
				<div className="facebook">
					<a className="btn face-btn" href='https://www.facebook.com/omar.elmalek.5'>
						<i class="bi bi-facebook"></i>
					</a>
				</div>
				<div className="github">
					<a className="btn github-btn" href='https://github.com/omar-abdelatif'>
						<i class="bi bi-github"></i>
					</a>
				</div>
				<div className="whatsapp">
					<a className="btn whatsapp-btn" href='https://web.whatsapp.com/'>
						<i class="bi bi-whatsapp"></i>
					</a>
				</div>
			</div>
		</header>
	);
};
export default Header;