import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const StatisticLine = ({ text, value, unit }) => {
  return (
    <>
    <p>{text}: {value} {unit}</p>
    </>
  )
}

const Statistics = ({good, bad, neutral}) => {

  if ((good + neutral + bad) === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <div>
      <StatisticLine text="Good" value={good} unit="" />
      <StatisticLine text="Neutral" value={neutral} unit="" />
      <StatisticLine text="Bad" value={bad} unit="" />
      <StatisticLine text="All" value={good + neutral + bad} unit="" />
      <StatisticLine text="Average" value={((good - bad) / (good + neutral + bad)).toFixed(2)} unit="" />
      <StatisticLine text="Positive" value={(good / (good + neutral + bad) * 100).toFixed(2)} unit="%" />
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGood} text="Good" />
      <Button handleClick={handleNeutral} text="Neutral" />
      <Button handleClick={handleBad} text="Bad" />

      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App