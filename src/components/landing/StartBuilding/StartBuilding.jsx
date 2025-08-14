import { Link } from 'react-router-dom';
import './StartBuilding.css';

const StartBuilding = () => {
  return (
    <section className="start-building-section">
      <div className="start-building-container">
        <div className="start-building-card">
          <h2 className="start-building-title">Join the DevSoc Community</h2>
          <p className="start-building-subtitle">
            Collaborate, code, and create — explore tools, resources, and projects built by developers, for developers.
          </p>

          <Link to="/text-animations/split-text" className="start-building-button">
            Explore Resources
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StartBuilding;
