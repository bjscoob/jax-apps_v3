import React from "react";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropDown1: "0px",
      dropDown2: "0px",
      dropDown3: "0px",
      dropDown4: "0px",
      recentCaller: 0
    };
    this.hd1Ref = React.createRef();
    this.hd2Ref = React.createRef();
    this.hd3Ref = React.createRef();
    this.hd4Ref = React.createRef();
  }

  render() {
    return (
      <div>
        <div id="bannerGrid">
          <hr />
          <img
            alt="circleImg"
            id="circleImg"
            src="https://jax-apps.com/images/ja_house.svg"
            width="100px"
            height="100px"
          />
          <hr />
        </div>
        <h1>
          Welcome to<span style={{ color: "#3bb5d9" }}> Planet</span>{" "}
          <span style={{ color: "#1FB18C" }}>JAX </span>
        </h1>

        <button
          type="button"
          class="collapsible"
          onClick={() =>
            this.setState({
              recentCaller: this.state.dropDown1 === "0px" ? 1 : 0,
              dropDown1: this.state.dropDown1 === "0px" ? "800px" : "0px"
            })
          }
        >
          Who?
        </button>
        <div
          ref={this.hd1Ref}
          class="content"
          style={{ maxHeight: this.state.dropDown1 }}
        >
          <p>
            {" "}
            JAX Apps is a sole proprietorship, owned by Brandon Jackson, whose
            mission is to help small businesses thrive and grow in this rampant
            world of technology.{" "}
          </p>
        </div>

        <button
          type="button"
          class="collapsible"
          onClick={() =>
            this.setState({
              recentCaller: this.state.dropDown2 === "0px" ? 2 : 0,
              dropDown2: this.state.dropDown2 === "0px" ? "800px" : "0px"
            })
          }
        >
          What?
        </button>
        <div
          ref={this.hd2Ref}
          class="content"
          style={{ maxHeight: this.state.dropDown2 }}
        >
          <p>
            Services range from IT consultations to building new, cutting-edge
            mobile and web applications.{" "}
          </p>
        </div>

        <button
          type="button"
          class="collapsible"
          onClick={() =>
            this.setState({
              recentCaller: this.state.dropDown3 === "0px" ? 3 : 0,
              dropDown3: this.state.dropDown3 === "0px" ? "800px" : "0px"
            })
          }
        >
          Why?
        </button>
        <div
          ref={this.hd3Ref}
          class="content"
          style={{ maxHeight: this.state.dropDown3 }}
        >
          <p>
            {" "}
            How many people in IT have you known to just do what's required and
            leave you with a product FULL of bugs? My goal is to change the
            interpersonal behaviors of the IT industry. Good works are rooted in
            good communication and collaboration.
          </p>
        </div>
        <button
          type="button"
          class="collapsible"
          onClick={() =>
            this.setState({
              recentCaller: this.state.dropDown4 === "0px" ? 4 : 0,
              dropDown4: this.state.dropDown4 === "0px" ? "800px" : "0px"
            })
          }
        >
          How?
        </button>
        <div
          ref={this.hd4Ref}
          class="content"
          style={{ maxHeight: this.state.dropDown4 }}
        >
          <p>
            I take the time to figure out the learning styles of my clients,
            what their needs are, and the end product they want to achieve.
            Process diagrams, scenarios, and routine checkups are some of the
            few tools I use to keep a project moving forward proactively. And
            ultimately, the job ain’t done without your stamp of approval.
            Happen to have an idea in mind? Let's take the first step!
          </p>
        </div>
      </div>
    );
  }
  componentDidUpdate() {
    switch (this.state.recentCaller) {
      case 1:
        setTimeout(() => {
          this.hd1Ref.current.scrollIntoView({
            alignToTop: "false",
            behavior: "smooth",
            block: "end"
          });
        }, 500);
        break;

      case 2:
        setTimeout(() => {
          this.hd2Ref.current.scrollIntoView({
            alignToTop: "false",
            behavior: "smooth",
            block: "end"
          });
        }, 500);
        break;

      case 3:
        setTimeout(() => {
          this.hd3Ref.current.scrollIntoView({
            alignToTop: "false",
            behavior: "smooth",
            block: "end"
          });
        }, 500);
        break;

      case 4:
        setTimeout(() => {
          this.hd4Ref.current.scrollIntoView({
            alignToTop: "false",
            behavior: "smooth",
            block: "end"
          });
        }, 500);
        break;

      default:
        var lastOpen = 0;
        if (this.state.dropDown1 === "800px") {
          lastOpen = 1;
        }
        if (this.state.dropDown2 === "800px") {
          lastOpen = 2;
        }
        if (this.state.dropDown3 === "800px") {
          lastOpen = 3;
        }
        if (this.state.dropDown4 === "800px") {
          lastOpen = 4;
        }
        switch (lastOpen) {
          case 1:
            setTimeout(() => {
              this.hd1Ref.current.scrollIntoView({
                alignToTop: "false",
                behavior: "smooth",
                block: "end"
              });
            }, 500);
            break;

          case 2:
            setTimeout(() => {
              this.hd2Ref.current.scrollIntoView({
                alignToTop: "false",
                behavior: "smooth",
                block: "end"
              });
            }, 500);
            break;

          case 3:
            setTimeout(() => {
              this.hd3Ref.current.scrollIntoView({
                alignToTop: "false",
                behavior: "smooth",
                block: "end"
              });
            }, 500);
            break;

          case 4:
            setTimeout(() => {
              this.hd4Ref.current.scrollIntoView({
                alignToTop: "false",
                behavior: "smooth",
                block: "end"
              });
            }, 500);
            break;
          default:
            break;
        }
        return;
    }
  }
}
export default HomePage;
