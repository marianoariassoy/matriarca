import { useDataContext } from '../../context/useDataContext'
import BeatLoader from 'react-spinners/BeatLoader'
import useFetch from '../../hooks/useFetch'
import HTML from '../../hooks/useHTML'

const Comunidad = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/textos/${lan}`)

  if (loading)
    return (
      <div className='w-full flex items-center justify-center my-20'>
        <BeatLoader color='#475045' />
      </div>
    )

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
              <h2 className='font-secondary text-3xl lg:text-4xl'>{texts[lan].title2}</h2>
            </div>
            <div className='border-t border-primary lg:text-xl relative'>
              <div className='absolute w-4 h-4 rounded-full bg-primary -top-2 -left-2'></div>
              <div className='p-6'>
                <HTML text={data[2].text} />
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Comunidad
