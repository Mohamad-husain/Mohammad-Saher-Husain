import './Footer.css';


const FooterPlacesMosq = () => {

    return (
    <>
        <footer className="new_footer_area bg_color">
            <div className="new_footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="f_widget company_widget wow fadeInLeft"
                                data-wow-delay="0.2s"
                                style={{
                                    visibility: "visible",
                                    animationDelay: "0.2s",
                                    animationName: "fadeInLeft"
                                }}
                            >
                                <h3 className="f-title f_600 t_color f_size_18" id="ft_h3">Get in Touch</h3>
                                <p>Don’t miss any updates of our new templates and extensions.!</p>
                                <form
                                    action="#"
                                    className="f_subscribe_two mailchimp"
                                    method="post"
                                    noValidate={true}
                                    _lpchecked={1}
                                >
                                    <input
                                        type="text"
                                        name="EMAIL"
                                        className="form-control memail"
                                        placeholder="Email"
                                    />
                                    <button className="btn btn_get btn_get_two" type="submit">
                                    Subscribe
                                    </button>
                                    <p className="mchimp-errmessage" style={{ display: "none" }} />
                                    <p className="mchimp-sucmessage" style={{ display: "none" }} />
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="f_widget about-widget pl_70 wow fadeInLeft"
                                data-wow-delay="0.4s"
                                style={{
                                    visibility: "visible",
                                    animationDelay: "0.4s",
                                    animationName: "fadeInLeft"
                                }}
                            >
                                <h3 className="f-title f_600 t_color f_size_18" id="ft_h3">Download</h3>
                                <ul className="list-unstyled f_list">
                                    <li>
                                        <a href="#/" alt=" " target="-blannk" title="go to " >Company</a>
                                    </li>
                                    <li>
                                        <a href="#/" alt=" " target="-blannk" title="go to " >Android App</a>
                                    </li>
                                    <li>
                                        <a href="#/" alt=" " target="-blannk" title="go to " >ios App</a>
                                    </li>
                                    <li>
                                        <a href="#/" alt=" " target="-blannk" title="go to " >Desktop</a>
                                    </li>
                                    <li>
                                        <a href="#/" alt=" " target="-blannk" title="go to " >Projects</a>
                                    </li>
                                    <li>
                                        <a href="#/" alt=" " target="-blannk" title="go to " >My tasks</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="f_widget about-widget pl_70 wow fadeInLeft"
                                data-wow-delay="0.6s"
                                style={{
                                    visibility: "visible",
                                    animationDelay: "0.6s",
                                    animationName: "fadeInLeft"
                                }}
                            >
                                <h3 className="f-title f_600 t_color f_size_18" id="ft_h3">Help</h3>
                                <ul className="list-unstyled f_list">
                                    <li>
                                    <a href="#/" alt=" " target="-blannk" title="go to " >FAQ</a>
                                    </li>
                                    <li>
                                    <a href="#/" alt=" " target="-blannk" title="go to " >Term &amp; conditions</a>
                                    </li>
                                    <li>
                                    <a href="#/" alt=" " target="-blannk" title="go to " >Reporting</a>
                                    </li>
                                    <li>
                                    <a href="#/" alt=" " target="-blannk" title="go to " >Documentation</a>
                                    </li>
                                    <li>
                                    <a href="#/" alt=" " target="-blannk" title="go to " >Support Policy</a>
                                    </li>
                                    <li>
                                    <a href="#/" alt=" " target="-blannk" title="go to " >Privacy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div
                                className="f_widget social-widget pl_70 wow fadeInLeft"
                                data-wow-delay="0.8s"
                                style={{
                                    visibility: "visible",
                                    animationDelay: "0.8s",
                                    animationName: "fadeInLeft"
                                }}
                            >
                                <h3 className="f-title f_600 t_color f_size_18" id="ft_h3">Team Solutions</h3>
                                <div className="f_social_icon">
                                    <div className="text-center">
                                        <a href="#/" alt=" " className="d-inline-block m-2 rounded-circle bg-light text-center">

                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="#/" alt=" " className="d-inline-block m-2 rounded-circle bg-light text-center">

                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="#/" alt=" " className="d-inline-block m-2 rounded-circle bg-light text-center">

                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                        <a href="#/" alt=" " className="d-inline-block m-2 rounded-circle bg-light text-center">
                                            
                                            <i className="fab fa-pinterest-p"></i>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bg">
                    <div className="footer_bg_one" />
                    <div className="footer_bg_two" />
                </div>
            </div>
            <div className="footer_bottom_places">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-7">
                            <p className="mb-0 f_400">
                                © cakecounter Inc.. 2019 All rights reserved.
                            </p>
                        </div>
                        <div className="col-lg-6 col-sm-5 text-right">
                            <p>
                                Made with <i className="icon_heart" /> in{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </>
    );
};
export default FooterPlacesMosq;