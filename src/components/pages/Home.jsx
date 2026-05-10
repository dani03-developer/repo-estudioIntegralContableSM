import Container from '../ui/Container';
import Hero from '../sections/home/Hero';
import PainPoint from '../sections/home/PainPoint';
import Benefits from '../sections/home/Benefits';
import Services from '../sections/home/Services';
import Pricing from '../sections/home/Pricing';
import Testimonials from '../sections/home/Testimonials';
import Fqa from '../sections/home/Fqa';
import Footer from '../layout/Footer';
import Whatsapp from '../layout/Whatsapp';

const Home =()=>{
    return(
        <>
        <Container classNameContainer='relative bg-[#f7f4ee] h-full flex flex-col gap-20' >
            <Whatsapp/>
            <Hero />
            <PainPoint />
            <Benefits />
            <Services/>
            <Pricing/>
            <Testimonials/>
            <Fqa/>
            <Footer/>
        </Container>
        </>
    );
};
export default Home;