const About = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <div className="container my-4">
        <h1 className="mb-4" style={{ textAlign: 'center', padding: '20px', marginBottom: '30px' }}>About Me</h1>
        <p className="lead">I'm a third-year computer science student at Dalhousie University.</p>
        <p>
          I am interested in Cybersecurity, and my career goal is to become a Cybersecurity professional. My first coop is a Cybersecurity researcher at the NESRC CREATE summer internship program in summer 2025. I will gain:
        </p>
        <ul>
          <li>Hands-on training</li>
          <li>Professional development</li>
          <li>Mentorship</li>
          <li>Networking opportunities</li>
        </ul>
        <p className="mt-4">
          This program is not just about training; it's about shaping the future of cybersecurity for a safer digital world.
          <br />
          For more information, please visit the <a href="https://cybersecurity.cs.dal.ca/" target="_blank" rel="noreferrer noopener" aria-label="Visit the NSERC CREATE website for more information">NSERC CREATE</a> website.
        </p>
      </div>
    </div>
  );
};

export default About;
