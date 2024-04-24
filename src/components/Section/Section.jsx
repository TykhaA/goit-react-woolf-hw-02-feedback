// import {Component} from 'react'
import style from './section.module.css'

const Section = ({children, title}) => {
        return (<div className={style.section}>
            <h2 className={style.title}>{title}</h2>
            {children}
           </div>)
}
export default Section