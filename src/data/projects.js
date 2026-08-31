import pianoPic from "../images/pianoPic.png"
import mmPic from "../images/MM.PNG"
import weatherPic from "../images/weatherApp.png"
export const projects = [
    {
        projName: "Piano Trainer",
        link: "https://piano-trainer-ji.netlify.app/",
        pic: pianoPic,
        desc: "Website designed to help users learn and memorise different chord types. The user must play the chord on display within a certain time limit, which can be adjusted."     
    }, 
    {
        projName: "Movie Master",
        link: "https://movie-master-ji.netlify.app/",
        pic: mmPic,
        desc: `A full-stack movie discovery and AI-powered chat application built with React, 
                TypeScript, TMDB API, and Netlify Functions. `           
    },
    {
        projName: "Weather App",
        link: "https://weather-jiruobe.netlify.app/",
        pic: weatherPic,
        desc: `Weather App that enables users to find the 
        temperature of cities across the world.`     
    }
]