import { useDataContext } from '../../context/useDataContext'
import { Comillas1, Comillas2 } from '../../components/icons'
import Image from '../../components/Image'
import useFetch from '../../hooks/useFetch'
import HTML from '../../hooks/useHTML'
import BeatLoader from 'react-spinners/BeatLoader'
import { useInView } from 'react-intersection-observer'

const Nosotras = () => {
  const { lan } = useDataContext()
  const url = 'https://marianoarias.soy/sites/matriarca-backend/images-static/'
  const { data, loading } = useFetch(`/textos/${lan}`)

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3
  })

  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.1
  })

  if (loading)
    return (
      <div className='w-full flex items-center justify-center my-20'>
        <BeatLoader color='#475045' />
      </div>
    )

  const texts = {
    es: {
      title: 'Nosotras'
    },
    en: {
      title: 'About us'
    }
  }

  const images = [
    {
      image: url + 'nosotras1.jpg'
    },
    {
      image: url + 'nosotras2.jpg'
    },
    {
      image: url + 'nosotras3.jpg'
    }
  ]

  return (
    <section
      className='py-12 px-6 lg:px-8'
      id='nosotras'
      ref={ref}
    >
      <div className='w-full max-w-4xl mx-auto text-center text-primary flex flex-col gap-y-8'>
        <h1
          className={`text-4xl lg:text-7xl font-thin uppercase tracking-widest ${
            inView ? 'animate-fade' : 'opacity-0'
          }`}
          ref={ref}
        >
          {texts[lan].title}
        </h1>
        <div className={`font-medium text-sm lg:text-xl ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
          <HTML text={data[0].text} />
        </div>
        <div
          className={`font-bold italic lg:text-xl flex gap-x-2 max-w-3xl mx-auto ${
            inView ? 'animate-delay-1000 animate-fade' : 'opacity-0'
          }`}
        >
          <span className='opacity-50'>
            <Comillas1 />
          </span>
          <span>
            <HTML text={data[1].text} />
          </span>
          <span className='opacity-50'>
            <Comillas2 />
          </span>
        </div>
      </div>

      <div className='w-full grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 mt-16 [&>article:last-child]:hidden lg:[&>article:last-child]:block'>
        {images.map((item, index) => (
          <article
            key={index}
            className={`aspect-square ${index === 1 ? 'animate-delay-1000' : index === 2 && 'animate-delay-500'} ${
              inView2 ? 'animate-fade' : 'opacity-0'
            }`}
            ref={ref2}
          >
            <Image
              src={item.image}
              alt='nosotras'
              color='#475045'
            />
          </article>
        ))}
      </div>
    </section>
  )
}

export default Nosotras
