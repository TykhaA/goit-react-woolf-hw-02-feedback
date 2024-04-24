// import {Component} from 'react'
import style from './statistics.module.css'

const Statistics = ({countGood, countNeutral, countBad, total, positiveFeedback}) => {
    
        return ( <div className={style.list}>
           <div className={style.item}>
               <div className={style.option}>Good:</div>
               <div className={style.value}>{countGood}</div>
           </div>
           <div className={style.item}>
               <div className={style.option}>Neutral:</div>
               <div className={style.value}>{countNeutral}</div>
           </div>
           <div className={style.item}>
               <div className={style.option}>Bad:</div>
               <div className={style.value}>{countBad}</div>
           </div>
           <div className={style.item}>
               <div className={style.option}>Total:</div>
               <div className={style.value}>{total}</div>
           </div>
           <div className={style.item}>
               <div className={style.option}>Positive feedback:</div>
               <div className={style.value}>{Math.round(positiveFeedback)}%</div>
           </div>
        </div>)
}
export default Statistics
