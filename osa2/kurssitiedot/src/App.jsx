import { useState } from 'react'

const Header = ({course}) => {
  return (
    <>
    <h1>{course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
    <p key={props.id}>{props.part} {props.exercises}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
    <Part part={props.parts.name} exercises={props.parts.exercises} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p></>
  )
}

const Course = ({course}) => {
  return (
    <>
    <Header course={course.name}/>
    <ul>
    {course.parts.map((courseInfo) => {
      return (
       <li key={courseInfo.id}>
        <Content parts={courseInfo}/>
        </li>
      )
    })}
    </ul>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App