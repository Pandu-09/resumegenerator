import './template1.css'
function Template1({data})
{
    return(
        <div className="resume-container">
            <div className="header">
                <h1>{data["personelDetails"].name}</h1>
                <div className='contact-info'>
                    <div className='contact-row'>
                        <span>{data["personelDetails"].location}</span>
                        <span>{data["personelDetails"].email}</span>
                        <span>{data["personelDetails"].mobile}</span>
                    </div>
                    <div className='contact-row'>
                        <span>{data["personelDetails"].linkedIn}</span>
                        <span>{data["personelDetails"].github}</span>
                        <span>{data["personelDetails"].website}</span>
                    </div>
                </div>
            </div>

            {/* Professional Summary */}
            <section className="section">
                <h2 className="section-title">Professional Summary</h2>
                <p className="summary-text">{data.summary}</p>
            </section>

            {/* Experience Section */}
            <section className="section">
                <h2 className="section-title">Professional Experience</h2>
                {data.experience.map((exp, index) => (
                    <div key={index} className="experience-item">
                        <div className="experience-header">
                            <div className="position-company">
                                <h3 className="position">{exp.position}</h3>
                                <h4 className="company">{exp.company}</h4>
                            </div>
                            <span className="duration">{exp.duration}</span>
                        </div>
                        <p className="description">{exp.description}</p>
                    </div>
                ))}
            </section>

            {/* Education Section */}
            <section className="section">
                <h2 className="section-title">Education</h2>
                {data.education.map((edu, index) => (
                    <div key={index} className="education-item">
                        <div className="education-header">
                            <h3 className="school">{edu.school}</h3>
                            <span className="duration">{edu.duration}</span>
                        </div>
                        <p className="grade">{edu.grade}</p>
                    </div>
                ))}
            </section>

            {/* Projects Section */}
            <section className="section">
                <h2 className="section-title">Projects</h2>
                {data.projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <h3 className="project-name">{project.name}</h3>
                        <p className="technologies"><strong>Technologies:</strong> {project.technologies}</p>
                        <p className="description">{project.description}</p>
                    </div>
                ))}
            </section>

            {/* Skills Section */}
            <section className="section">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {data.skills.split(',').map((skill, index) => (
                        <div key={index} className="skill-item">{skill.trim()}</div>
                    ))}
                </div>
            </section>
        </div>
    )
}
export default Template1