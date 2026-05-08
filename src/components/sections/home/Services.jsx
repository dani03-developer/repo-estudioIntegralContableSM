import { useState } from "react";
import Reveal from "../../animations/Reveal";
import Carousel from "../../mock/Carousel";
const Services =()=>{
    return(
        <section className='flex flex-col justify-center items-center text-center p-3 gap-5 md:justify-start md:items-start xl:mx-15'> 
            <Reveal>
                <div className='text-center text-lg w-30 py-1 font-quicksand md:p-3 border-2 border-[#1e1e1e] rounded-full'>
                <h2>Servicios</h2>
                </div>
            </Reveal>
            <div className='flex flex-col gap-3 justify-content items-center md:text-start md:justify-start md:aling-start'>
                <h3 className='text-xl font-bold font-inter md:text-[2rem]'>Soluciones para lo que necesita tu negocio.</h3>
                <p className='font-quicksand'>Resoluciones ágiles para trámites puntuales, diseñadas para quienes buscan eficiencia sin compromisos mensuales.</p>
            </div>
            <Carousel></Carousel>
            
        </section>
    );
};
export default Services;