import React, { Component } from "react";
import Carousel from "../common/carousel";

class Education extends Component {
  // state = {
  //   backgroundImage:
  //     "url(http://www.acesuon.com/images/18_19_cpp_bus_admin_cis.png)",
  //   backgroundPosition: "0% 0%"
  // };

  //gets passed to componentDidMount() & determines top btn visibility
  scrollFunction = () => {
    const mybutton = document.getElementById("myBtn");

    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  };

  // on Top btn click set document's scroll positon to 0
  topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  handleRedirect = e => {
    e.preventDefault();
    if (window.confirm("You're about to leave this page. Continue?")) {
      window.open("https://www.cpp.edu/");
    }
  };

  // handleMouseMove = e => {
  //   const { left, top, width, height } = e.target.getBoundingClientRect();
  //   const x = ((e.pageX - left) / width) * 100;
  //   const y = ((e.pageY - top) / height) * 13;
  //   this.setState({
  //     backgroundPosition: `${x}% ${y}%`
  //   });
  // };

  handleImageClick = e => {
    e.preventDefault();
    if (window.confirm("You're about to leave this page. Continue?")) {
      window.open("static/media/cpp-bus-admin-cis.cd6ccff6.png");
    }
  };

  //detects and call scrollFunction on window scroll
  componentDidMount() {
    window.addEventListener("scroll", this.scrollFunction);
  }

