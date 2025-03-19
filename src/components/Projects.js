import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8888/.netlify/functions/api/projects') 
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p><strong>Author:</strong> {project.author}</p>  
          <p><strong>Languages:</strong> {project.languages.join(', ')}</p>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noreferrer noopener" 
            className="project-link"
            aria-label={`View ${project.title} on GitHub`}
          >
            View Project on GitHub
          </a>
          <div className="project-details">
            <strong>Details:</strong>
            <ul>
              {project.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  ); 
};

export default Projects;
