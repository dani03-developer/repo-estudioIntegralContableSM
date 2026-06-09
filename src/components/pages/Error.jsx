import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
const Error = () => {
    return(
        <div className='flex flex-col items-center justify-center gap-4 font-inter text-[#1e1e1e] font-semibold text-center h-[50.2vh] md:h-[62.8vh]'>
            <span className='text-[5rem] text-[#C5B9B9]'>😥</span>
            <h1 className='text-3xl'>Error 404</h1>
            <p className='font-quicksand text-[#7d7b7b]'>Página no encontrada</p>
            <Link to='/'>
                <Button className='bg-[#7CB7DF]/58 text-[#25476D] hover:bg-[#1A3E65] hover:text-[#F7F4EE]'>Volver al inicio</Button>
            </Link>
        </div>
    );
};
export default Error;