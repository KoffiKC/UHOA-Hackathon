import * as React from 'react'
import '../About.css';

function About() {
  return (
    <div className="about-container">
      {/* Left Side: Mission and Disclaimer */}
      <div className="about-text">
        <h5 className="about-title">MISSION STATEMENT:</h5>
        <p className="about-mission">
        Our mission is to illuminate and challenge prevailing historical narratives by incorporating underrepresented experiences and memories in the story of the United States of America. Despite the checks and balances of academic institutions and government authority to record and educate , there are perspectives and insights that remain absent or disregarded. We strive to gather and archive both supplementary and alternative voices to bridge these gaps and grant recognition to those who have been forgotten.
        </p>
        <h5 className="about-disclaimer-title">DISCLAIMER:</h5>
        <p className="about-disclaimer">
        UHOA does not position ourselves nor the content we gather as guaranteed factual recollections and evidence. We seek to supplement and help represent the unrecognized history in comparison to recorded history as not all historical records are treated equally or recorded properly through history. (ex. Historically inaccuracies not properly vetted to fake news)
        </p>
      </div>

      {/* Right Side: Image Placeholder */}
      <div className="about-image">
        <p>Image Placeholder</p>
      </div>
    </div>
  );
}
  
  export default About