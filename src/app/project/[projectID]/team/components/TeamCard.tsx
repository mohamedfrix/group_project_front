// components/TeamCard.tsx
import React from "react";
import "../styles/TeamCard.css";

interface TeamCardProps {
  name: string;
  role: string;
  email: string;
  label?: string;

  borderColor?: string;
}

export default function TeamCard({
  name,
  role,
  email,
  label,
  borderColor = "#1e1e1f88", 
}: TeamCardProps) {
  return (
    <div className="team-card" style={{ borderColor }}>
      <div className="avatar" />
      <div className="info">
        <p className="name">{name}</p>
        <p className="role">{role}</p>
        <a href={`mailto:${email}`} className="email">{email}</a>
        {label && (
          <span className="badge" >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
