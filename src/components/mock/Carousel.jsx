import { useEffect, useState } from "react";
import { IoIosArrowForward,  IoIosArrowBack } from "react-icons/io";
import { Button, buttonVariants } from "../ui/Button";
const Carousel =( {renderCard, list} )=>{
    const [actualScreen, setScreen ] = useState(1); //aquí viene la actualización
    const [actualCard, setCard] = useState(0);
    useEffect(()=>{
        const detectScreen =()=>{ //esto va a decir cuantos cards por pantalla se van a mostrar dependiendo de la pantalla
            if(window.innerWidth < 640){
                setScreen(1);
            }else if(window.innerWidth<768){
                setScreen(2);
            }else if(window.innerWidth<1024){
                setScreen(3);
            }else{
                setScreen(4);
            }
        }
        detectScreen(); //se ejecuta al inicio
        window.addEventListener('resize', detectScreen); //se actualiza si escucha un cambio de tamaño de página

        return ()=>window.removeEventListener('resize', detectScreen) //limpia
        
    }, []);
    const nextCard=()=>{
        if((actualCard+actualScreen)< (list.length)){
            setCard(actualCard+actualScreen);
        }
    };
    const previusCard=()=>{
        if((actualCard-actualScreen)>=0){
            setCard(actualCard-actualScreen);
        }
    }
    const visibleCard=list.slice(actualCard, actualCard+actualScreen);
    return(
        <div className='flex flex-col justify-center items-center w-full gap-8'>
                <div className='flex justify-center gap-6'>
                    {visibleCard.map((service, index) => renderCard(service, index))}
                </div>
                <div className='flex gap-2 w-full'>
                    <Button onClick={previusCard}><IoIosArrowBack /></Button>
                    <Button onClick={nextCard}><IoIosArrowForward /></Button>
                </div>
        </div>
    );
}
export default Carousel;