import MonthService from '../sections/services/MonthServices';
import Whatsapp from '../layout/Whatsapp';
const Services =()=>{
    return(
        <div className='relative h-full flex flex-col gap-20'>
            <Whatsapp/>
            <MonthService />
        </div>

    );
};
export default Services;