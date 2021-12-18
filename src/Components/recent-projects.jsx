const RecentProject = () => {
	return (
		<section className="recent-project">
			<div className="recent-project-title">
				<h1>Recent Projects</h1>
			</div>
			<div className="recent-project-content">
				<div className="container">
					<div className="row">
						<div className="col-lg-12 my-4">
							<div className="project-item">
								<div className="project-item-img">
									<img src={process.env.PUBLIC_URL + '/imgs/projects/church.png'} alt="project1" />
								</div>
								<div className="project-item-content">
									<h3>Church</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
										adipiscing nec, ultricies sed, dolor.
									</p>
									<a href="https://omar-abdelatif.github.io/church/" className="btn btn-primary">View Project</a>
								</div>
							</div>
						</div>
						<div className="col-lg-12 my-4">
							<div className="project-item">
								<div className="project-item-img">
									<img src={process.env.PUBLIC_URL + '/imgs/projects/mediplus.png'} alt="project1" />
								</div>
								<div className="project-item-content">
									<h3>MediPlus</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
										adipiscing nec, ultricies sed, dolor.
									</p>
									<a href="https://omar-abdelatif.github.io/medical/" className="btn btn-primary">View Project</a>
								</div>
							</div>
						</div>
						<div className="col-lg-12 my-4">
							<div className="project-item">
								<div className="project-item-img">
									<img src={process.env.PUBLIC_URL + '/imgs/projects/watch.png'} alt="project1" />
								</div>
								<div className="project-item-content">
									<h3>TimeZone</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
										adipiscing nec, ultricies sed, dolor.
									</p>
									<a href="https://omar-abdelatif.github.io/watch/" className="btn btn-primary">View Project</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
export default RecentProject;
