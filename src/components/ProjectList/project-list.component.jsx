import React from 'react'

import '../../App.css';

class ProjectList extends React.Component {
  createProjectListItem(project) {
    console.log('hit once')
    let byline = project.project_byline;
    let client = project.project_client;
    return (
      
      <li key={"project-" + project.id}>
        <a to={"/projects/" + project.slug}>
          <h3 className="projectlist--client">{client}</h3>
          <h4 className="projectlist--byline">{byline}</h4>
        </a>
      </li>
    );
  }
  render() {
    return (
      <div className="project-list">
        <ul className="menu vertical">
          {/* {this.props.active ? this.props.projects.map(this.createProjectListItem) : null} */}

          {this.props.active ? this.createProjectListItem(this.props.projects[this.props.index]) : null}
        </ul>
      </div>
    );
  }
}

export default ProjectList;