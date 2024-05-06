import style from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <div className={style.list}>
      <div className={style.item}>
        <div className={style.option}>Good:</div>
        <div className={style.value}>{good}</div>
      </div>
      <div className={style.item}>
        <div className={style.option}>Neutral:</div>
        <div className={style.value}>{neutral}</div>
      </div>
      <div className={style.item}>
        <div className={style.option}>Bad:</div>
        <div className={style.value}>{bad}</div>
      </div>
      <div className={style.item}>
        <div className={style.option}>Total:</div>
        <div className={style.value}>{total}</div>
      </div>
      <div className={style.item}>
        <div className={style.option}>Positive feedback:</div>
        <div className={style.value}>{Math.round(positiveFeedback)}%</div>
      </div>
    </div>
  );
};
export default Statistics;
