"use client";

import React, { useState } from "react";
import Layout from "./components/LayoutM";
import "./styles/custom.css";

const tags = [
    "AI",
    "Natural Language Processing",
    "Computer Science",
    "Deep Learning",
    "Data Mining",
    "Machine Learning",
    "CyberSecurity",
];

export default function SearchPage() {
    const [keywordFilter, setKeywordFilter] = useState<string[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [descriptionAdded, setDescriptionAdded] = useState(false);

    const handleSend = () => {
        if (searchQuery.trim() !== "") {
            console.log("Searching for:", searchQuery);
        }
    };

    const handleAddDescription = () => {
        if (!descriptionAdded) {
            setDescriptionAdded(true);
        }
    };

    const handleRemoveDescription = () => {
        setDescriptionAdded(false);
    };

    return (
        <Layout>
            <h1 className="searchTitle">Search for Members</h1>

            <div className="center-message">Find Members for your project</div>
            <div className="relative">
                {!descriptionAdded && (
                    <button
                        className="Keywords"
                        onClick={handleAddDescription}
                    >
                        Add Project Description
                    </button>
                )}
                 {descriptionAdded && (
        <div className="description-tag">
            Project Description
            <button className="tag-close" onClick={handleRemoveDescription}>
                ✕
            </button>
        </div>
    )}

            </div>

            <div className="SearchSpace">
                <div className="SearchBar ">
                    <input
                        type="text"
                        placeholder="Find members here... "
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search "
                    />

                </div>
            </div>
        </Layout>
    );
}
