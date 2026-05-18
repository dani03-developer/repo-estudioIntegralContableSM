import HeroContact from '../sections/contact/HeroContact';
import Whatsapp from '../layout/Whatsapp';
import FormSection from '../sections/contact/FormSection';
import Date from '../sections/contact/Date';

const Contact =()=>{
    return(
        <div className='relative h-full flex flex-col gap-20'>
            <Whatsapp/>
            <HeroContact/>
            <FormSection/>
            <Date/>
        </div>
    );
};
export default Contact;