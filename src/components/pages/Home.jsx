import Container from '../ui/Container';
import Navbar from '../layout/Navbar';
import Hero from '../sections/home/Hero';
import PainPoint from '../sections/home/PainPoint';
import Benefits from '../sections/home/Benefits';
import Services from '../sections/home/Services';
const Home =()=>{
    return(
        <>
        <Hero />
        <Container classNameContainer='bg-[#f7f4ee] h-full flex flex-col gap-10' >
            <PainPoint />
            <Benefits />
            <Services/>
        </Container>
        </>
    );
};
export default Home;