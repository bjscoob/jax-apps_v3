import React from "react";

class ABPage extends React.Component {
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
            id="aboutmeImg"
            src="https://jax-apps.com/images/aboutme1.png"
            width="100px"
            height="100px"
          />
          <hr />
        </div>
        <h1>
          <span style={{ color: "#3bb5d9" }}> Brandon</span>{" "}
          <span style={{ color: "#1FB18C" }}>Jackson </span>
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
          PAST
        </button>
        <div
          ref={this.hd1Ref}
          class="content"
          style={{ maxHeight: this.state.dropDown1 }}
        >
          <p>
            {" "}
            Growing up in the medium-ish town of Albany, Georgia, I have always
            had the creative spirit to go out and make something new. Many of my
            childhood days were made up of building forts, treehouses, and
            gadgets in the garage. Eventually I would get my first computer, and
            naturally my creativity flowed into the digital realm. My first
            projects were not so much coding, but rather graphic design and
            video editing. Helping my gaming friends promote their guilds, I
            knew I had a passion for delivering quality products to clients. As
            I transitioned to my college years, I realized I could do more than
            just graphics. I took a short break from the software side of
            things, and delved into many subjects involving hardware
            engineering, mathematics, biology, and psychology. Taste-testing
            those fields, I didn’t notice where my heart was aligned until my
            first programming course at BYU. Years went on and I continued
            building my coding skills. In December of 2020, I graduated from
            Liberty University Online (thanks to covid) with three major coding
            languages under my belt: Java, Python, and C#.{" "}
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
          PRESENT
        </button>
        <div
          ref={this.hd2Ref}
          class="content"
          style={{ maxHeight: this.state.dropDown2 }}
        >
          <p>
            Since graduating, I have explored different opportunities to help
            friends and colleagues bring their ideas to life. I have made
            applications to aid job-site functions, ecommerce businesses,and on
            profits. At this point in time, I am confident in establishing JAX
            APPS as a sole proprietorship. Hopefully, through this portal and
            good marketing strategy, I can build a network of reliable clients.
            Making friends in the industry is another big goal of mine in the
            present moment. My knowledge is still expanding, and I know there is
            a hidden wealth in the minds of others, not just the books. And of
            course there are major trials and speed bumps with starting a
            business: the legal and financial work comes to mind. I am still
            excited to move through those hurdles, as I know that will not be
            the deciding factor to a truly good business. Getting my name out
            and growing my skills are secondary, however. I am most interested
            in seeing what different facets of the world need help in tech. A
            simple software solution may be all they need to make the world a
            better place.{" "}
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
          FUTURE
        </button>
        <div
          ref={this.hd3Ref}
          class="content"
          style={{ maxHeight: this.state.dropDown3 }}
        >
          <p>
            {" "}
            The future is always fun to dream about - because it hasn’t happened
            yet! My goals for JAX APPS are to ultimately build it out of a sole
            proprietorship and into a small indie team at the most. In addition,
            the clients shall remain smaller-to-medium level businesses. I am a
            firm believer in work life balance, and keeping JAX APPS down to
            this scope will achieve just that. Leading a team requires respect
            for their needs and an ear that listens. And developing a group of
            people in IT that are truly people centric will shake the industry.
            Another personal goal of mine is to gain more knowledge in the study
            of artificial intelligence. As of now, that area of study is still
            in its infancy stages. As the decades go on, industry leaders are
            anticipating more breakthroughs in this technology - and I don’t
            want to miss out! I foresee JAX APPS holding a major part in some of
            these breakthroughs. And maybe one day, AI can help solidify the
            bridge between person and program.
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

export default ABPage;
