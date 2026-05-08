import {Button, buttonVariants} from '../ui/Button';

const Card =( {icon, title, description} )=>{
  return(
    <div className='flex flex-col bg-[#E5E2E2] gap-4 border rounded-lg p-6 justify-center items-start w-fit'>
      <div className='flex justify-center w-fit items-center p-2 bg-[#25476D] rounded-full text-[#f4f7ee] text-3xl'>
        {icon}
      </div>
      <div className='flex flex-col gap-2 font-quicksand items-start text-start text-sm'>
        <h4 className='text-lg font-inter font-bold'>{title}</h4>
        <p>{description}</p>
      </div>
      <Button className='w-fit bg-[#95B2C6]/58 text-[#25476D] hover:bg-[#25476D] hover:text-white'>Agregar al Carrito</Button>
    </div>
  )
}
export default Card;