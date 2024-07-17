import React from 'react'
import SkillsDetails from '../helper/SkillsDetails'

const Skills = () => {
  return (
    <section className="skills" id="skills">
        <div className="skills__content">
            <h3 className="title">Skills</h3>
            <div className='skills-section'>
                {SkillsDetails.map((item) => (
                    <div className="skill" key={item.id}>
                        <h3>{item.title}</h3>
                        <div className='skill-details'>
                            {item.skills.map((skill, index) => (
                                <ul key={index}>
                                    <li>{skill}</li>
                                </ul>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className='skills-bg-text'>my skills</div>
        </div>
    </section>
  )
}

export default Skills