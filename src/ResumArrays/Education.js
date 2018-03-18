import getTags from "../Helpers/getTags"

const courses = {
    contents: [
        {
            title: "BFA Performing Arts with Additional Studies in Symbolic Logic",
            location: "University of Lethbridge",
            completion: "2008",
            website: "http://www.uleth.ca/",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e6/University_of_lethbridge_logo.svg/178px-University_of_lethbridge_logo.svg.png",
            tags: ["University", "Algorithms"]
        },
        {
            title: "FreeCodeCamp Front End Developer Certification",
            location: "FreeCodeCamp",
            completion: "2017",
            website: "http://freecodecamp.com",
            img: "https://pbs.twimg.com/profile_images/692531829287567360/ytP7U362_400x400.png",
            tags: ["HTML", "CSS", "JavaScript", "JQuery", "BootStrap", "Algorithms"]
        },
        {
            title: "FreeCodeCamp Data Visualization Certification",
            location: "FreeCodeCamp",
            completion: "2018",
            website: "http://freecodecamp.com",
            img: "https://cdn-images-1.medium.com/max/1600/1*QD92-ToXuIfd-SyzchNrZA.png",
            tags: ["SASS", "React", "D3"]
        },
        {
            title: "ES6 for Everyone",
            location: "Wes Bos",
            completion: "2017",
            website: "http://wesbos.com",
            img: "https://es6.io/images/ss/es6/ES6-0001.jpg",
            tags: ["JavaScript"]
        },
        
        {
            title: "React for Beginners",
            location: "Wes Bos",
            completion: "2017",
            website: "http://wesbos.com",
            img: "https://reactforbeginners.com/images/ss/RFB-0001.jpg",
            tags: ["JavaScript", "React"]
        },
        
        {
            title: "Javascript 30",
            location: "Wes Bos",
            completion: "2017",
            website: "http://wesbos.com",
            img: "https://tosbourn.com/img/javascript30-review.png",
            tags: ["JavaScript", "Algorithms"]
        },
        
        {
            title: "Command Line Power User",
            location: "Wes Bos",
            completion: "2017",
            website: "http://wesbos.com",
            img: "http://wesbos.com/wp-content/uploads/2015/04/ss-2015-04-02-at-2.20.32-PM-650x425.png",
            tags: ["Linux/CLI"]
        },
        
        {
            title: "Modern React with Redux (Stephen Grider)",
            location: "Udemy",
            completion: "2017",
            website: "https://www.udemy.com/react-redux/",
            img: "https://udemy-images.udemy.com/course/240x135/705264_caa9_3.jpg",
            tags: ["JavaScript", "React", "Redux"]
        },
        
        {
            title: "14 Days to Learn SASS",
            location: "TutsPlus",
            completion: "2017",
            website: "https://webdesign.tutsplus.com/courses/14-days-to-learn-sass",
            img: "https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg",
            tags: ["SASS", "CSS"]
        },
        
        {
            title: "Git Essentials",
            location: "TutsPlus",
            completion: "2017",
            website: "https://code.tutsplus.com/courses/git-essentials",
            img: "https://git-scm.com/images/logos/logomark-orange@2x.png",
            tags: ["Git", "Linux/CLI"]
        },
        
        {
            title: "Agile Project Management",
            location: "Lynda",
            completion: "2018",
            website: "https://www.lynda.com/Business-Project-Management-tutorials/Welcome/122428/147336-4.html",
            img: "https://www.persistent.com/wp-content/uploads/2016/02/Agile-CoE-2.png",
            tags: ["Agile"]
        },
        
        {
            title: "Hardcore Functional Programming in JavaScript",
            location: "FrontEnd Masters",
            completion: "2018",
            website: "https://frontendmasters.com/courses/functional-javascript/",
            img: "https://frontendmasters.com/assets/functional-js.png",
            tags: ["JavaScript", "Ramda", "Functional"]
        },
        
        {
            title: "Learn d3.js in 5 days",
            location: "Ben Clinkinbeard",
            completion: "2018",
            website: "https://benclinkinbeard.com/d3in5days/",
            img: "https://camo.githubusercontent.com/722a5cc12c7d40231ebeb8ca6facdc8547e2abf7/68747470733a2f2f64336a732e6f72672f6c6f676f2e737667",
            tags: ["JavaScript", "D3"]
        },
        
        {
            title: "Learn and understand D3js for Data Visualization",
            location: "Udemy",
            completion: "2018",
            website: "https://www.udemy.com/learn-d3js-for-data-visualization/",
            img: "https://udemy-images.udemy.com/course/240x135/1368106_1b2b.jpg",
            tags: ["JavaScript", "D3"]
        },
        {
            title:"Object-Oriented Javacript",
            location:"tutsplus",
            completion:"2018",
            website:"https://code.tutsplus.com/courses/object-oriented-javascript",
            img:"https://thumbsplus.tutsplus.com/legacy-courses/CRS-29.png?height=300&width=300",
            tags: ["Javascript", "OOP"]
        },
        {
            title:"Object-Oriented Javacript with ES6",
            location:"tutsplus",
            completion:"2018",
            website:"https://code.tutsplus.com/courses/object-oriented-javascript-with-es6",
            img:"https://thumbsplus.tutsplus.com/uploads/users/71/courses/660/preview_image/es6-1.png?height=300&width=300",
            tags: ["Javascript", "OOP"]
        }
        ]
}

courses.tags = getTags(courses.contents)
export default courses