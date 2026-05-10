// src/components/layout/Footer.jsx
import { BsInstagram } from 'react-icons/bs';
import Navegation from '../mock/Navegation';
import { Button } from '../ui/Button';

const Footer = () => {
  return (
    <div className='pt-20 sm:pt-40 lx:pt-60'>

         <footer className=' relative border-t bg-[#1e1e1e] text-[#f4f7ee] font-inter items-end justify-end'>
        <img className='absolute w-90  -top-25 left-1/2 -translate-x-1/2 sm:w-120 md:w-150 md:-top-35 xl:w-160 z-10' src="https://i.postimg.cc/J76kh6mT/Banner-Footer.png" alt="" />
        <Button className='absolute cursor-pointer z-20 bg-[#25476d] hover:bg-[#25476d] left-1/2 -translate-x-1/2 -top-1 sm:top-[10%] md:top-[12%] xl:top-[20%]'>¡Hablemos!</Button>
            <section className=' container  mx-auto pt-15 pb-10  px-4 md:px-5 sm:pt-35 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8'>
        <section>
          <img src='https://i.postimg.cc/fTsRDYSb/Group-33.png' className='h-10 md:h-12 xl:h-13' alt='SM' />
        </section>
        <section className='hidden lg:block'>
          <ul className='flex gap-10 mb-0 text-[#f4f7ee]'>
            {Navegation.map((item) => (
              <li key={item.name}>
                <a href={item.href}>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className='hidden lg:flex gap-4 text-xl'>
          <BsInstagram className=' cursor-pointer xl:text-2xl' />
        </section>

        <section className='lg:hidden grid grid-cols-2'>
          <ul className='list-none'>
            {Navegation.slice(0, 2).map((item) => (
              <li key={item.name} className='mb-2'>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
          <ul className='list-none'>
            {Navegation.slice(2).map((item) => (
              <li key={item.name} className='mb-2'>
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
            <li className='flex gap-2 text-lg'>
              <BsInstagram />
            </li>
          </ul>
        </section>

      </section>
    </footer>
    </div>
  )
}

export default Footer;