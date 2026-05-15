import Reveal from "../../animations/Reveal";
import SplitText from "../../animations/SplitText";
import OurTeamList from "../../mock/OurTeamList";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
const OurTeam =()=>{
    return(
        <div className='mx-auto flex max-w-screen-xl flex-col gap-16  justify-center items-center text-center text-[#1e1e1e]'>
            <Reveal>
                <div className='text-center text-lg w-30 py-1 font-quicksand md:p-3 border-2 border-[#1e1e1e] rounded-full'>
                <p>Equipo</p>
                </div>
            </Reveal>
            <SplitText
                tag='h2'
                text='Nuestro equipo, tu respaldo contable.'
                className='mt-2 text-3xl font-inter font-bold tracking-tight text-balance text-[#1e1e1e] sm:text-4xl'
            />
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                {OurTeamList.map((member, index) => (
                    <div key={index} className='flex relative flex-col w-70 items-center text-start gap-4 rounded-lg'>
                        <img src={member.photo} alt={member.name} className='object-cover' />
                        <div className='absolute flex flex-col items-start p-10 place-content-between h-full p-4 rounded-lg w-full'>
                            <div className='flex flex-col text-[#f4f7ee]'>
                                <p className='text-xl font-bold font-inter'>{member.name}</p>
                                <p className='font-quicksand'>{member.role}</p>
                            </div>
                            <div className='flex gap-2 mt-2 justify-center text-[#25476D]'>
                                <Link to={member.linkedIn} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className='text-3xl' />
                                </Link>
                                <Link to={member.instagram} target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className='text-3xl' />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default OurTeam;