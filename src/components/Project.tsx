import React from "react";
import knowvoParent from "../assets/images/knowvo-parent.png";

function Project() {
  return (
    <>
      <style>{`
        .projects-container {
          width: 70vw; /* 70% of viewport width */
          max-width: 1200px; /* optional max width */
          margin: 3rem auto; /* center horizontally and add vertical spacing */
          padding: 3rem 2rem;
          background: #f0f2f5;
          border-radius: 25px; /* smooth rounded corners */
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          text-align: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .projects-heading {
          font-size: 2.5rem;
          margin-bottom: 3rem;
          color: #333;
          font-weight: bold;
        }
        .projects-grid {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 2rem;
        }
        .project-card {
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
          width: 100%;
          max-width: 400px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
        }
        .project-image {
          width: 100%;
          height: auto;
          border-bottom: 1px solid #eee;
        }
        .project-content {
          padding: 1.5rem;
        }
        .project-content h2 {
          font-size: 1.5rem;
          color: #2d2d2d;
          margin-bottom: 0.75rem;
        }
        .project-content p {
          color: #666;
          font-size: 1rem;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        .project-link {
          display: inline-block;
          padding: 0.6rem 1.2rem;
          background: #6366f1;
          color: white;
          border-radius: 8px;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.3s ease;
        }
        .project-link:hover {
          background: #4f46e5;
        }

        /* Responsive tweak */
        @media (max-width: 768px) {
          .projects-container {
            width: 90vw;
            padding: 2rem 1rem;
          }
          .projects-grid {
            gap: 1rem;
          }
        }
      `}</style>

      <div className="projects-container" id="projects">
        <h1 className="projects-heading">✨ My Project</h1>
        <div className="projects-grid">
          <div className="project-card">
            <img
              src={knowvoParent}
              alt="Knowvo Parent App"
              className="project-image"
            />
            <div className="project-content">
              <h2>Knowvo Parent</h2>
              <p>
                A sleek React Native app for parents to track academics, school
                activities, transport, attendance, and fees — all in one place.
                Real-time updates, smooth UI, and school essentials shop
                included.
              </p>
              <a
                href="https://play.google.com/store/apps/details?id=com.knowvoparent"
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
