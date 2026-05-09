import { CheckIcon } from '@heroicons/react/20/solid'
import { Button } from './Button';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const CardPackages =( {id, featured, title, price, description, link, features} )=>{
    return(
        <div
            key={id}
            className={classNames(
              featured ? 'relative bg-gray-800' : 'bg-white/2.5 sm:mx-8 lg:mx-0',
              featured
                ? ''
                : id === 0
                  ? 'rounded-t-3xl  lg:rounded-bl-3xl'
                  : 'rounded-tr-3xl',
              'rounded-3xl p-8 ring-1 ring-white/10 sm:p-10',
            )}
          >
                <h3
                    id={id}
                    className={classNames(featured ? 'text-[#2187CD]-400 font-inter' : 'font-inter text-[#2187CD]', 'text-[#2187CD] font-semibold')}
                >
                {title}
                </h3>
            <p className="mt-4 font-inter flex items-baseline gap-x-2">
              <span
                className={classNames(
                  featured ? 'text-white ' : 'text-white',
                  'text-5xl font-semibold tracking-tight',
                )}
              >
                {price}
              </span>
              <span className={classNames(featured ? 'text-gray-400' : 'text-gray-400', 'text-base')}>/mensual</span>
            </p>
            <p className={classNames(featured ? 'text-gray-300 font-quicksand' : 'text-gray-300 font-quicksand', 'mt-6 text-base/7')}>
              {description}
            </p>
            <ul
              role="list"
              className={classNames(
                featured ? 'text-gray-300 font-quicksand' : 'text-gray-300 font-quicksand',
                'mt-8 space-y-3 text-sm/6 sm:mt-10',
              )}
            >
              {features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(featured ? 'text-[#2187CD]' : 'text-[#2187CD]', 'h-6 w-5 flex-none')}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={link}
            >
              <Button className='mt-8 bg-[#4A7C9E]/58 text-[#f7f4ee] hover:bg-[#4A7C9E]'>Agendar Cita</Button>
            </a>
          </div>
    );
}
export default CardPackages;