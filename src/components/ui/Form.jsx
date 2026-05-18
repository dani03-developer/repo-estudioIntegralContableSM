import { Button } from '../ui/Button';
const Form = () => {
    return(
        <div className="rounded-lg bg-[#f4f7ee] shadow-[0_-1px_20px_rgba(124,124,124,0.2)] w-full md:w-1/2">
            <form action="" className="p-6 flex flex-col gap-4 font-inter">
                <div className='flex flex-col gap-4 lg:flex-row'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="name" className='text-sm font-semibold text-[#25476D]'>Nombre</label>
                        <input type="text" id="name" className="bg-[#E3E3E3] rounded-sm h-8 px-2 w-full" />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="apellido" className='text-sm font-semibold text-[#25476D]'>Apellido</label>
                        <input type="text" id="apellido" className="bg-[#E3E3E3] rounded-sm h-8 px-2 w-full" />
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                        <label htmlFor="email" className='text-sm font-semibold text-[#25476D]'>Email</label>
                        <input type="email" id="email" className="bg-[#E3E3E3] rounded-sm h-8 px-2" />
                </div>
                <div className='flex flex-col gap-2'>
                        <label htmlFor="telefono" className=' text-sm font-semibold text-[#25476D]'>Teléfono</label>
                        <input type="tel" id="telefono" className="bg-[#E3E3E3] rounded-sm h-8 px-2" />
                </div>
                <div className='flex flex-col gap-2'>
                        <label htmlFor="mensaje" className='text-sm font-semibold text-[#25476D]'>Mensaje</label>
                        <textarea id="mensaje" className="bg-[#E3E3E3] rounded-sm px-2 py-1 h-34 resize-none" />
                </div>
                <Button type="submit" className="bg-[#25476D] text-white rounded-full p-5 hover:bg-[#1a3a5f] w-fit">Enviar</Button>
            </form>
        </div>
    );
};
export default Form;