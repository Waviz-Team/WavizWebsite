import React from 'react';

interface TeamCardProps {
  name: string;
  email: string;
  github: string;
  linkedin?: string;
  image: string;
  bgColorClass: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  email,
  github,
  linkedin,
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
      {linkedin && (
        <a
          href={linkedin}
          className="team-linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn Profile
        </a>
      )}
    </div>
  );
};

export default TeamCard;
