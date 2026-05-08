import Reveal from '../../animations/Reveal';
import Container from '../../ui/Container';
import CardBenefits from '../../ui/CardBenefits';
import { FaPersonWalking, FaPenFancy } from "react-icons/fa6";
import { BsReception4 } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
const Benefits = () => {
    const benefits = [
        {
            icon: <FaPersonWalking />,
            title:'Anticipar cada uno de tus pasos',
            subtitle:'Acompañamiento Proactivo',
            description:'Nos diferenciamos por informar antes de que preguntes. Investigamos e intervenimos para que siempre tengas la información necesaria antes de tomar una decisión.',

        },
        {
            icon: <BsReception4 />,
            title:'Potenciar el legado de tu empresa.',
            subtitle:'Crecimiento Familiar',
            description:'Entendemos el valor de las empresas familiares. Brindamos el apoyo diario y la seguridad contable que necesitás para que tu negocio crezca con bases sólidas.',
        },
        {
            icon: <FaPenFancy />,
            title: 'Garantizar transparencia absoluta.',
            subtitle: 'Ética y Actualización',
            description: 'Somos eficaces y estamos en constante actualización. Manejamos tu realidad impositiva y societaria con la ética y el rigor profesional que tu tranquilidad merece.',
        },
        {
            icon: <MdComputer />,
            title: 'Eliminar las distancias geográficas.',
            subtitle: 'Presencia sin Fronteras',
            description: '¿No eres de Jujuy? El espacio no es un límite. Gracias a nuestra modalidad remota, recibís un trato personalizado y profesional estés donde estés, con la calidez de siempre.',
        }
    ]
    return (
        <Container classNameContainer="w-full min-h-screen flex flex-col items-center justify-center">
            <Reveal>
                <div className='text-center py-1 text-lg w-50 font-quicksand md:p-3 border-2 border-[#1e1e1e] rounded-full mb-15'>
                <h2 >Nuestros Beneficios</h2>
                </div>
            </Reveal>
                {benefits.map(i => (<CardBenefits key={i.title}  icon={i.icon} title={i.title} subtitle={i.subtitle} description={i.description} />))}
        </Container>
    );
}
export default Benefits;