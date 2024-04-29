import style from './feedbackOptions.module.css';

const FeedbackOptions = ({ handleClick, options }) => {
  return (
    <div className={style.feedback_options}>
      {options.map(elem => {
        return (
          <button
            className={style.btn}
            name={elem}
            onClick={() => handleClick(elem)}
            key={elem}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};
export default FeedbackOptions;
