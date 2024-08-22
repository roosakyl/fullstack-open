import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const StatisticLine = ({ text, value, unit }) => {
  return (
    <>
    <td>{text}</td><td>{value} {unit}</td>
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
      <table>
        <tbody>
      <tr><StatisticLine text="Good" value={good} /></tr>
      <tr><StatisticLine text="Neutral" value={neutral} /></tr>
      <tr><StatisticLine text="Bad" value={bad} /></tr>
      <tr><StatisticLine text="All" value={good + neutral + bad} /></tr>
      <tr><StatisticLine text="Average" value={((good - bad) / (good + neutral + bad)).toFixed(2)} /></tr>
      <tr><StatisticLine text="Positive" value={(good / (good + neutral + bad) * 100).toFixed(2)} unit="%" /></tr>
      </tbody>
      </table>
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