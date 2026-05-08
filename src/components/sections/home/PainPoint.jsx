
import SplitText from '../../animations/SplitText.jsx';
import Container from '../../ui/Container.jsx';
import BubblesDialog from '../../animations/BubblesDialog.jsx';
const PainPoint = () => {
    return(
        <Container classNameContainer="min-h-screen flex flex-col items-center justify-center text-center gap-6 py-16">
            <SplitText
            tag='h2'
            text='SABEMOS LO QUE TE QUITA EL SUEÑO'
            highlightWords={['SUEÑO']}
            highlightClass='text-[#25476d] bg-[#c8d9e6] px-2'
            className='font-inter font-bold text-3xl sm:text-4xl lg:text-5xl'/>
        </Container> 
    );
}
export default PainPoint;