import { fetchProjects } from '../api/projectsData';
import { useApi } from '../hooks/useApi'

export default function Projects() {
    const projects = [
      { 
        title: 'Cloud-Based Task Manager',
        tech: 'AWS, React, Node.js, Docker',
        problem: "Need for secure, scalable task management solution with real-time updates",
        solution: [
          "Architected serverless backend using AWS Lambda & API Gateway",
          "Implemented CI/CD pipeline with Docker containers",
          "Secured sensitive data with AWS Secrets Manager"
        ],
        impact: "Reduced deployment time by 40% through containerization"
      },
      {
        title: 'IT Infrastructure Automation',
        tech: 'PowerShell, Azure AD, ServiceNow',
        problem: "Manual user provisioning causing delays in account management",
        solution: [
          "Developed automated mailbox migration scripts",
          "Integrated Azure AD for identity management",
          "Created SolarWinds monitoring templates"
        ],
        impact: "Improved incident resolution efficiency by 20%"
      },
      {
        title: 'Travel with AI',
        tech: 'Gemini API, Google Maps API, React Native, Expo, Google Places API',
        problem: "Difficulty in planning personalized travel itineraries with real-time location updates",
        solution: [
          "Integrated Gemini API for generating AI-powered travel itineraries",
          "Used Google Maps API for real-time location tracking and navigation",
          "Fetched location names dynamically using Google Places API",
          "Built the application using React Native and Expo for cross-platform compatibility"
        ],
        impact: "Enhanced user experience by providing personalized and dynamic travel planning assistance"
      }
    ]
  
    return (
      <div>
        <h1 className="display-4 mb-4">Technical Projects</h1>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{project.tech}</h6>
                  
                  <div className="project-details mt-3">
                    <h6>Challenge:</h6>
                    <p>{project.problem}</p>
                    
                    <h6>Solution Implemented:</h6>
                    <ul>
                      {project.solution.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    
                    <h6>Impact:</h6>
                    <p className="text-success">{project.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
