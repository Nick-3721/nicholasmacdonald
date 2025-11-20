import React, { useState } from "react";
import styles from "./Work.module.css";
import { projects } from "@/utils/constants/projects";
import { categories } from "@/utils/constants/categories";
import DetailsView from "@/Components/views/work/DetailsView";
import GridView from "@/Components/views/work/GridView";


export default function Work() {
  const [viewMode, setViewMode] = useState("grid"); // 'details', 'list', 'grid'
  const [filter, setFilter] = useState(null);

  return (
    <div className={styles.page}>
        <div className={styles.toggle_container}>
          <button onClick={() => setViewMode("details")}>Details</button>
          <p className={styles.filter_separator}>&nbsp;/&nbsp;</p>
          <button onClick={() => setViewMode("list")}>List</button >
          <p className={styles.filter_separator}>&nbsp;/&nbsp;</p>
          <button onClick={() => setViewMode("grid")}>Grid</button>
        </div>
        { viewMode === "details" && <DetailsView projects={projects} categories={categories} filter={filter} setFilter={setFilter} />}
        { viewMode === "grid" && <GridView projects={projects}/>}
    </div>
  );
}
