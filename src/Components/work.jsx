const Work = () => {
	return (
		<section className="work" id="work">
			<div className="work-title">
				<h1>My Work</h1>
			</div>
			<div className="container">
				<div className="projects">
					<div className="row justify-content-center">
						<div className="col-lg-4 col-md-6">
							<div className="project">
								<div className="project-image">
									<img
										src={process.env.PUBLIC_URL + '/imgs/projects/nfe.png'}
										alt="project1"
										className="w-100"
									/>
								</div>
								<div className="project-description">
									<h2>NFE</h2>
									<p>For Gaming Setups and Pc Accessories</p>
									<div className="git-link">
										<a href="https://omar-abdelatif.github.io/nubian-for-electronics/">
											<i class="bi bi-link-45deg"></i>
										</a>
									</div>
									<div className="tags">
										<span>HTML5</span>
										<span>JavaScript</span>
										<span>CSS3</span>
										<span>Jquery</span>
										<span>Bootstrap5</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="project">
								<div className="project-image">
									<img
										src={process.env.PUBLIC_URL + '/imgs/projects/game.png'}
										alt="project2"
										className="w-100"
									/>
								</div>
								<div className="project-description">
									<h2>Gaming For Life</h2>
									<p>For Selling Pc, Xbox, Ps Games</p>
									<div className="git-link">
										<a href="https://omar-abdelatif.github.io/gameing-site/">
											<i class="bi bi-link-45deg"></i>
										</a>
									</div>
									<div className="tags">
										<span>HTML5</span>
										<span>CSS3</span>
										<span>Bootstrap5</span>
										<span>Jquery</span>
										<span>JavaScript</span>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6">
							<div className="project">
								<div className="project-image">
									<img
										src={process.env.PUBLIC_URL + '/imgs/projects/piratesbike.png'}
										alt="project2"
										className="w-100"
									/>
								</div>
								<div className="project-description">
									<h2>Pirates Bikes</h2>
									<p>For Finding Lost Bikes</p>
									<div className="git-link">
										<a href="https://omar-abdelatif.github.io/pirates-bikes/">
											<i class="bi bi-link-45deg"></i>
										</a>
									</div>
									<div className="tags">
										<span>HTML5</span>
										<span>CSS3</span>
										<span>JavaSctipt</span>
										<span>Bootstrap5</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="seemore">
					<a className="btn btn-primary" href="https://github.com/omar-abdelatif?tab=repositories">See More</a>
				</div>
			</div>
		</section>
	);
};
export default Work;
