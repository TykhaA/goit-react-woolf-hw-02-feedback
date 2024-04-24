import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx'
import Section from './Section/Section.jsx'
import {Component} from 'react'
import Statistics from './Statistics/Statistics.jsx'
import Notification from './Notification/Notification.jsx'


class App extends Component {
  state={
      countGood: 0,
      countNeutral:0,
      countBad: 0,
      total: 0,
      positiveFeedback: 0
  }
  handleClick = (e) => {
      this.setState((prevState) => {
          return {
              [e.target.name]: prevState[e.target.name] + 1
          }
      })
      console.log(this.state)
      this.countTotalFeedback()
      this.countPositiveFeedbackPercentage()
  }
  countTotalFeedback = () =>{
      this.setState((prevState) => {
          return { total : prevState.total + 1}
       },
       this.countPositiveFeedbackPercentage)
  }
  countPositiveFeedbackPercentage = () =>{
      this.setState((prevState) => {
          return { positiveFeedback : (this.state.countGood / this.state.total) * 100 }
       } )
       console.log (this.state)
  }
  
  render(){
      return (<><Section title='Please leave feedback'>
                <FeedbackOptions handleClick={this.handleClick}></FeedbackOptions>
            </Section>
            <Section title='Statistics'>
        {!this.state.total ? <Notification message='There is no feedback'/> : <Statistics countGood={this.state.countGood} countNeutral={this.state.countNeutral} countBad={this.state.countBad} total={this.state.total} positiveFeedback={this.state.positiveFeedback}/>}            </Section></>)
  }  
}

export default App