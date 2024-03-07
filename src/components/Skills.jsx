import React from 'react'

const Skills = () => {
  return (
    <section className="skills" id="skills">
        <div className="skills__content">
            <h3 className="title">Skills</h3>
            <div className="skill">
                <ul className="section1">
                    <li>Typescript</li>
                    <li>React</li>
                    <li>React Native</li>
                    <li>Redux</li>
                </ul>
                <ul className="section2">
                <li>MongoDB</li>
                    <li>AWS Cognito</li>
                    <li>Node</li>
                    <li>Express</li>
                </ul>
                <ul className="section3">
                    <li>CSS/SASS/SCSS</li>
                    <li>Material UI</li>
                    <li>Tailwind CSS</li>
                </ul>
                <ul className="section3">
                <li>React Bootstrap</li>
                    <li>Ant Design</li>
                    <li>GIT</li>
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