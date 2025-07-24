// src/components/TeamCard.tsx
import React from 'react';

interface TeamCardProps {
  name: string;
  email: string;
  github: string;
  image: string;
  bgColorClass: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  email,
  github,
  image,
  bgColorClass,
}) => {
  return (
    <div className={`team-card ${bgColorClass}`}>
      <div className="image-container">
        <img src={image} alt={name} className="team-image" />
      </div>
      <div className="team-name">{name}</div>
      <div className="team-email">{email}</div>
      <a
        href={github}
        className="team-github"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Profile
      </a>
    </div>
  );
};

export default TeamCard;
