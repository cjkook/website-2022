import React from "react";

import ProjectList from "../ProjectList/project-list.component";
import projects from "../../projects"
import "../../App.css";

class ProjectCategory extends React.Component {
  constructor(props) {
    super(props);

    this.setActive = this.setActive.bind(this);

    this.state = {
      projects: [],
    };
  }
  componentWillMount() {
    // this.getProjects(); // Codepen switched to HTTPS, so I have to load JSON manually instead of the json-generator
    this.setState({
      projects: projects
    });
  }
  // getProjects() {
  //   let catid = this.props.cat.id;
  //   let url = "http://beta.json-generator.com/api/json/get/EyrhxmRVz";
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       this.setState({ projects: json });
  //     });
  // }
  setActive() {
    console.log(this.props.Index)
    this.props.handleClick(this.props.Index);
  }
  getWidth(isActive) {
    let w = !isActive ? "calc(20vw - 20px)" : "200px";
    return w;
  }
  render() {
    let { active, focused, shiftLeft, isLast } = this.props;
    
    let styles = {
      container: {
        transform: (function () {
          return active
            ? "scale(1.1) translate3d(0, 0, 0)"
            : "scale(1) translate3d(0, 0, 0)";
        })(),
      },
      item: {
        transform: (function () {
          let direction = shiftLeft ? "-" : "";
          let transform =
            focused && !active
              ? "translate3d(" + direction + "90%, 0, 0)"
              : "translate3d(0, 0, 0)";
          return transform;
        })(),
      },
      background: {
        background:
          "url(" + this.props.cat.thumbnail + ") no-repeat center center",
        backgroundSize: "cover",
        height: "500px",
        width: this.getWidth(active),
      },
    };
    let classes = active ? "isActive" : "";
    classes = (isLast ? " isLast" : "") + " " + classes;
    // let classes = {
    //   category: true,
    //   isActive: active,
    //   isLast,
    //   shiftLeft,
    // };
    return (
      <li className={classes} style={styles.item}>
        <div className="category--content">
          <h2>{this.props.cat.name}</h2>
          <ProjectList projects={this.state.projects} index={this.props.Index} active={active}/>
        </div>
        <div
          className="category--image-container"
          onClick={this.setActive}
          style={styles.container}
        >
          <div className="category--image" style={styles.background}></div>
        </div>
        <div className="category--name">
          <h6>{this.props.cat.name}</h6>
        </div>
        <div className="category--closeButton">
          <a href="#">Back</a>
        </div>
      </li>
    );
  }
}

// let classNames = () => {
//   "use strict";
//   function e() {
//     for (var r = [], o = 0; o < arguments.length; o++) {
//       var f = arguments[o];
//       if (f) {
//         var i = typeof f;
//         if ("string" === i || "number" === i) r.push(f);
//         else if (Array.isArray(f)) r.push(e.apply(null, f));
//         else if ("object" === i)
//           for (var t in f) n.call(f, t) && f[t] && r.push(t);
//       }
//     }
//     return r.join(" ");
//   }
//   var n = {}.hasOwnProperty;
//   // window.classNames = e
// };

export default ProjectCategory;

// ORIGINAL SCRIPTS
// ! function() {
//   "use strict";
//   function e() {
//       for (var r = [], o = 0; o < arguments.length; o++) {
//           var f = arguments[o];
//           if (f) {
//               var i = typeof f;
//               if ("string" === i || "number" === i) r.push(f);
//               else if (Array.isArray(f)) r.push(e.apply(null, f));
//               else if ("object" === i)
//                   for (var t in f) n.call(f, t) && f[t] && r.push(t)
//           }
//       }
//       return r.join(" ")
//   }
//   var n = {}.hasOwnProperty;
//   "undefined" != typeof module && module.exports ? module.exports = e : "function" == typeof define && "object" == typeof define.amd && define.amd ? define("classnames", [], function() {
//       return e
//   }) : window.classNames = e
// }();
// //# sourceMappingURL=index.min.js.map
