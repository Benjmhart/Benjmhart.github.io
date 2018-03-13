import getTags from "../Helpers/getTags"
import markdownimg from "../Assets/preview.gif"
import leaderboardimg from "../Assets/board.gif"
import recipeboximg from "../Assets/box.gif"
import lifeimg from "../Assets/life.gif"
import dungimg from "../Assets/dung.gif"
import calcimg from "../Assets/calc.gif"
import ticimg from "../Assets/tic.gif"
import pomimg from "../Assets/pom.gif"
import barimg from "../Assets/bar.gif"
import plotimg from "../Assets/plot.gif"
import heatimg from "../Assets/heat.gif"
import forceimg from "../Assets/force.gif"
import simonimg from "../Assets/simon.gif"
import mapimg from "../Assets/map.gif"

const showAndTell = {
    
    contents:[
        {
           title: "D3 Force Directed Graph",
           link: "https://benjmhart.github.io/d3-forcechart/",
           git: "https://github.com/Benjmhart/d3-forcechart",
           imglink:forceimg,
           tags:["D3", "SVG"]
        }, 
        {
           title: "Dungeon Game",
           link: "https://benjmhart.github.io/FCC-react-roguelike/",
           git: "https://github.com/Benjmhart/FCC-react-roguelike",
           imglink: dungimg,
           tags:["React", "Redux", "SASS", "Jest/Enzyme"]
        }, 
        {
           title: "D3 Meteor Map",
           link: "https://benjmhart.github.io/d3-meteormap/",
           git: "https://github.com/Benjmhart/d3-meteormap",
           imglink: mapimg,
           tags:["D3", "SVG"]
        }, 
        {
           title: "Conway's Game of Life",
           link: "https://benjmhart.github.io/react-sass-redux-grid-game-of-life/",
           git: "https://github.com/Benjmhart/react-sass-redux-grid-game-of-life",
           imglink: lifeimg,
           tags:["React", "Redux", "SASS"]
        }, 
        {
           title: "MarkDown Previewer",
           link: "https://benjmhart.github.io/FCC-React-Sass-Markdown-Previewer/",
           git: "https://github.com/Benjmhart/FCC-React-Sass-Markdown-Previerer",
           imglink: markdownimg,
           tags:["React", "SASS"]
        }, 
        {
           title: "Camper LeaderBoard",
           link: "https://benjmhart.github.io/fcc-leaderboard/",
           git: "https://github.com/Benjmhart/fcc-leaderboard",
           imglink: leaderboardimg,
           tags:["React", "Async", "SASS"]
        }, 
        
        {
           title: "D3 BarChart",
           link: "https://benjmhart.github.io/d3-barchart/",
           git: "https://github.com/Benjmhart/d3-barchart",
           imglink: barimg,
           tags:["D3", "SVG"]
        }, 
        
        {
           title: "D3 ScatterPlot",
           link: "https://benjmhart.github.io/d3-scatterplot/",
           git: "https://github.com/Benjmhart/d3-scatterplot",
           imglink: plotimg,
           tags:["D3", "SVG"]
        }, 
        
        {
           title: "D3 HeatMap",
           link: "https://benjmhart.github.io/d3-heatmap/",
           git: "https://github.com/Benjmhart/d3-heatmap",
           imglink: heatimg,
           tags:["D3", "SVG"]
        }, 
        
        {
           title: "Recipe Box",
           link: "https://benjmhart.github.io/fcc-recipebox/",
           git:"https://github.com/Benjmhart/fcc-recipebox",
           imglink: recipeboximg,
           tags:["React", "Animations", "LocalStorage", "SASS"]
        }, 
        
        
        {
           title: "JQuery Calculator",
           link: "https://benjmhart.github.io/fcc-calc/",
           git: "https://github.com/Benjmhart/fcc-calc",
           imglink: calcimg,
           tags:["Jquery", "BootStrap"]
        }, 
        
        {
           title: "JQuery Tic-Tac-Toe",
           link: "https://benjmhart.github.io/fcc-tictactoe/index.html",
           git: "https://github.com/Benjmhart/fcc-tictactoe",
           imglink: ticimg,
           tags:["Jquery", "BootStrap"]
        }, 
        
        {
           title: "JQuery Pomodoro Clock",
           link: "https://benjmhart.github.io/fcc-pomodoro/index.html",
           git: "https://github.com/Benjmhart/fcc-pomodoro",
           imglink: pomimg,
           tags:["Jquery", "BootStrap"]
        },{
           title: "JQuery Simon",
           link: "https://benjmhart.github.io/fcc-simon/index.html",
           git: "https://github.com/Benjmhart/fcc-simon",
           imglink: simonimg,
           tags:["Jquery",]
        },
        
        
    ]
}

showAndTell.tags = getTags(showAndTell.contents)
export default showAndTell