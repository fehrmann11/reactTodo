import './TodoItem.css';
import {CompleteIcon} from '../TodoIcon/CompleteIcon';
import {DeleteIcon} from '../TodoIcon/DeleteIcon';
function TodoItem({text, completed, deleteTodo, toggleCompleteTodo}) {
    return <li  className="item">     
     <span className='tick' onClick={()=>{toggleCompleteTodo(text)}}> <CompleteIcon completed={completed}/></span>
      <p className={`texto ${completed?'subraya':null}`}>{text}</p>
      <span className='cierre' onClick={()=>deleteTodo(text)}><DeleteIcon/></span>
    </li>;
  }

    export {TodoItem};