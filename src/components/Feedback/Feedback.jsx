import s from "./Feedback.module.css"
const Feedback = ({ good, bad, neutral, total, positive }) => {
    return (
      <div className={s.feed}>
        <p className={s.G}>Good: {good}</p>
        <p className={s.N}>Neutral: {neutral}</p>
        <p className={s.B}>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive: {positive}%</p>
      </div>
    );
  };
  
  export default Feedback;