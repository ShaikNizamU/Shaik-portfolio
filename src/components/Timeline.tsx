import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2024 - Present"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
          >
            <h3 className="vertical-timeline-element-title">React Native Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Knowvo · Full-time</h4>
            <h5 className="vertical-timeline-element-subtitle">Bengaluru, Karnataka, India · On-site</h5>
            <p>
              Currently working as a React Native developer at Knowvo where I build cross-platform mobile apps, optimize performance, integrate APIs, and collaborate with a talented team to deliver smooth user experiences.
            </p>
            <div className="tech-stack">
              <strong>Skills:</strong> React Native · TypeScript · JavaScript · Redux · REST APIs · UI/UX
            </div>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
