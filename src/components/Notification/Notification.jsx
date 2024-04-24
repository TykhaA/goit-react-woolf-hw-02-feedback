import style from './notification.module.css'

const Notification = ({message}) => {
        return (<div className={style.title}>{message}</div>)

}
export default Notification