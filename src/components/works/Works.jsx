import React from 'react'
import './works.css'

import { projectList } from './projectList'

function Works() {
  return (
    <section id='works'>
      <h2>Works and Projects</h2>
      <div className='language-progress'>
        <h2>Skills:</h2>

        <label htmlFor='html-bar'>HTML: </label>
        <progress id='html-bar' value="80" max="100"></progress>

        <label htmlFor='css-bar'>CSS: </label>
        <progress id='css' value="60" max="100"></progress>

        <label htmlFor='js-bar'>Javascript: </label>
        <progress id='js-bar' value="60" max="100"></progress>

        <label htmlFor='react-bar'>React JS: </label>
        <progress id='react-bar' value="60" max="100"></progress>

        <label htmlFor='node-bar'>Node JS: </label>
        <progress id='node-bar' value="40" max="100"></progress>

        <label htmlFor='java-bar'>Java: </label>
        <progress id='java-bar' value="50" max="100"></progress>

        <label htmlFor='c-bar'>.C: </label>
        <progress id='c-bar' value="50" max="100"></progress>

        <label htmlFor='php-bar'>PHP: </label>
        <progress id='php-bar' value="20" max="100"></progress>

        <label htmlFor='laravel-bar'>Laravel: </label>
        <progress id='laravel-bar' value="20" max="100"></progress>
      </div>

      <div className='project-container'>
        <h2>List of projects: </h2>
        
        {projectList.map((data) => {
          return(
            <div key={data.id} className='card'>
              <img src={require('../../assets/Pj' + data.id + '.jpg')} alt='project_pic'></img>
              <p>{data.description}</p>
              <a href='https://github.com/Lucasjbs' target="_blank" rel="noreferrer" className='btn'>Github Code</a>
              <a href={`/project/${data.id}`} target="_blank" rel="noreferrer" className='btn btn-primary'>Project Overview</a>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Works