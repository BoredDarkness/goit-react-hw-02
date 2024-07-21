import s from "./Options.module.css"
const Options = ({ updateFeedback, resetFeedback, totalFeedback }) => {
    return (
      <div className={s.opt}>
        <button className={s.btnG} onClick={() => updateFeedback("good")}>
          Good
        </button>
        <button className={s.btnN} onClick={() => updateFeedback("neutral")}>
          Neutral
        </button>
        <button className={s.btnB} onClick={() => updateFeedback("bad")}>
          Bad
        </button>
        {totalFeedback > 0 && (
          <button className={s.btnR} onClick={() => resetFeedback()}>
            Reset
          </button>
        )}
      </div>
    );
  };
  
  export default Options;