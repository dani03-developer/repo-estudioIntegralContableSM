import Whatsapp from "../layout/Whatsapp";
import HeroUs from "../sections/aboutUs/HeroUs";
import History from "../sections/aboutUs/History";
import OurTeam from "../sections/aboutUs/OurTeam";
import Values from "../sections/aboutUs/Values";
import Testimonials from "../ui/Testimonials";

const Us =()=>{
    return(
        <div className='relative h-full flex flex-col gap-20'>
            <Whatsapp/>
            <HeroUs/>
            <History/>
            <Values/>
            <Testimonials/>
            <OurTeam/>
        </div>
    );
};
export default Us;