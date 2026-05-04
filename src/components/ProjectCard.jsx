function ProjectCard({ project }) {
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  )
}

export default ProjectCard