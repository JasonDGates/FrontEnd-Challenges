import React from "react";
import "./SummaryPage.css";

const SummaryPage = () => {
  return (
    <div className="summary-container">
      <h1 className="summary-title">Front End Challenges</h1>
      <p className="summary-goal">
        Welcome to my Front End Challenges demo! This application showcases my
        ability to create React components and full web pages from scratch,
        emphasizing rapid iteration and development speed. All components and
        pages are styled with vanilla CSS, avoiding the use of any component
        libraries, and are responsive unless otherwise noted.
      </p>
      <ul className="summary-list">
        <li>Create React components from scratch</li>
        <li>Build full web pages without component libraries</li>
        <li>Showcase rapid development and iteration</li>
        <li>Use vanilla CSS for styling</li>
        <li>Mobile first responsive development</li>
      </ul>
      <p className="summary-instruction">
        Please use the navigation menu to view available demos.
      </p>
    </div>
  );
};

export default SummaryPage;
