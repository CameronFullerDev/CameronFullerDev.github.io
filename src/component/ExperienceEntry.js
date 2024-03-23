const ExperienceEntry = ({ experience }) => (
  <div>
    <strong>{experience.title}</strong>
    <br />
    {experience.company}, {experience.location}
    <br />
    {experience.duration}
    <br />
    <ul>
      {experience.responsibilities.map((responsibility, idx) => (
        <li key={idx}>{responsibility}</li>
      ))}
    </ul>
  </div>
);

export default ExperienceEntry;
