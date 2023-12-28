import React from "react";
import Project from "./Project";

function Gallery() {
  return (
    <section className="container gallery" id="projects">
      <div className="heading">
        <span className="html-tags top-tag">{`<h2>`}</span>
        <h2>Some Of Our Projects:</h2>
        <span className="html-tags bottom-tag">{`</h2>`}</span>
      </div>
      <div className="projects-container">
        <Project
          name="Weather App"
          description="A weather forecast website developed using React and Redux Toolkit, integrated with a weather API to display current and forecasted weather conditions. Implemented state management with Redux Toolkit for efficient data handling."
          image="/public/WeatherApp_Logo.svg"
          link="https://weather-app-gems2004.netlify.app"
        />
        <Project
          name="Movie Database Website"
          description="A movie database website developed using React and Redux Toolkit, allowing users to search for movies and tv series, view their details and checkout the latest and upcoming shows. Utilized advanced RTK Query, ensuring a seamless user experience."
          image="/public/MoviesApp_Logo.svg"
          link="https://movies-app-gems2004.netlify.app/"
        />
        <Project
          name="Todo App"
          description="A todo list web application developed using the MERN (MongoDB, Express JS, React JS, Node JS) stack, enabling users to create, read, update and delete tasks. Implemented RESTful API endpoints and utilized Redux Toolkit for state management in the frontend."
          image="/public/TodoListApp_Logo.svg"
          link="https://todolist-gems2004.netlify.app/"
        />
      </div>
    </section>
  );
}

export default Gallery;
