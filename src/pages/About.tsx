import React from 'react';
import TeamCard from '../components/TeamCard';
import '../team.css';

const teamData = [
  {
    name: 'Victor Kim',
    email: 'sangmu.kim@gmail.com',
    github: 'https://github.com/starsang45',
    linkedin: 'https://www.linkedin.com/in/victorsang/',
    image: '/assets/team/victor.png',
    bgColorClass: 'card-yellow',
  },
  {
    name: 'Cate Profir',
    email: 'example2@example.com',
    github: 'https://github.com/cateprofir13',
    linkedin: 'https://linkedin.com/in/cateprofir13',
    image: '/assets/team/cat.jpg',
    bgColorClass: 'card-blue',
  },
  {
    name: 'Seung-Taek Oh',
    email: 'example3@example.com',
    github: 'https://github.com/ST-byte441',
    linkedin: 'https://linkedin.com/in/seungtaekoh',
    image: '/assets/team/cat.jpg',
    bgColorClass: 'card-green',
  },
  {
    name: 'João Morgado',
    email: 'jmrmorgado@gmail.com',
    github: 'https://github.com/j-morgado',
    linkedin: 'https://www.linkedin.com/in/morgadojoao/',
    image: '/assets/team/joao.jpg',
    bgColorClass: 'card-purple',
  },
];

const About: React.FC = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <h2 className="section-title">About</h2>
        <p>
          Waviz is an open-source audio visualization library built with React and Web Audio API.
          It empowers developers to create customizable, real-time visual experiences for audio data.
        </p>
        <p>
          This project is developed as part of the Codesmith open source program and focuses on both flexibility and performance.
        </p>
      </section>

      <section className="team-section">
        <h2 className="section-title">Meet the Team</h2>
        <div className="team-grid">
          {teamData.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              email={member.email}
              github={member.github}
              linkedin={member.linkedin}
              image={member.image}
              bgColorClass={member.bgColorClass}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
