import Container from "../ui/Container.jsx";
import { motion } from "motion/react";

const POSITION_CLASSES = {
  'top-left':     'md:absolute md:top-8 md:left-8',
  'top-right':    'md:absolute md:top-8 md:right-8',
  'bottom-left':  'md:absolute md:bottom-8 md:left-8',
  'bottom-right': 'md:absolute md:bottom-8 md:right-8',
  'center':       'md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2',
};

const BubblesDialog = () => {
  const dialog = [
    { text: 'Nadie me avisa, yo tengo que preguntar.', position: 'top-left' },
    { text: 'Me enteré del cambio por un grupo de WhatsApp, no por mi contador.', position: 'top-right' },
    { text: 'No entiendo qué estoy pagando ni por qué.', position: 'bottom-left' },
    { text: 'Le pregunto algo y tarda días en contestarme.', position: 'bottom-right' },
    { text: 'Me siento perdido.', position: 'center' },
  ];

  return (
    <div className="flex flex-col items-center gap-4 md:relative md:h-96">
      {dialog.map((item, index) => (
        <Container
          key={index}
          classNameContainer={`p-4 bg-[#E5E2E2] text-[#1e1e1e] rounded-lg max-w-xs ${POSITION_CLASSES[item.position]}`}
        >
          <p>{item.text}</p>
        </Container>
      ))}
    </div>
  );
};

export default BubblesDialog;