  render() {
    return (
      <div className="my-education-container">
        <div className="my-education-container-2">
          <div className="center-page" id="school-title">
            <div id="school-title-cpp">C P P</div>
            <h2>California State Polytechnic University, Pomona</h2>
          </div>
          <div className="section-carousel">
            <Carousel items={31} />
          </div>
          <div>
            <div className="section-cpp-overview">
              <h2 id="section-cpp-overview-header">Cal Poly Pomona Overview</h2>
            </div>
            <div className="education-gradientBG-container">
              <div className="gradientBG"></div>
            </div>
          </div>
          <div className="align-page section-first">
            <div className="section-container bg-screen">
              <h2 className="section-header">About CPP</h2>
              <p className="section-content">
                California State Polytechnic University, Pomona is a public
                polytechnic university in Pomona, California. It is one of two
                polytechnic universities in the California State University
                system.
                <br />
                <br />
                Cal Poly Pomona is among the best public universities in the
                West and is nationally ranked for helping students achieve
                economic success. As an inclusive polytechnic university, we
                cultivate success through experiential learning, discovery and
                innovation. Our graduates are ready to succeed in the
                professional world on Day 1.
                <br />
                <br />
                Our history and geography are unlike any other university in the
                region. Nowhere else can students ride an Arabian horse,
                practice on a Steinway piano, bring a new product to market, and
                build a liquid-fueled rocket!
              </p>
              <img
                className="section-image"
                src={require("../resources/images/cpp/cpp-collage.png")}
                alt=""
              />
            </div>
          </div>
          <div className="align-page section-second">
            <div className="section-container bg-screen">
              <h2 className="section-header header-right">
                Mission, Vision, and Values
              </h2>
              <img
                className="section-image"
                src={require("../resources/images/cpp/cpp-mission-vision-value.png")}
                alt=""
              />
              <p className="section-content">
                Our mission is to cutivate success through a diverse culture of
                experiential learning, discovery, and innovation. Our vision is
                to be the model for an inclusive polytechnic university that
                inspires creativity and innovation, embraces local and global
                challenges, and transforms lives.
                <br />
                <br />
                We value academic excellence, student learning and success,
                inclusivity and diversity, community engagement, social and
                environmental responsibility and most importanly, learn by
                doing.
                <br />
                <br />
                The meaning of polytechnic is "skilled in many arts." At Cal
                Poly Pomona we learn by doing, weaving technology and embrace
                hands-on learning experiences, bring textbook concepts to life
                in a technologically advanced and multicultural world. All of
                our academic disciplines embrace the teaching of theory through
                application. We take a multi-faceted approach to problem
                solving, looking at a situation from all possible angles.
              </p>
            </div>
          </div>
          <div className="align-page section-third">
            <div className="section-container bg-screen">
              <h2 className="section-header">Why CPP</h2>
              <p className="section-content">
                Cal Poly Pomona is one of only two polytechnic universities of
                the 23 California State University campuses and 11 in the
                nation.
                <br />
                <br />
                We choose our faculty based on their success and experience in
                the real world, as well as their ability to teach and
                communicate. Their strong connection to the professional world
                maintains the quality and currency of their teaching and gives
                students direct link to rewarding internships and career
                opportunities.
                <br />
                <br />
                When it comes to quality education, affordability and career
                prospects for graduates, Cal Poly Pomona consistently ranks
                among the best universities in the country. Each ranking
                category is a snapshot of achievement, but taken collectively,
                these snapshots provide a picture of a diverse, learn-by-doing
                university whose students graduate with the skills needed to
                succeed in a dynamic, evolving work environment.
              </p>
              <img
                className="section-image"
                src={require("../resources/images/cpp/cpp-why.png")}
                alt=""
              />
            </div>
          </div>
          <div className="align-page section-fourth">
            <div className="section-container bg-screen">
              <h2 className="section-header header-right">Heritage</h2>
              <img
                className="section-image"
                src={require("../resources/images/cpp/cpp-collage-heritage.png")}
                alt=""
              />
              <p className="section-content">
                Cal Poly Pomona opened on Sept. 15, 1938, with an all-male
                enrollment of 110 students as the Voorhis Unit of California
                State Polytechnic College in San Luis Obispo. It was located on
                the 150-acre San Dimas site of the former Voorhis School for
                Boys. In 1956, 508 students and 44 faculty and staff moved from
                San Dimas to the Kellogg campus. In a first for the all-male
                campus, 329 women joined the student body in 1961. The Pomona
                campus separated from the San Luis Obispo campus in 1966 and
                became California State Polytechnic College, Kellogg Campus.
                University status was granted in 1972.
                <br />
                <br />
                Today, the university is part of the 23-campus California State
                University system. Cal Poly Pomona has about 24,000 students and
                2,600 faculty and staff.
              </p>
            </div>
          </div>
          <div className="section-cpp-overview-end">
            <p>
              For more information about Cal Poly Pomona, please visit their
              official website at{" "}
              <a
                href="https://www.cpp.edu/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={this.handleRedirect}
              >
                https://www.cpp.edu/
              </a>
              .
            </p>
          </div>
          <div className="section-cis-overview">
            <div className="section-overview" style={{ paddingTop: "150px" }}>
              <h2 id="section-cis-overview-header">
                Business Administration - Computer Information Systems Overview
              </h2>
            </div>
            <div className="education-gradientBG-container-purple">
              <div className="gradientBG"></div>
            </div>
          </div>
          <div className="section-cis-body">
            <div className="align-page container">
              <div className="section-cis-container bg-dark">
                <h2 className="section-cis-header">
                  Computer Information Systems
                </h2>
                <p>
                  Computer Information Systems(CIS) is an option for the degree
                  of business administration.
                  <br />
                  <br />
                  CIS emphasizes solving business problems with computing
                  technology. This can be the development of strategic
                  information systems, implementation of enterprise-wide systems
                  or creating Web 2.0 applications.
                  <br />
                  <br />
                  The CIS program has a “learn-by-doing” approach to teaching in
                  which students participate in technology-based projects
                  through service learning, internships and a mandatory group
                  Senior Project with industry.
                  <br />
                  <br />
                  Below is the 2018-2019 CIS curricular sheet. Highlighted in
                  the red box are the career core classes.
                </p>
              </div>
            </div>
          </div>
          <div>
            <figure
              className="container"
              // onMouseMove={this.handleMouseMove}
              // style={this.state}
            >
              <img
                id="admin-cis-image"
                src={require("../resources/images/cpp-bus-admin-cis.png")}
                alt="Hello CIS!"
                onClick={this.handleImageClick}
              />
            </figure>
          </div>
          <div className="section-cis-body">
            <div className="align-page container">
              <div className="section-cis-container bg-dark">
                <h2
                  className="section-cis-header"
                  id="section-cis-breakdown-header"
                >
                  Breakdown
                </h2>
                <div>
                  <p>
                    The curricular sheet above contains the complete detail
                    about the various classes a business major student has to
                    take. Here's the finer details about the CIS track.
                  </p>
                  <div>
                    <h3 className="subheader">CIS core series</h3>
                    <p className="subcontent">
                      The cis core classes cover a broad range of computer
                      technical skills from basic to advanced.
                    </p>
                    <div>
                      <h4 className="subheader">CIS 1000s and 2000s</h4>
                      <p className="subcontent">
                        The CIS 1000s level classes teach baisc technical
                        skills. At the 1000s level I mastered advanced
                        techniques with Microsoft Office softwares such as Word,
                        Excel, Powerpoint, and Access. At the 2000s level I
                        learned about the various hardware components of a
                        computer like RAM, storage drives, CPU, and GPU. In
                        addition, I have also studied contemporary computer
                        system fundamentals such as File Management, User
                        Interface, and Device Management for Windows, and
                        explosure to IT Infrastructure.
                        <br />
                        <br />
                        Class Spotlight
                        <br />
                        <br />
                        CIS 1010 - Introduction to Personal Computing <br />
                        CIS 2650 - Contemporary Operating Systems <br />
                        CIS 2670 - IT Infrastructure <br />
                      </p>
                    </div>
                    <div>
                      <h4 className="subheader">CIS 3000s and 4000s</h4>
                      <p className="subcontent">
                        Here at the 3000s and 4000s levels is where things get
                        intense. At this level I learned more complex
                        computational structures like database design and
                        developement, and systems analysis and design. In
                        addition, I've studied Object-Oriented Programming for
                        business with Java, using an integrated developement
                        environment called Netbeans.
                        <br />
                        <br />
                        Follow up with Web Developement which include
                        Client-side Web Development and Server-side Web
                        Development. The client-side web developement is an
                        equivalent introduction to front-end programming, and
                        server-side to back-end programming. In client-side I
                        learned HTML, CSS and Javascript as a fundamental for
                        responsive web design. On the server-side I learned PHP,
                        with Apache server and phpMyAdmin database
                        implementation, and ASP.net with MySQL database
                        implementation.
                        <br />
                        <br />
                        Some other classes worth mentioning include e-commerce
                        using the server-side technologies, and android mobile
                        programming using Java and XML data format.
                        <br />
                        <br />
                        Class Spotlight
                        <br />
                        <br />
                        CIS 3050 - Database Design and Developement <br />
                        CIS 3090 - Object-Oriented Programming for Business
                        <br />
                        CIS 3110 - Client-side Web Developement
                        <br />
                        CIS 3150 - Systems Analysis and Design
                        <br />
                        CIS 4250 - E-Commerce Application Developement
                        <br />
                        CIS 4260 - Server-side Web Developement
                        <br />
                        CIS 4280 - Android Mobile Application Developement
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section-cis-overview">
            <div className="section-overview" style={{ paddingTop: "150px" }}>
              <h2 id="section-self-taught-header">Self-Taught Technologies</h2>
            </div>
            <div className="education-gradientBG-container-purple">
              <div className="gradientBG"></div>
            </div>
          </div>
          <div className="section-cis-body">
            <div className="align-page container">
              <div className="section-cis-container bg-dark">
                <h2 className="section-cis-header">Interests and Hobbies</h2>
                <p>
                  After graduation I find myself with more free time on my hand,
                  so I decided to explore my interests and hobbies. I discovered
                  many new technologies that I would like to learn and here's a
                  list of what I've studied.
                </p>
                <div className="front-end">
                  <h3 className="subheader">Front-end Technologies</h3>
                  <p className="subcontent">
                    ES6
                    <br />
                    ReactJS
                  </p>
                </div>
                <div className="back-end">
                  <h3 className="subheader">Back-end Technologies</h3>
                  <p className="subcontent">
                    NodeJS
                    <br />
                    Python
                  </p>
                </div>
                <div className="other">
                  <h3 className="subheader">Other Technologies</h3>
                  <p className="subcontent">
                    Unity Game Developement with C#
                    <br />
                    Video Recording and Editing with OBS, Audacity, GIMP, and
                    Davinci Resolve
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: "white" }}>
            <div className="gradientBG-dark"></div>
          </div>
          <button onClick={this.topFunction} id="myBtn" title="Go to top">
            <i
              className="fa fa-chevron-up"
              style={{
                fontSize: "24px"
              }}
            ></i>
          </button>
          <div className="timeline">
            <ul className="timeline-ul">
              <li className="timeline-items">
                <a href="#section-cpp-overview-header">CPP Overview</a>
              </li>
              <li className="timeline-items">
                <a href="#section-cis-overview-header">CIS Overview</a>
              </li>
              <li className="timeline-items">
                <a href="#section-cis-breakdown-header">CIS Breakdown</a>
              </li>
              <li className="timeline-items">
                <a href="#section-self-taught-header">Self-Taught</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
