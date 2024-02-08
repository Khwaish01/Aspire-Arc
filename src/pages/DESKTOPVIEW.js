import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./DESKTOPVIEW.css";

const DESKTOPVIEW = () => {
  const navigate = useNavigate();

  const onListItemContainerClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='exploreMoreAndAboutUs']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onListItemContainer1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='coursesContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onListItemContainer2Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='locationContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onListItemContainer3Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contactUsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onListItemContainer4Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='feedbackContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onButtonContainerClick = useCallback(() => {
    navigate("/explore-more-and-about-us");
  }, [navigate]);

  const onButtonClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='feedbackContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onGoogleIconClick = useCallback(() => {
    window.open("https://g.co/kgs/XmPScA");
  }, []);

  const onLinkedinIconClick = useCallback(() => {
    window.open(
      "https://www.linkedin.com/in/khushi-mishra-323986202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    );
  }, []);

  const onGroupIconClick = useCallback(() => {
    window.open("https://www.instagram.com/aspire_arc/");
  }, []);

  const onGitHubIconClick = useCallback(() => {
    window.open("https://github.com/KHUSHIM02");
  }, []);

  const onORFILLTHEClick = useCallback(() => {
    window.open("https://forms.gle/BvgQzoLuxSscvvLr5");
  }, []);

  const onWhatsAppImage20231128At1Click = useCallback(() => {
    window.open(
      "https://www.google.com/maps/dir//aspire+arc+mayur+vihar+extension/@28.471966,77.1361956,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390ce5f9b08159a7:0xac394a9f075135fd!2m2!1d77.2963625!2d28.5955646?entry=ttu"
    );
  }, []);

  const onRatingComponentContainerClick = useCallback(() => {
    window.open("https://g.page/r/Cf01UQefSjmsEBM/review");
  }, []);

  const onStarClick = useCallback(() => {
    window.open("https://g.page/r/Cf01UQefSjmsEBM/review");
  }, []);

  const onStar1Click = useCallback(() => {
    window.open("https://g.page/r/Cf01UQefSjmsEBM/review");
  }, []);

  const onStar2Click = useCallback(() => {
    window.open("https://g.page/r/Cf01UQefSjmsEBM/review");
  }, []);

  const onStar3Click = useCallback(() => {
    window.open("https://g.page/r/Cf01UQefSjmsEBM/review");
  }, []);

  const onStar4Click = useCallback(() => {
    window.open("https://g.page/r/Cf01UQefSjmsEBM/review");
  }, []);

  const onCLICKHERETextClick = useCallback(() => {
    window.open("https://g.page/r/Cf01UQefSjmsEBM/review");
  }, []);

  const onGoogleIcon1Click = useCallback(() => {
    window.open("https://g.co/kgs/XmPScA");
  }, []);

  const onLinkedinIcon1Click = useCallback(() => {
    window.open(
      "https://www.linkedin.com/in/khushi-mishra-323986202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    );
  }, []);

  const onGroupIcon2Click = useCallback(() => {
    window.open("https://www.instagram.com/aspire_arc/");
  }, []);

  const onGitHubIcon1Click = useCallback(() => {
    window.open("https://github.com/KHUSHIM02");
  }, []);

  return (
    <div className="desktop-view">
      <header className="empty-frame">
        <div className="root-frame">
          <div className="logo-frame">
            <img className="logo-icon" loading="eager" alt="" src="/logo.svg" />
            <div className="aspire-arc">Aspire Arc</div>
          </div>
          <div className="search-box">
            <div className="home">Home</div>
            <div className="dropdown-menu">
              <div className="list-item" onClick={onListItemContainerClick}>
                <div className="about">About</div>
              </div>
              <div className="list-item1" onClick={onListItemContainer1Click}>
                <div className="courses">Courses</div>
              </div>
              <div className="list-item2" onClick={onListItemContainer2Click}>
                <div className="location">Location</div>
              </div>
              <div className="list-item3" onClick={onListItemContainer3Click}>
                <div className="contacts">Contacts</div>
              </div>
              <div className="list-item4" onClick={onListItemContainer4Click}>
                <div className="feedback">Feedback</div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="contact-info-frame">
        <div className="whats-app-image">
          <div className="call-to-action">
            <div className="rating-component">
              <div className="the-design-thinking-container">
                <p className="aspire">{`Aspire `}</p>
                <p className="to-inspire">
                  <span>To</span>
                  <span className="span">{`   `}</span>
                  <span className="inspire">Inspire</span>
                </p>
              </div>
            </div>
            <div className="label-text">
              <h1 className="the-design-thinking">Unleash Your Brilliance</h1>
            </div>
            <div className="text-block">
              <div className="button" onClick={onButtonContainerClick}>
                <div className="get-started">Explore More ...</div>
              </div>
              <button className="button1" onClick={onButtonClick}>
                <div className="feedback1">{`Feedback Us `}</div>
              </button>
            </div>
            <div className="follow-us-frame">
              <div className="home-text-frame">
                <b className="follow-us">Follow us :</b>
                <div className="about-counselling-session-fram">
                  <div className="booking-form-frame">
                    <img
                      className="google-icon"
                      loading="eager"
                      alt=""
                      src="/google.svg"
                      onClick={onGoogleIconClick}
                    />
                    <img
                      className="linkedin-icon"
                      loading="eager"
                      alt=""
                      src="/linkedin.svg"
                      onClick={onLinkedinIconClick}
                    />
                    <img
                      className="group-icon"
                      loading="eager"
                      alt=""
                      src="/group.svg"
                      onClick={onGroupIconClick}
                    />
                    <img
                      className="github-icon"
                      loading="eager"
                      alt=""
                      src="/github.svg"
                      onClick={onGitHubIconClick}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="hard-working-characters-png-tr"
            loading="eager"
            alt=""
            src="/hard-working-characters-png-transparent-hard-working-english-four-or-six-girls-character-design-girl-c-1@2x.png"
          />
        </div>
      </section>
      <section
        className="explore-more-and-about-us"
        data-scroll-to="exploreMoreAndAboutUs"
      >
        <div className="google-linkedin-group-git-hub">
          <div className="why-aspire">
            <h1 className="why-aspire-arc">Why Aspire Arc?</h1>
          </div>
          <div className="about-us-rectangle">
            <img
              className="coffees-01-icon"
              loading="eager"
              alt=""
              src="/coffees01@2x.png"
            />
            <div className="intro-machine-learning">
              <div className="personalized-sessions">
                <div className="book-session-now">
                  <h1 className="supportive-faculty">Supportive Faculty</h1>
                </div>
                <div className="aspire-arc-values-container">
                  <p className="aspire-arc-values">
                    Aspire Arc values a holistic approach to education,
                    understanding that students may not always excel in
                    academics but should possess a clear understanding of both
                    academic concepts and life skills.
                  </p>
                  <p className="the-faculty-at">
                    The faculty at Aspire Arc is committed to providing support
                    and guidance to students, fostering an environment where
                    learning is not solely focused on grades but on overall
                    comprehension and personal growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="united-india-apartments-text">
          <div className="phone-no-text">
            <div className="google-linkedin-group-git-hub1">
              <div className="whats-app-image-at-frame">
                <h1 className="interactive-learning">Interactive Learning</h1>
              </div>
              <div className="classes-at-aspire-container">
                <p className="classes-at-aspire">
                  Classes at Aspire Arc are designed to be lively and
                  interactive, encouraging student engagement and participation.
                </p>
                <p className="the-emphasis-on">
                  The emphasis on discussions promotes a deeper understanding of
                  the subjects, allowing students to actively contribute to the
                  learning process.
                </p>
              </div>
            </div>
          </div>
          <img className="coffees-01-icon1" alt="" src="/coffees01-1@2x.png" />
        </div>
        <div className="united-india-apartments-text1">
          <div className="coffees-01-parent">
            <img
              className="coffees-01-icon2"
              alt=""
              src="/coffees01-2@2x.png"
            />
            <div className="click-here-text">
              <div className="your-opinion-matters-to-us-tex">
                <div className="design-rectangle">
                  <h1 className="flexible-schedules">Flexible Schedules</h1>
                </div>
                <div className="recognizing-the-challenges-container">
                  <p className="recognizing-the-challenges">
                    Recognizing the challenges some students face in attending
                    classes on weekdays, Aspire Arc provides flexibility with
                    weekend batches.
                  </p>
                  <p className="this-allows-students">
                    This allows students with other commitments or scheduling
                    constraints to still access quality education and engage in
                    the learning process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="united-india-apartments-text2">
          <div className="united-india-apartments-text-inner">
            <div className="frame-parent">
              <div className="real-world-applications-wrapper">
                <h1 className="real-world-applications">
                  Real-world Applications
                </h1>
              </div>
              <div className="aspire-arc-believes-container">
                <p className="aspire-arc-believes">
                  Aspire Arc believes in the practical application of
                  theoretical knowledge. Students are not only exposed to
                  academic concepts but also learn how these concepts are
                  applied in real-world scenarios.
                </p>
                <p className="this-approach-ensures">
                  This approach ensures that students not only grasp the
                  theoretical foundations of their subjects but also understand
                  their relevance in practical situations.
                </p>
              </div>
            </div>
          </div>
          <img className="coffees-01-icon3" alt="" src="/coffees01-3@2x.png" />
        </div>
        <div className="united-india-apartments-text3">
          <div className="coffees-01-group">
            <img
              className="coffees-01-icon4"
              alt=""
              src="/coffees01-4@2x.png"
            />
            <div className="frame-wrapper">
              <div className="frame-group">
                <div className="guidance-for-the-future-wrapper">
                  <h1 className="guidance-for-the">Guidance for the Future</h1>
                </div>
                <div className="aspire-arc-goes-container">
                  <p className="aspire-arc-goes">
                    Aspire Arc goes beyond traditional education by providing
                    guidance on future career paths and university choices.
                  </p>
                  <p className="students-benefit-from">
                    Students benefit from insights that help them make informed
                    decisions about their educational and professional journeys,
                    ensuring they are well-prepared for the challenges that lie
                    ahead.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="united-india-apartments">
        <div className="courses1" data-scroll-to="coursesContainer">
          <div className="followus">
            <div className="courses-wrapper">
              <h1 className="courses2">Courses</h1>
            </div>
            <div className="followus-inner">
              <div className="frame-container">
                <div className="untitled-design-9-1-parent">
                  <img
                    className="untitled-design-9-1"
                    loading="eager"
                    alt=""
                    src="/untitled-design-9-1@2x.png"
                  />
                  <div className="th-10th-grade-maths-scienc-parent">
                    <h2 className="th-10th">{`9th & 10th Grade: Maths, Science`}</h2>
                    <h3 className="immerse-yourself-in-container">
                      <p className="immerse-yourself-in">
                        Immerse yourself in the world of numbers and equations,
                        and unravel the secrets of science. Our engaging courses
                        make learning math and science an exciting adventure!
                      </p>
                    </h3>
                  </div>
                </div>
                <div className="untitled-design-10-1-parent">
                  <img
                    className="untitled-design-10-1"
                    loading="eager"
                    alt=""
                    src="/untitled-design-10-1@2x.png"
                  />
                  <div className="th-12th-grade-computer-scie-parent">
                    <h2 className="th-12th">{`11th & 12th Grade:  Computer Science(Python)`}</h2>
                    <h3 className="step-into-the">
                      Step into the digital realm and explore the limitless
                      possibilities of computer science. From coding to
                      cutting-edge technologies, we prepare you for the
                      tech-driven world ahead.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="machine-learning-hub">
            <div className="self-discovery-frame">
              <div className="personalized-counselling">
                <div className="untitled-design-11-1-parent">
                  <img
                    className="untitled-design-11-1"
                    loading="eager"
                    alt=""
                    src="/untitled-design-11-1@2x.png"
                  />
                  <h2 className="introducing-machine-learning">
                    Introducing Machine Learning: Innovation Meets Intelligence
                  </h2>
                  <h3 className="take-your-skills">
                    Take your skills to the next level with our Machine Learning
                    course. Dive into the world of artificial intelligence and
                    discover the magic of machines that learn and adapt.
                  </h3>
                </div>
              </div>
              <div className="whats-app-image1">
                <img
                  className="untitled-design-11-2"
                  loading="eager"
                  alt=""
                  src="/untitled-design-11-2@2x.png"
                />
                <div className="personalized-counselling-sessi-parent">
                  <h2 className="personalized-counselling-sessi">
                    Personalized Counselling Sessions
                  </h2>
                  <h3 className="embark-on-a">
                    Embark on a journey of self-discovery and professional
                    fulfillment with our personalized Career Counseling
                    Sessions. Unveil your true potential, navigate career
                    crossroads, and sculpt a path that aligns with your
                    passions.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-form-frame">
        <div className="contact-us" data-scroll-to="contactUsContainer">
          <img
            className="whatsapp-image-2023-11-26-at-1"
            loading="eager"
            alt=""
            src="/whatsapp-image-20231126-at-1114-1@2x.png"
          />
          <h1 className="contact-us1">Contact us</h1>
          <div className="provide-feedback">
            <div className="book-your-free-container">
              <p className="book-your-free">
                Book your free illustration session now !!!
              </p>
              <p className="fill-the-form">
                {" "}
                Fill the form or call us on +91 8860914595
              </p>
            </div>
            <div className="booking-frame">
              <h1 className="or-fill-the-container" onClick={onORFILLTHEClick}>
                <p className="or">OR</p>
                <p className="fill-the-form1">FILL THE FORM</p>
              </h1>
            </div>
          </div>
        </div>
        <div className="location1" data-scroll-to="locationContainer">
          <div className="location-info">
            <h1 className="we-are-currently-container">
              <p className="we-are-currently-located-at">
                <b>We are currently located at</b>
              </p>
              <p className="united-india-apartments-mayur">
                <b>{` `}</b>
                <span>
                  United India Apartments, Mayur Vihar Extension, New Delhi,
                  Delhi - 110091
                </span>
              </p>
            </h1>
          </div>
          <img
            className="whatsapp-image-2023-11-28-at-1"
            loading="eager"
            alt=""
            src="/whatsapp-image-20231128-at-1304-2@2x.png"
            onClick={onWhatsAppImage20231128At1Click}
          />
        </div>
      </section>
      <section className="feedback-form">
        <div className="feedback2" data-scroll-to="feedbackContainer">
          <img
            className="whatsapp-image-2023-11-28-at-11"
            alt=""
            src="/whatsapp-image-20231128-at-1304-1@2x.png"
          />
          <h1 className="please-provide-your">PLEASE PROVIDE YOUR FEEDBACK</h1>
          <div className="frame-div">
            <div className="rating-component-parent">
              <div
                className="rating-component1"
                onClick={onRatingComponentContainerClick}
              >
                <img
                  className="rating-component-child"
                  loading="eager"
                  alt=""
                  src="/star-12.svg"
                  onClick={onStarClick}
                />
                <img
                  className="rating-component-item"
                  loading="eager"
                  alt=""
                  src="/star-13.svg"
                  onClick={onStar1Click}
                />
                <img
                  className="rating-component-inner"
                  loading="eager"
                  alt=""
                  src="/star-14.svg"
                  onClick={onStar2Click}
                />
                <img
                  className="star-icon"
                  loading="eager"
                  alt=""
                  src="/star-15.svg"
                  onClick={onStar3Click}
                />
                <img
                  className="rating-component-child1"
                  loading="eager"
                  alt=""
                  src="/star-16.svg"
                  onClick={onStar4Click}
                />
              </div>
              <h1 className="click-here" onClick={onCLICKHERETextClick}>
                CLICK HERE
              </h1>
            </div>
            <h1 className="your-opinion-matters">YOUR OPINION MATTERS TO US</h1>
          </div>
        </div>
      </section>
      <section className="united-india-apartments-wrapper">
        <div className="united-india-apartments1">
          <div className="design-1-parent">
            <img
              className="design-1-icon"
              loading="eager"
              alt=""
              src="/design-1@2x.png"
            />
            <div className="frame-parent1">
              <div className="united-india-apartments-mayur-wrapper">
                <h3 className="united-india-apartments2">
                  United India Apartments, Mayur Vihar Extension, New Delhi,
                  Delhi - 110091
                </h3>
              </div>
              <div className="phone-number">
                <div className="phone-no-91">Phone No. +91 8860914596</div>
              </div>
              <h3 className="follow-us1">Follow us :</h3>
            </div>
          </div>
          <div className="location-frame">
            <div className="feedback-frame">
              <img
                className="google-icon1"
                alt=""
                src="/google-1.svg"
                onClick={onGoogleIcon1Click}
              />
              <img
                className="linkedin-icon1"
                alt=""
                src="/linkedin.svg"
                onClick={onLinkedinIcon1Click}
              />
              <img
                className="group-icon1"
                alt=""
                src="/group-1.svg"
                onClick={onGroupIcon2Click}
              />
              <img
                className="github-icon1"
                alt=""
                src="/github-1.svg"
                onClick={onGitHubIcon1Click}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DESKTOPVIEW;
