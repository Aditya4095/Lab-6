import './../About.css'; 
import React from 'react'
export default function About() {
  return (
    <div className="container py-5">
      <h1 className="display-4 text-center mb-5">About Me</h1>
      <div className="row">
        {/* Education Section */}
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h2 className="card-title">Education</h2>
              <p className="fs-5">
                <strong>Bachelor of Computer Science</strong><br />
                Dalhousie University | Halifax, Nova Scotia<br />
                Sep. 2021 – April 2025
              </p>

              <h3 className="mt-4">Career Goals</h3>
              <ul className="list-unstyled">
                <li>✅ Pursuing AWS Certified Solutions Architect & DevOps Engineer certifications</li>
                <li>✅ Developing expertise in cloud-native solutions and DevSecOps practices</li>
                <li>✅ Creating secure, scalable infrastructure solutions for enterprise applications</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow">
            <div className="card-body">
              <h2 className="card-title">Professional Experience</h2>
              
              <div className="experience-item mb-4">
                <h5>Cyber Security Analyst (Co-op)</h5>
                <p className="text-muted">Irving Oil Limited | Sep. 2024 – Dec. 2024</p>
                <ul>
                  <li>🔒 Secured 54 servers by removing 375 inactive accounts</li>
                  <li>🔍 Conducted security audits and incident response analysis</li>
                </ul>
              </div>

              <div className="experience-item mb-4">
                <h5>Technology Risk Analyst (Co-op)</h5>
                <p className="text-muted">Irving Oil Limited | Jan. 2024 – August 2024</p>
                <ul>
                  <li>📊 Led 50+ client workshops using NIST/ISO frameworks, reducing project risks by 25%</li>
                  <li>📈 Developed PowerBI dashboards for real-time risk monitoring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="col-12 mb-4">
        <div className="card shadow">
          <div className="card-body">
            <h2 className="card-title text-center mb-4">Technical Expertise</h2>
            <div className="row">
              <div className="col-md-4">
                <h5>Cloud Technologies</h5>
                <div className="badge-container">
                  <span className="cloud-tech">AWS (EC2, Elastic Beanstalk, VPC, S3, IAM, CloudFront, CloudFormation, Lambda, SNS, Secrets Manager, API Gateway)</span>
                  <span className="cloud-tech">Azure (Active Directory, Virtual Machines, Storage, DevOps)</span>
                </div>
              </div>
              
              <div className="col-md-4">
                <h5>Languages</h5>
                <div className="badge-container">
                  <span className="badge bg-success me-1 mb-1">C</span>
                  <span className="badge bg-success me-1 mb-1">C++</span>
                  <span className="badge bg-success me-1 mb-1">Java</span>
                  <span className="badge bg-success me-1 mb-1">Python</span>
                  <span className="badge bg-success me-1 mb-1">R</span>
                </div>
              </div>

              <div className="col-md-4">
                <h5>Databases</h5>
                <div className="badge-container">
                  <span className="badge bg-info me-1 mb-1">SQL</span>
                  <span className="badge bg-info me-1 mb-1">MySQL</span>
                  <span className="badge bg-info me-1 mb-1">AWS RDS</span>
                  <span className="badge bg-info me-1 mb-1">AWS DynamoDB</span>
                </div>
              </div>
            </div>
            
            <div className="row mt-3">
              <div className="col-md-4">
                <h5>Developer Technologies</h5>
                <div className="badge-container">
                  <span className="badge bg-secondary me-1 mb-1">HTML</span>
                  <span className="badge bg-secondary me-1 mb-1">CSS</span>
                  <span className="badge bg-secondary me-1 mb-1">React JS</span>
                  <span className="badge bg-secondary me-1 mb-1">JavaScript</span>
                  <span className="badge bg-secondary me-1 mb-1">Node JS</span>
                  <span className="badge bg-secondary me-1 mb-1">Spring Boot</span>
                  <span className="badge bg-secondary me-1 mb-1">React Native</span>
                  <span className="badge bg-secondary me-1 mb-1">Vue JS</span>
                  <span className="badge bg-secondary me-1 mb-1">Selenium</span>
                  <span className="badge bg-secondary me-1 mb-1">Linux</span>
                  <span className="badge bg-secondary me-1 mb-1">Postman</span>
                  <span className="badge bg-secondary me-1 mb-1">Figma</span>
                  <span className="badge bg-secondary me-1 mb-1">Insomnia</span>
                </div>
              </div>
              
              <div className="col-md-4">
                <h5>DevOps Tools</h5>
                <div className="badge-container">
                  <span className="badge bg-warning me-1 mb-1">Jenkins</span>
                  <span className="badge bg-warning me-1 mb-1">Docker</span>
                  <span className="badge bg-warning me-1 mb-1">CI/CD pipeline</span>
                  <span className="badge bg-warning me-1 mb-1">Jira</span>
                  <span className="badge bg-warning me-1 mb-1">Bamboo</span>
                  <span className="badge bg-warning me-1 mb-1">Bitbucket</span>
                  <span className="badge bg-warning me-1 mb-1">Git/GitHub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}