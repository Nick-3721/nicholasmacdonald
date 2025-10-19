import React, { useState } from "react";
import ScramblingText from "../Components/ScramblingText";

import styles from "./ProjectList.module.css";

const projects = [
  {
    id: 1,
    title: "Animations",
    description: "Description for project one.",
    categories: ["Animation", "Illustration", "3D"],
  },
  {
    id: 2,
    title: "Omakese",
    description: "Description for project one.",
    categories: ["Illustration", "Graphic Design", "Art Direction"],
  },
  {
    id: 3,
    title: "Film photography",
    description: "Description for project one.",
    categories: ["Photography", "Art Direction"],
  },
  {
    id: 4,
    title: "Digital photography",
    description: "Description for project one.",
    categories: ["Photography", "Art Direction"],
  },
  {
    id: 5,
    title: "Travel photography",
    description: "Description for project two.",
    categories: ["Photography", "Art Direction"],
  },
  {
    id: 6,
    title: "Creative coding",
    description: "Description for project two.",
    categories: ["Web Development", "Motion", "Animation", "3D", "Art Direction"],
  },
  {
    id: 7,
    title: "Orbs",
    description: "Description for project two.",
    categories: ["Animation", "Illustration", "3D", "Graphic Design", "Art Direction", "3D"],
  },
  {
    id: 8,
    title: "SportingCareers",
    description: "Description for project two.",
    categories: ["Web Development", "UX UI Design", "Branding"],
  },
  {
    id: 9,
    title: "Your World Careers",
    description: "Description for project three.",
    categories: ["Web Development", "UX UI Design", "Branding"],
  },
  {
    id: 10,
    title: "Breeze Workforce Solutions",
    description: "Description for project three.",
    categories: ["Web Development", "UX UI Design", "Branding"],
  },
  {
    id: 11,
    title: "Your World",
    description: "Description for project three.",
    categories: ["Web Development", "UX UI Design", "Branding", "Graphic Design", "Art Direction", "Motion"],
  },
  {
    id: 12,
    title: "3D work",
    description: "Description for project three.",
    categories: ["Animation", "3D", "Motion"],
  },
  {
    id: 15,
    title: "Posters",
    description: "Description for project one.",
    categories: ["Graphic Design", "Illustration"],
  },
];

const categories = [
  "Animation",
  "Web Development",
  "Photography",
  "Graphic Design",
  "UX UI Design",
  "Illustration",
  "Branding",
  "Art Direction",
  "Motion",
  "3D",
];





const handleFilterClick = (category, filter, setFilter) => {
  if (filter === category) {
    setFilter(null);
  } else {
    setFilter(category);
  } 
};

export default function ProjectList() {
  const [projectDisplayed, setProjectDisplayed] = React.useState(projects[0]);
  const [filter, setFilter] = useState(null);

  const setCurrentProjectView = (projectId) => {
    const project = projects.find((p) => p.id === projectId);
    setProjectDisplayed(project);
  };
  console.log(filter);

  return (
    <div className={styles.page}>
      <div className={styles.grid}>
        <div className={styles.column1}>
          <ul>
            {projects.map((project) => (
              <li
                key={project.id}
                onClick={() => setCurrentProjectView(project.id)}
                style={{ 
                  // opacity: filter && !project.categories.includes(filter) ? "60%" : "100%", cursor: "pointer",

                  // opacity: projectDisplayed.id === project.id ? "100%" : "60%", cursor: "pointer",
                  // textDecoration: filter && !project.categories.includes(filter) ? "line-through" : "none",

                  opacity: filter && !project.categories.includes(filter) ? "50%" : "100%", cursor: "pointer",

                }}
              >
                {project.title === projectDisplayed.title ? `→ ${project.title}` : project.title}
              </li>
            ))}
          </ul>

          <div >
            {categories.map((category, index) => (
              <React.Fragment key={category}>
              <p
                style={{ 
                  display: "inline-flex",
                  lineHeight: "1.5em",
                  opacity: filter && !category.includes(filter) ? "60%" : "100%", cursor: "pointer", 
                  textDecoration: projectDisplayed.categories.includes(category) ? "underline" : "none",

                  // textDecoration: filter && !category.includes(filter) ? "line-through" : "none",
                  // opacity: projectDisplayed.categories.includes(category) && !category.includes(filter) ? "60%" : "100%", cursor: "pointer", 
                }}
                onClick={() => handleFilterClick(category, filter, setFilter)}
              >{category}
              </p>
              <p
                style={{ display: "inline-flex", paddingLeft: "4px", paddingRight: "4px" }}
              >&nbsp; 
                {categories.length - 1 !== index && "/"} 
                &nbsp;</p>
              </React.Fragment>
            ))}
          </div>


        </div>
        <div className={styles.column2}>
          {projectDisplayed && (
            <div>
              {/* <h1>{projectDisplayed.title}</h1> */}
              <ScramblingText as="h1" text={projectDisplayed.title} trigger="inView" />
              <p>{projectDisplayed.description}</p>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}
