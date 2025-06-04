import React from "react";
import "../styles/header.css";

export default function HeaderSection() {
  return (
    <div className="header-container">
      {/* Header */}
      <div className="header">
        <h1 className="title">Neural Networks for NLP</h1>
        <span className="status">In Progress</span>
      </div>

      {/* Tags */}
      <div className="tags">
        {["AI", "Natural Language Processing", "Computer Science"].map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}
