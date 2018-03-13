import React from 'react'

const AboutMe = () => {
    const a = <a href="mailto:benjmhart@gmail.com">email me</a> 
    return (
        <div className="about">
            <h3>Hi there,</h3>
            <p>
                I'm a front end web developer from Toronto, Canada. I have particular 
                interests in functional programming, the React ecosystem, unit testing, 
                and data science. My previous experience includes over 6 years in the software and 
                enterprise solutions industry.
            </p>
            <p>
                I'm currently available for hire on your team or project. Feel free to 
                explore my projects here, and {a} with any questions you might have
            </p>
            
            <p>Sincerely,</p>
            <p>Ben Hart</p>
        </div>
    )
}

export default AboutMe