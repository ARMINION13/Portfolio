import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2026 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Swingy</h3>
            <h4 className="vertical-timeline-element-subtitle">42 Madrid</h4>
            <p>
              Simple RPG made with Maven and JAVA
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Data Science & Python Course</h3>
            <h4 className="vertical-timeline-element-subtitle">42 Madrid</h4>
            <p>
              A 2 weeks course to learn about python, sql, postgreSQL and machine learning.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Japan Study Abroad</h3>
            <h4 className="vertical-timeline-element-subtitle">Academy of Language Arts (ALA) Agebacho, Shinjuku, Japan</h4>
            <p>
              Personal 3 month trip to study japanese.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">End of 42 Common Core</h3>
            <h4 className="vertical-timeline-element-subtitle">42 Madrid</h4>
            <p>
              The end of 42 School's final project FT_TRANSCENDENCE
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">FT_IRC</h3>
            <h4 className="vertical-timeline-element-subtitle">42 Madrid</h4>
            <p>
              IRC server made in C++98 compatible with standard IRC clients
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        
      </div>
    </div>
  );
}

export default Timeline;