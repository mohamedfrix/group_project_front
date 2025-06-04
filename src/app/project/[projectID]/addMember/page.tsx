"use client";
import React, { useState } from "react";
import Layout from "./components/LayoutM";
import "./styles/custom.css"

export default function AddMemberPage() {
  const [member, setMember] = useState({
    username: "",
    email: "",
    role: "",
    note: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Member added:", member);
    // Optionally reset the form
    setMember({ username: "", email: "", role: "", note: "" });
  };

  return (
    <Layout>
      <h1 className="AddTitle">Add New Member to the Team</h1>
      <div className="addPageHeader">
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Member Account */}
          <div className="Box">
            <div className="labeladd">Member Account</div>
            <input
              name="member"
              value={member.username}
              onChange={handleChange}
              required
              className="member"
            />
          </div>

          {/* Email */}
          <div className="Box">
            <div className="labeladd">Email (optional)</div>
            <input
              name="email"
              value={member.email}
              onChange={handleChange}
              type="email"
              className="mail"
            />
          </div>

          {/* Role */}
          <div className="Box">
            <div className="labeladd">Role</div>
            <select
              name="role"
              value={member.role}
              onChange={handleChange}
              required
              className="roole"
            >
              <option value="">Select role</option>
               <option value="Member">Member</option>
              <option value="Manager">Manager</option>
              <option value="Reviewer">Reviewer</option>
              <option value="Assistant">Assistant</option>
              <option value="Leader">Leader</option>
              <option value="Supervisor">Supervisor</option>
            </select>
          </div>

          {/* Note */}
          <div className="Box">
            <div className="labeladd">Note (optional)</div>
            <textarea
              name="note"
              value={member.note}
              onChange={handleChange}
              rows={3}
              className="note"
            />
          </div>

          {/* Submit */}
          <div className="submit">
            <button type="submit" className="Submitbutton">
              Add Member
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
