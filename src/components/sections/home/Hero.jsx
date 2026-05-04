import Navbar from '../../layout/Navbar';
import '../../../styles/Hero.css';
const Hero = () => {
    return (
        <div className='relative h-screen bg-cover bg-center sm:bg-[position:unset] bg-[url("https://i.postimg.cc/0yTDnCCN/Group-56.png")]'>
            <div className='absolute inset-0 bg-black/20 w-full h-full'></div>
            <Navbar />
            <section className='grid grid-rows-2 w-full size-fit bg-white relative h-[calc(100vh-80px)]'>
                <section className='flex justify-center items-center flex-col text-center gap-4 flex-2 bg-red-50'>
                    <h1 className='font-inter font-bold'>ORDENÁ TUS NÚMEROS.<br />CRECE TRANQUILO.</h1>
                    <p className='font-quicksand'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
                </section>
                <section className='grid grid-cols-2'>
                    <section>2</section>
                    <section>
                        3
                    </section>
                </section>
            </section>
        </div>
    );
};

export default Hero;