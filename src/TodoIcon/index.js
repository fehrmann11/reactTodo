import {ReactComponent as CheckSVG} from './check.svg'
import {ReactComponent as DeleteSVG} from './delete.svg'

const iconTypes = {
  check:(color)=> <CheckSVG className='icon-svg' fill={color}/>,
  delete:(color)=> <DeleteSVG className='icon-svg' fill={color}/>
}
function TodoIcon({type, color}) {
  return (
    iconTypes[type](color)
  )
}

export { TodoIcon };
