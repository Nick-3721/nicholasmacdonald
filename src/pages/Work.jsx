import React, { useState } from "react";
import styles from "./Work.module.css";
import { projects } from "@/utils/constants/projects";
import { categories } from "@/utils/constants/categories";
import DetailsView from "@/Components/views/work/DetailsView";



export default function Work() {
  const [viewMode, setViewMode] = useState("details"); // 'details', 'list', 'grid'
  const [filter, setFilter] = useState(null);
  

  console.log(`view mode is ${viewMode}`)

  return (
    <div className={styles.page}>
      <div className={`${styles.grid} ${styles[`${viewMode}_view`]}`}>
        <div className={styles.column_display_modes}>
          {/* <p>Details / List / Grid</p> */}
          <button onClick={() => setViewMode("details")}>Details</button>
          <p className={styles.filter_separator}>&nbsp;/&nbsp;</p>
          <button onClick={() => setViewMode("list")}>List</button >
          <p className={styles.filter_separator}>&nbsp;/&nbsp;</p>
          <button onClick={() => setViewMode("grid")}>Grid</button>
        </div>
        <DetailsView projects={projects} categories={categories} filter={filter} setFilter={setFilter} />
        {/* <GridView projects={projects}  /> */}
      </div>
    </div>
  );
}
