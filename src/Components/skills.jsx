import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default class Skills extends React.Component {
    render() {
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true,
            arrows: false,
        };
        return (
            <div className="skills">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Skills</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="skill-slider">
                                <Slider {...settings}>
                                    <div className="skill-item">
                                        <div className="skill-icon">
                                            <i className="fab fa-html5"></i>
                                        </div>
                                    </div>
                                    <div className="skill-item">
                                        <div className="skill-icon">
                                            <i className="fab fa-css3-alt"></i>
                                        </div>
                                    </div>
                                    <div className="skill-item">
                                        <div className="skill-icon">
                                            <i className="fab fa-js-square"></i>
                                        </div>
                                    </div>
                                    <div className="skill-item">
                                        <div className="skill-icon">
                                            <i className="fab fa-react"></i>
                                        </div>
                                    </div>
                                    <div className="skill-item">
                                        <div className="skill-icon">
                                            <i className="fab fa-bootstrap"></i>
                                        </div>
                                    </div>
                                    <div className="skill-item">
                                        <div className="skill-icon">
                                            <i className="fab fa-github-square"></i>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};