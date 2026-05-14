import Reveal from '../../animations/Reveal';
import CardPackages from '../../ui/CardPackages';
import PackagesList from '../../mock/PackagesList';
const MonthService =()=>{
    return(
        <div className="flex flex-col justify-center items-center text-center font-quicksand text-[#1e1e1e] gap-10 xl:mx-15 pt-20">
            <Reveal>
                <div className='text-center font-semibold text-lg w-full py-1 md:py-3 px-5 border-2 border-[#1e1e1e] rounded-full'>
                    <h1>Nuestros Servicios</h1>
                </div>
            </Reveal>
            <h2 className='font-bold font-inter font-bold text-2xl sm:text-4xl'>Servicios Mensuales</h2>
            <p className='mx-auto max-w-5xl font-quicksand text-center text-md font-base sm:text-xl/8'>Transformá tu gestión contable en una ventaja estratégica con nuestro asesoramiento mensual proactivo, diseñado para anticipar cada uno de tus desafíos fiscales.</p>
            <div className='grid text-start grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {PackagesList.map((service) => (
                <CardPackages
                    key={service.id}
                    id={service.id}
                    featured={service.featured}
                    title={service.name}
                    price={service.priceMonthly}
                    description={service.description}
                    features={service.features}
                    link={service.href}
                    forceblue={true}
                />
                ))}
            </div>
        </div>
    );
};
export default MonthService;