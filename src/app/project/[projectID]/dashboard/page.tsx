"use client";

import Layout from "./components/LayoutM";
import { CheckCircle2, Edit2, Plus, Trash2, Pencil } from "lucide-react";
import "./styles/custom.css"
import HeaderSection from "./components/HeaderSection";
import React, { useState } from "react";

export default function DashboardSection() {
  const [description, setDescription] = useState(
    "AutoSummarizer is a Natural Language Processing (NLP) project that automatically generates short and meaningful summaries from long text documents. It helps users quickly understand the main ideas without reading the entire content. The tool uses basic NLP techniques like sentence ranking, keyword extraction, and frequency analysis to create extractive summaries."
  );
  const [editingDesc, setEditingDesc] = useState(false);

  const [isEditingDeadline, setIsEditingDeadline] = useState(false);
  const [deadline, setDeadline] = useState("2025-05-17");

  const [isEditingSteps, setIsEditingSteps] = useState(false);
  const [steps, setSteps] = useState([
    { text: "Define the research problem", done: false },
    { text: "Conduct a literature review", done: false },
    { text: "Formulate research objectives", done: false },
    { text: "Design the research methodology", done: false },
    { text: "Develop a research plan or proposal", done: false },
  ]);

  const toggleStep = (index: number) => {
    const updated = [...steps];
    updated[index].done = !updated[index].done;
    setSteps(updated);
  };

  const updateStepText = (index: number, text: string) => {
    const updated = [...steps];
    updated[index].text = text;
    setSteps(updated);
  };

  const deleteStep = (index: number) => {
    const updated = steps.filter((_, i) => i !== index);
    setSteps(updated);
  };

  const addStep = () => {
    setSteps([...steps, { text: "New Step", done: false }]);
  };

  const progress = Math.round(
    (steps.filter((s) => s.done).length / steps.length) * 100
  );

  return (
    <Layout>
      <main className="container">
        <HeaderSection />

        {/* Info Cards */}
        <div className="grid grid-3">
          <div className="card">
            <h3>Progress</h3>
            <div className="progress-bar">
              <div
                className="progress-bar-inner"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p>{progress}%</p>
          </div>

          <div className="card">
            <Pencil
              onClick={() => setIsEditingDeadline(!isEditingDeadline)}
              className="edit-icon"
            />
            <div className="Deadlinetitle">Deadline</div>

            {isEditingDeadline ? (
              <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="simple-input"
              />
            ) : (
              <p>
                {new Date(deadline).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}
          </div>

          <div className="card">
            <h3>Team</h3>
            <p>6 Members</p>
          </div>
        </div>

        {/* Description & Activity */}
        <div className="flex-row">
          <div className="flex-column">
            <div className="card">
              <div className="descriptionCnt">
                <h3>Description</h3>
                <Pencil
                  onClick={() => setEditingDesc(true)}
                  className="edit-icon"
                />
              </div>
              <div className="desc-header">
                {editingDesc ? (
                  <div
                    contentEditable
                    suppressContentEditableWarning={true}
                    onBlur={(e) => {
                      setDescription(e.currentTarget.textContent || "");
                      setEditingDesc(false);
                    }}
                    className="editable-box"
                  >
                    {description}
                  </div>
                ) : (
                  <div className="desc-display">
                    <p>{description}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="card">
              <h3>Most Important Keywords</h3>
              <ul>
                <div>
                  <CheckCircle2 className="check-icon green" /> Artificial
                  Intelligence
                </div>
                <div>
                  <CheckCircle2 className="check-icon green" /> Machine Learning
                </div>
                <div>
                  <CheckCircle2 className="check-icon green" /> Deep Learning
                </div>
              </ul>
            </div>
          </div>

          <div className="card activity">
            <h3>Project Structure</h3>
            <div className="ListStructure">
              {steps.map((step, i) => (
                <div key={i} className="step-item">
                  <input
                    type="checkbox"
                    checked={step.done}
                    onChange={() => toggleStep(i)}
                  />

                  {isEditingSteps ? (
                    <div
                      contentEditable
                      suppressContentEditableWarning={true}
                      onBlur={(e) =>
                        updateStepText(i, e.currentTarget.textContent || "")
                      }
                      className=" step-editable"
                    >
                      {step.text}
                    </div>
                  ) : (
                    <span className={`step-text ${step.done ? "done" : ""}`}>
                      {step.text}
                    </span>
                  )}

                  {isEditingSteps && (
                    <Trash2
                      className="trash-icon"
                      onClick={() => deleteStep(i)}
                    />
                  )}
                </div>
              ))}

              {isEditingSteps && (
                <button onClick={addStep} className="btn add-step">
                  + Add Step
                </button>
              )}
            </div>

            <button
              onClick={() => setIsEditingSteps(!isEditingSteps)}
              className="btn"
            >
              {isEditingSteps ? "Done" : "Edit"}
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
}
