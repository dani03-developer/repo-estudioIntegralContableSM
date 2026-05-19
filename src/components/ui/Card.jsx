import {Button} from '../ui/Button';
import CirculeIcon from './CirculeIcon';
const Card =( {icon, title, description, className='', classBtn=''} )=>{
  return(
    <div className={`flex flex-col flex-1  gap-4 border rounded-lg p-6 justify-center items-start md:justify-start w-fit ${className}`}>
      <CirculeIcon icon={icon} className='bg-[#25476D] text-[#f4f7ee]'/>
      <div className='flex flex-col gap-2 font-quicksand items-start text-sm text-start'>
        <h4 className='text-lg font-inter font-bold'>{title}</h4>
        <p>{description}</p>
      </div>
      <Button className={`w-fit ${classBtn} hover:text-white`}>Agregar al Carrito</Button>
    </div>
  )
}
export default Card;