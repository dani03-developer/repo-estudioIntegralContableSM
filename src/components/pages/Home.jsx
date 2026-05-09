import Container from '../ui/Container';
import Navbar from '../layout/Navbar';
import Hero from '../sections/home/Hero';
import PainPoint from '../sections/home/PainPoint';
import Benefits from '../sections/home/Benefits';
import Services from '../sections/home/Services';
import Pricing from '../sections/home/Pricing';
import Testimonials from '../sections/home/Testimonials';
const Home =()=>{
    return(
        <>
        <Hero />
        <Container classNameContainer='bg-[#f7f4ee] h-full flex flex-col gap-20' >
            <PainPoint />
            <Benefits />
            <Services/>
            <Pricing/>
            <Testimonials/>
        </Container>
        </>
    );
};
export default Home;