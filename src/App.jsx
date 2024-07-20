import { useState, useEffect } from 'react'
import Description from "./componets/Description/Description"
import Feedback from "./componets/Feedback/Feedback"
import Notification from "./componets/Notification/Notification"
import Options from "./componets/Options/Options"
import './App.css'

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedData = JSON.parse(window.localStorage.getItem("feedback"));
    if (savedData) {
      return savedData;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });
  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);
  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
    console.log(feedback);
  };
  const resetFeedback = () => {
    setFeedback(() => {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    });
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  console.log(totalFeedback);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positive={Math.round((feedback.good / totalFeedback) * 100)}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;