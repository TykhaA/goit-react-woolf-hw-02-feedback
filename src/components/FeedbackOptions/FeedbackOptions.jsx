import style from './feedbackOptions.module.css'

const FeedbackOptions = ({handleClick}) => {
        return (<div className={style.feedback_options} >
               <button className={style.btn} name='countGood' onClick={handleClick}>good</button>
               <button className={style.btn} name='countNeutral' onClick={handleClick}>neutral</button>
               <button className={style.btn} name='countBad' onClick={handleClick}>bad</button>
            </div>)

}
export default FeedbackOptions