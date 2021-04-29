import React from "react";

const ProjectsDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>Hello this is my project first</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Tanu </div>
          <span>2nd sepember, 2am</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectsDetails;
