import { useState } from 'react';

import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Section from '../Section';
import Notification from '../Notification';

import s from './App.module.css';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onButtonClick = e => {
    const { name } = e.currentTarget;

    switch (name) {
      case 'good':
        setGood(state => state + 1);
        break;

      case 'neutral':
        setNeutral(state => state + 1);
        break;

      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  const totalFeedback = good + neutral + bad;

  const positivePercentage = () => {
    return totalFeedback > 0 ? Math.floor((good / totalFeedback) * 100) : 0;
  };

  return (
    <div className={s['container']}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onButtonClick}
        />
      </Section>
      <Section title={'Statistics'}>
        {!totalFeedback ? (
          <Notification message={'There is no feedback!'}></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage()}
          />
        )}
      </Section>
    </div>
  );
}

export default App;
