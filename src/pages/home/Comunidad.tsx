import { useDataContext } from '../../context/useDataContext'

const Comunidad = () => {
  const { lan } = useDataContext()

  const texts = {
    es: {
      title: 'Comunidad',
      title2: 'matriarca'
    },
    en: {
      title: 'Community',
      title2: 'matriarca'
    }
  }
  return (
    <section
      className='py-20 lg:py-32'
      id='comunidad'
    >
      <article>
        <div className='w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-6'>
          <div className='lg:w-1/3 flex items-end justify-center'>
            <img
              src='/images/img-comunidad-1.png'
              alt='Imagen comunidad'
              className='w-8/12 lg:w-full'
            />
          </div>
          <div className='lg:w-2/3 flex flex-col justify-between gap-y-12'>
            <div className='w-full flex flex-col items-center justify-center lg:mb-12'>
              <h1 className='text-4xl lg:text-7xl font-thin uppercase tracking-widest'>{texts[lan].title}</h1>
              <h2 className='font-secondary text-5xl lg:text-7xl'>{texts[lan].title2}</h2>
            </div>
            <div className='border-t border-primary lg:text-xl relative'>
              <div className='absolute w-4 h-4 rounded-full bg-primary -top-2 -left-2'></div>
              <p className='p-6'>
                <strong>MATRIARCA </strong>
                es una gran red colaborativa que comercializa productos de arte nativo realizados por mujeres indígenas
                de la región del Chaco Argentino.
                <br /> <br />
                Este ecosistema social en red tiene un camino recorrido de más de 20 años, y está formado por mujeres
                emprendedoras que integran:
              </p>
            </div>
          </div>
        </div>
      </article>
      <article>
        <div className='w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 px-6'>
          <div className='lg:w-1/3 flex items-end justify-center'>
            <img
              src='/images/img-comunidad-1.png'
              alt='Imagen comunidad'
              className='w-8/12 lg:w-full'
            />
          </div>
          <div className='lg:w-2/3 flex flex-col justify-between gap-y-12'>
            <div className='w-full flex flex-col items-center justify-center lg:mb-12'>
              <h1 className='text-4xl lg:text-7xl font-thin uppercase tracking-widest'>{texts[lan].title}</h1>
              <h2 className='font-secondary text-5xl lg:text-7xl'>{texts[lan].title2}</h2>
            </div>
            <div className='border-t border-primary lg:text-xl relative'>
              <div className='absolute w-4 h-4 rounded-full bg-primary -top-2 -left-2'></div>
              <p className='p-6'>
                <strong>MATRIARCA </strong>
                es una gran red colaborativa que comercializa productos de arte nativo realizados por mujeres indígenas
                de la región del Chaco Argentino.
                <br /> <br />
                Este ecosistema social en red tiene un camino recorrido de más de 20 años, y está formado por mujeres
                emprendedoras que integran:
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Comunidad
