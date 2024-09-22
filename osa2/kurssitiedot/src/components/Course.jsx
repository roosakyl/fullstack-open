const Header = ({course}) => {
    return (
      <h2>{course}</h2>
    )
  }
  
  const Part = ({part, exercises}) => {
    return (
      <p>{part} {exercises}</p>
    )
  }
  
  const Content = ({parts}) => {
    return (
      <>
      {parts.parts.map((courseInfo) => {
        return (
          <Part key={courseInfo.id} part={courseInfo.name} exercises={courseInfo.exercises} />
        )
      })}
      </>
    )
  }
  
  const Total = ({exercises}) => {
  
    return (
      <p><strong>Number of exercises: {exercises}</strong></p>
    )
  }
  
  const Course = ({course}) => {
    const totalExercises = course.parts.reduce((p, n) => {
      return p + n.exercises
    }, 0)
  
    return (
      <>
      <Header course={course.name} />
      <Content parts={course} />
      <Total exercises={totalExercises}/>
      </>
    )
  }

  export default Course