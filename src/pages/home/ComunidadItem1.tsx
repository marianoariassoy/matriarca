import HTML from '../../hooks/useHTML'
import { useInView } from 'react-intersection-observer'

const ComunidadItem1 = ({ data }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })

  return (
    <article
      className='lg:h-screen w-screen  py-20 lg:py-32 px-6 lg:px-12'
      ref={ref}
    >
      <div className='lg:h-full w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center'>
        <div className={`lg:w-1/3 flex justify-center  ${inView ? 'animate-fade-right' : 'opacity-0'}`}>
          <img
            src='/images/img-comunidad-1.png'
            alt='Imagen comunidad'
            className='w-8/12 lg:w-full'
          />
        </div>
        <div
          className={`lg:w-2/3 h-full flex flex-col animate-delay-500 ${inView ? 'animate-fade-left' : 'opacity-0'}`}
        >
          <div className='h-1/2'></div>
          <div className='h-1/2 border-t-2 border-primary lg:text-xl relative'>
            <div className='absolute w-4 h-4 rounded-full bg-primary -top-2 -left-2'></div>
            <div className='py-6 lg:p-6 lg:leading-8'>
              <HTML text={data[2].text} />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ComunidadItem1
