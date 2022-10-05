import React from 'react'

const Skills = () => {
  return (
    <section className="skills" id="skills">
    <div className="skills__content">
        <h3 className="title">Skills</h3>
        <div className="skill">
            <ul className="section1">
                <li>Html</li>
                <li>Css</li>
                <li>Sass</li>
            </ul>
            <ul className="section2">
                <li>Javascript</li>
                <li>React</li>
                <li>Redux</li>
            </ul>
            <ul className="section3">
                <li>Mongodb</li>
                <li>GIT</li>
                <li>Responsive Design</li>
            </ul>
            <ul className="section3">
                <li>Tailwind Css</li>
                <li>Material Ui</li>
                <li>React Bootstrap</li>
            </ul>
            <ul className="section4">
                <li>Figma</li>
                <li>Adobe xd</li>
                <li>Adobe Illustrator</li>
            </ul>
        </div>
        <div className='skills-bg-text'>my skills</div>
    </div>
    </section>
  )
}

export default Skills