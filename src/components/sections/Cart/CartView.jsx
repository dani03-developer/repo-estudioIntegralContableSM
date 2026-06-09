import { Button } from '../../ui/Button';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
const CartView =()=>{
    return(
        <div className='flex flex-col items-center gap-15 font-quicksand text-[#1e1e1e] font-semibold text-center min-h-[50.2vh] md:min-h-[62.8vh]'>
            <div className='flex flex-col gap-4 pt-10'>
             <h1 className='text-2xl lg:text-4xl font-inter'>Tu carrito</h1>
             <Link to='/servicios'>Seguir comprando</Link>
            </div>
            <div className='w-[90vw] md:w-[80vw]'>
                <div className='grid grid-cols-[1fr_auto_auto] md:grid-cols-[1fr_120px_120px_120px_48px] border-b border-[#C5B9B9] pb-2 text-start'>
                <p>Servicio</p>
                <p className='hidden md:flex text-center'>Precio</p>
                <p className='text-center'>Cantidad</p>
                <p className='hidden md:flex text-center'>Total</p>
                <span />
                </div>
                <div className='grid grid-cols-[1fr_auto_auto] gap-3 md:grid-cols-[1fr_120px_120px_120px_48px] items-center pt-5 gap-y-1 text-start'>
                    <div className='flex justify-center md:hidden'>
                        <Button className='font-bold bg-[#B0D1E6] text-[#25476D] hover:bg-[#B0D1E6] hover:text-[#25476D]'>X</Button>
                    </div>
                    <div className='flex flex-col gap-2 text-left md:pr-4 w-[60%]'>
                        <p className='font-inter'>Obtención de CUIT y Clave Fiscal</p>
                        <p className='text-[#7C7878] text-sm'>
                        Obtención de CUIT, blanqueo y elevación de nivel de seguridad de Clave Fiscal en ARCA.
                        </p>
                    </div>
                    <p className='hidden md:flex text-center'>$00,00</p>
                    <p className='text-center'>1</p>
                    <p className='hidden md:flex text-center'>$00,00</p>
                    <div className='hidden md:flex justify-center'>
                        <Button className='font-bold bg-[#B0D1E6] text-[#25476D] hover:bg-[#B0D1E6] hover:text-[#25476D]'>X</Button>
                    </div>
                </div>
                <div className='flex justify-center md:justify-end pt-10 gap-4'>
                    <div className='flex flex-col gap-5 text-right w-[90%] md:w-[30%]'>
                        <div className='flex flex-row gap-2 border-[#C5B9B9] border-b pb-2 text-start justify-between'>
                            <p>Subtotal</p>
                            <p className='font-inter text-lg'>$00,00</p>
                        </div>
                        <div className='flex flex-col md:flex-row gap-2'>
                            <Button className='font-bold bg-[#B0D1E6] text-[#25476D] hover:bg-[#B0D1E6] hover:text-[#25476D]'>Iniciar Compra</Button>
                            <Button className='font-bold bg-[#25476D] text-[#f7f4ee] hover:bg-[#25476D] hover:text-[#f7f4ee]'>Vaciar Carrito</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CartView;