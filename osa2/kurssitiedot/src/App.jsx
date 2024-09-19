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
    <p>{props.part} {props.exercises}</p>
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
  const result = props.parts.map((x) => x.exercises).reduce((previous, next) => {
    return previous + next
  }, 0)

  return (
    <>
    <p>Number of exercises: {result}</p>
    </>
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
    <Total parts={course.parts}/>
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