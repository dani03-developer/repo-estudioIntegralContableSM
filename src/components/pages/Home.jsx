import Container from '../ui/Container';
import Hero from '../sections/home/Hero';
import PainPoint from '../sections/home/PainPoint';
import Benefits from '../sections/home/Benefits';
import Services from '../sections/home/Services';
import Pricing from '../sections/home/Pricing';
import Testimonials from '../sections/home/Testimonials';
import Fqa from '../sections/home/Fqa';
import Whatsapp from '../layout/Whatsapp';
import Contact from '../sections/home/Contact'

const Home =()=>{
    return(
        <>
        <Container classNameContainer='relative h-full flex flex-col gap-20' >
            <Whatsapp/>
            <Hero />
            <PainPoint />
            <Benefits />
            <Services/>
            <Pricing/>
            <Testimonials/>
            <Contact/>
            <Fqa/>
        </Container>
        </>
    );
};
export default Home;