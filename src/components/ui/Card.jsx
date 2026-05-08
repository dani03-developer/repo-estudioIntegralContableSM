import {Button, buttonVariants} from '../ui/Button';

const Card =( {icon, title, description, className='', classBtn=''} )=>{
  return(
    <div className={`flex flex-col  gap-4 border rounded-lg p-6 justify-center items-start md:justify-start w-fit ${className}`}>
      <div className='flex w-fit p-2 bg-[#25476D] rounded-full text-[#f4f7ee] text-3xl'>
        {icon}
      </div>
      <div className='flex flex-col gap-2 font-quicksand items-start text-sm text-start'>
        <h4 className='text-lg font-inter font-bold'>{title}</h4>
        <p>{description}</p>
      </div>
      <Button className={`w-fit ${classBtn} hover:text-white`}>Agregar al Carrito</Button>
    </div>
  )
}
export default Card;