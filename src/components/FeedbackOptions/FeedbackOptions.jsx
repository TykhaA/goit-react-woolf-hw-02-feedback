import style from './feedbackOptions.module.css'

const FeedbackOptions = ({handleClick, options}) => {
        return (<div className={style.feedback_options} >
                {options.map((elem) =>{
                       return (<button className={style.btn} name={elem.name} onClick={handleClick}>{elem.value}</button>) 
                })
                }
            </div>)

}
export default FeedbackOptions