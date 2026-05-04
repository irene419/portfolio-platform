import { useState } from "react"

import Navbar from "./components/Navbar"
import ProjectList from "./components/ProjectList"
import projectsData from "./data/projects"

function App() {
  const [projects, setProjects] = useState(projectsData)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  // ADD PROJECT FUNCTION
  function handleAddProject(e) {
    e.preventDefault()

    const newProject = {
      id: Date.now(),
      title: title,
      description: description
    }

    // IMPORTANT: create NEW array (React rule)
    setProjects([...projects, newProject])

    setTitle("")
    setDescription("")
  }

  return (
    <div>
      <Navbar />

      <h1>My Projects</h1>

      {/* SEARCH IS STILL HERE (from previous step) */}
      {/* If yours exists, keep it */}

      {/* FORM */}
      <form onSubmit={handleAddProject} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Project title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Project description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Add Project</button>
      </form>

      <ProjectList projects={projects} />
    </div>
  )
}

export default App