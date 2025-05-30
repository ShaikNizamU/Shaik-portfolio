import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faMobileAlt, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFrontend = [
  "React Native",
  "JavaScript",
  "TypeScript",
  "React Navigation",
  "Styled Components",
  "Tailwind CSS (RN)",
  "Axios",
  "AsyncStorage",
  "Lottie",
  "FlatList / ScrollView"
];

const labelsUIDesign = [
  "Component-Based UI",
  "Figma to Code",
  "Dark Mode Support",
  "Responsive Layouts",
  "Custom Components",
  "Toast / Modal / Alerts",
  "Image & Font Assets",
  "Clean Folder Structure"
];

const labelsTools = [
  "Expo / React Native CLI",
  "Android Studio / Emulator",
  "Git & GitHub",
  "VS Code",
  "ESLint / Prettier",
  "React Native DevTools",
  "Debugging Tools"
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          
          {/* React Native Front-End Development */}
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>React Native Front-End Development</h3>
            <p>I build modern, responsive, and high-performance mobile apps using React Native. My focus is on creating clean UIs and smooth user experiences.</p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFrontend.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          {/* UI/UX Design Implementation */}
          <div className="skill">
            <FontAwesomeIcon icon={faMobileAlt} size="3x" />
            <h3>UI/UX Focused Design</h3>
            <p>I convert design mockups into functional mobile interfaces with attention to detail, accessibility, and responsiveness across Android and iOS.</p>
            <div className="flex-chips">
              <span className="chip-title">Skills:</span>
              {labelsUIDesign.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

          {/* Tools & Workflow */}
          <div className="skill">
            <FontAwesomeIcon icon={faLaptopCode} size="3x" />
            <h3>Tools & Workflow</h3>
            <p>I follow modern development practices using efficient tools to ensure smooth collaboration, version control, and maintainable codebases.</p>
            <div className="flex-chips">
              <span className="chip-title">Tools:</span>
              {labelsTools.map((label, index) => (
                <Chip key={index} className='chip' label={label} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;
