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
    email: 'cate.profir@gmail.com',
    github: 'https://github.com/cateprofir13',
    linkedin: 'https://www.linkedin.com/in/cate-profir/',
    image: '/assets/team/cate.jpeg',
    bgColorClass: 'card-blue',
  },
  {
    name: 'Seung-Taek Oh',
    email: 'seungtaekoh5@gmail.com',
    github: 'https://github.com/ST-byte441',
    linkedin: 'http://www.linkedin.com/in/st-oh',
    image: '/assets/team/seungtaek2.png',
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
    <div className='about-container'>
      <section className='about-section'>
        <h2 className='section-title'>About the team</h2>
        <p>
          We’re a small group of developers passionate about building tools that
          empower creativity. Waviz was born from our shared curiosity—and from
          recognizing a gap in the market for a flexible, open-source audio
          visualization library that’s both powerful and approachable.
        </p>
        <p>
          We believe great developer tools should be intuitive, customizable,
          and fun to use. Our goal with Waviz is to make it easier for others to
          explore the creative potential of sound through code. Whether you’re
          building a music visualizer, an educational tool, or something
          entirely experimental, we hope Waviz helps bring your ideas to life.
        </p>
      </section>

      <section className='team-section'>
        <h2 className='section-title'>Who we are</h2>
        <div className='team-grid'>
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
