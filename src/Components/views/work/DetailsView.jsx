import React from 'react'
import styles from './DetailsView.module.css'
import ScramblingText from "@/Components/ui/ScramblingText";

const handleFilterChange = (category, filter, setFilter) => {
  if (filter === category) {
    setFilter(null);
  } else {
    setFilter(category);
  }
};

export default function DetailsView({ projects,categories, filter, setFilter }) {
  const [projectDisplayed, setProjectDisplayed] = React.useState(projects[0]);
  
  const setCurrentProjectView = (projectId) => {
    const project = projects.find((p) => p.id === projectId);
    setProjectDisplayed(project);
  };
  
  return (
    <div className={styles.grid}>
      <div className={styles.column_name}>
          <ScramblingText
            as="h1"
            text={projectDisplayed.title}
            trigger="inView"
          />
        </div>

        <div className={styles.column_project_list}>
          <ul className={styles.projects}>
            {projects.map((project) => (
              <li 
                key={project.id}
              >
                <button
                  // data-cursor="hover"
                  onClick={() => setCurrentProjectView(project.id)}
                  onMouseEnter={() => setCurrentProjectView(project.id)}
                  className={`${styles.project_item} ${
                    filter && !project.categories.includes(filter)
                      ? styles.project_item_filtered
                      : styles.project_item_active
                  }`}
                >
                  {project.title === projectDisplayed.title && (
                    <span className="arrow">→ </span>
                  )}
                  {project.title}
                </button>
              </li>
            ))}
          </ul>

          <div className={styles.categories}>
            {categories.map((category, index) => (
              <React.Fragment key={category}>
                <button
                  // data-cursor="hover"
                  className={`${styles.category_filter} ${
                    filter && !category.includes(filter)
                      ? styles.category_filter_filtered
                      : ""
                  } ${
                    projectDisplayed.categories.includes(category)
                      ? styles.category_filter_active
                      : ""
                  }`}

// FIX THIS - not working as expected, when hovering and having other filters cliked as in view on hover states and 

                  onClick={() =>
                    handleFilterChange(category, filter, setFilter)
                  }
                  // onMouseEnter={() =>
                  //   handleFilterChange(category, filter, setFilter)
                  // }
                  // onMouseLeave={() => 
                  //   handleFilterChange(category, filter, setFilter)
                  // }
                >
                  {category}
                </button>
                {categories.length - 1 !== index && (
                  <p className={styles.category_separator}>&nbsp;/&nbsp;</p>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className={styles.column_project_display}>
          {projectDisplayed && (
            <div className={styles.project_description}>
              {/* <h1>{projectDisplayed.title}</h1> */}
              <p>{projectDisplayed.description}</p>
            </div>
          )}

          <a href="/">
            See project <span className="arrow">→</span>
          </a>
          <img
            src={projectDisplayed.coverImage}
            alt={projectDisplayed.coverImageAlt}
            className={styles.cover_image}
          />
        </div>
    </div>
  )
}
