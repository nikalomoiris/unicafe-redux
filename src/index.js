import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const FeedbackButton = (props) => {
  return (
    <button onClick={props.func}>{props.text}</button>
  )
}

const GiveFeedback = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }

  const ok = () => {
    store.dispatch({
      type: 'OK'
    })
  }

  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }

  const zero = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

  return (
    <>
      <FeedbackButton func={good} text='good' />
      <FeedbackButton func={ok} text='neutral' />
      <FeedbackButton func={bad} text='bad' />
      <FeedbackButton func={zero} text='reset stats' />
    </>
  )
}

const Statistic = (props) => {
  return (
    <tr><td>{props.text}</td><td>{props.func}</td></tr>
  )
}

const Statistics = () => {
  const all = () => {
    return (
      store.getState().good + store.getState().ok + store.getState().bad
    )
  }

  const average = () => {
    return (
      (store.getState().good + (-1 * store.getState().bad))/all()
    )
  }

  const positivePer = () => {
    return (
      (store.getState().good/all()) * 100 +'%'
    )
  }

  return (
    <>
      <table>
        <tbody>
          <Statistic text='good' func={store.getState().good} />
          <Statistic text='neutral' func={store.getState().ok} />
          <Statistic text='bad' func={store.getState().bad} />
          <Statistic text='all' func={all()} />
          <Statistic text='average' func={average()} />
          <Statistic text='positive' func={positivePer()} />
        </tbody>
      </table>
    </>
  )
}

const App = () => {

  const anyFeedback = () => {
    return (
      store.getState().good + store.getState().ok + store.getState().bad
    )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <GiveFeedback />
      <h1>statistics</h1>
      {anyFeedback() ? <Statistics /> : 'no feedback given'}
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)