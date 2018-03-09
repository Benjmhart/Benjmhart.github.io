import getTags from "../Helpers/getTags"
import markdownimg from "../Assets/markdown.jpg"
import leaderboardimg from "../Assets/leaderboard.jpg"
import recipeboximg from "../Assets/recipebox.jpg"
import lifeimg from "../Assets/life.jpg"
import dungimg from "../Assets/dungeon.jpg"
import calcimg from "../Assets/calc.jpg"
import ticimg from "../Assets/tic.jpg"
import pomimg from "../Assets/pom.jpg"
import barimg from "../Assets/bar.jpg"
import plotimg from "../Assets/plot.jpg"
import heatimg from "../Assets/heat.jpg"
import forceimg from "../Assets/force.jpg"
import mapimg from "../Assets/map.jpg"



const showAndTell = {
    contents:[
        {
           title: "MarkDown Previewer",
           link: "https://benjmhart.github.io/FCC-React-Sass-Markdown-Previewer/",
           imglink: markdownimg,
           tags:["React", "SASS"]
        }, 
        {
           title: "Camper LeaderBoard",
           link: "https://benjmhart.github.io/fcc-leaderboard/",
           imglink: leaderboardimg,
           tags:["React", "Async", "SASS"]
        }, 
        
        {
           title: "Recipe Box",
           link: "https://benjmhart.github.io/fcc-recipebox/",
           imglink: recipeboximg,
           tags:["React", "Animations", "LocalStorage", "SASS"]
        }, 
        
        {
           title: "Conway's Game of Life",
           link: "https://benjmhart.github.io/react-sass-redux-grid-game-of-life/",
           imglink: lifeimg,
           tags:["React", "Redux", "SASS"]
        }, 
        {
           title: "Dungeon Game",
           link: "https://benjmhart.github.io/FCC-react-roguelike/",
           imglink: dungimg,
           tags:["React", "Redux", "SASS", "Jest/Enzyme"]
        }, 
        
        {
           title: "JQuery Calculator",
           link: "https://benjmhart.github.io/fcc-calc/",
           imglink: calcimg,
           tags:["Jquery", "BootStrap"]
        }, 
        
        {
           title: "JQuery Tic-Tac-Toe",
           link: "https://benjmhart.github.io/fcc-tictactoe/index.html",
           imglink: ticimg,
           tags:["Jquery", "BootStrap"]
        }, 
        
        {
           title: "JQuery Pomodoro Clock",
           link: "https://benjmhart.github.io/fcc-pomodoro/index.html",
           imglink: pomimg,
           tags:["Jquery", "BootStrap"]
        }, 
        
        {
           title: "D3 BarChart",
           link: "https://benjmhart.github.io/d3-barchart/",
           imglink: barimg,
           tags:["D3"]
        }, 
        
        {
           title: "D3 ScatterPlot",
           link: "https://benjmhart.github.io/d3-scatterplot/",
           imglink: plotimg,
           tags:["D3"]
        }, 
        
        {
           title: "D3 HeatMap",
           link: "https://benjmhart.github.io/d3-heatmap/",
           imglink: heatimg,
           tags:["D3"]
        }, 
        
        {
           title: "D3 Force Directed Graph",
           link: "https://benjmhart.github.io/d3-forcechart/",
           imglink:forceimg,
           tags:["D3"]
        }, 
        {
           title: "D3 Meteor Map",
           link: "https://benjmhart.github.io/d3-meteormap/",
           imglink: mapimg,
           tags:["D3"]
        }, 
        
    ]
}

showAndTell.tags = getTags(showAndTell.contents)
export default showAndTell