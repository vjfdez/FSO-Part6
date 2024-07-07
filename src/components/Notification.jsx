import { useSelector, useDispatch } from "react-redux";
import { text } from "../reducers/notificationReducer";

const Notification = () => {
    const dispatch = useDispatch();
    const notification = useSelector(state => state.notification);

    let style = {
        display: 'none',
        border: 'solid',
        padding: 10,
        borderWidth: 1,
        marginBottom: 10
    };                                                  

    if(notification === 'NONE' ){
        style.display = 'none'
    } else {
        style.display = 'block'
        setTimeout(()=>{ dispatch(text('NONE')) }, 5000)
    };

    return (

        <div style={style}>
            { notification }
        </div>
    )
};
  
export default Notification;