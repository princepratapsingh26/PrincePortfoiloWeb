import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Projects & Freelance</h5>
              </div>
              <h3>June 2024 - Present</h3>
            </div>
            <p>
              Built and deployed full-stack web applications using Java, JavaScript,
              React.js, and Node.js. Developed scalable REST APIs and integrated
              frontend with backend services, improving application performance and
              responsiveness. Worked on real-world projects including disaster
              management systems and AI-based applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Backend Developer</h4>
                <h5>Project & Freelance</h5>
              </div>
              <h3>2023 - 2024</h3>
            </div>
            <p>
              Focused on backend development using Node.js, Express, and SQL databases.
              Built authentication systems, APIs, and optimized database queries.
              Gained strong understanding of system design, debugging, and performance
              optimization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. Computer Science</h4>
                <h5>Academic Journey</h5>
              </div>
              <h3>2021 - 2025</h3>
            </div>
            <p>
              Building Solid, a proprietary low-code platform using Angular,
              Next.js & NestJS. Delivering production-ready CMS-based projects
              including e-commerce, CRM, and import-export automation systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
