import { useDataContext } from '../../context/useDataContext'
import BeatLoader from 'react-spinners/BeatLoader'
import useFetch from '../../hooks/useFetch'
import ComunidadItem1 from './ComunidadItem1'
import ComunidadItem2 from './ComunidadItem2'
import ComunidadItem3 from './ComunidadItem3'
import ComunidadItem4 from './ComunidadItem4'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { Back, Forward } from '../../components/icons'

const Comunidad = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/textos/${lan}`)

  if (loading)
    return (
      <div className='w-full flex items-center justify-center my-20'>
        <BeatLoader color='#475045' />
      </div>
    )

  const sliderProperties = {
    autoplay: false,
    transitionDuration: 400,
    indicators: true,
    arrows: true,
    infinite: true,
    pauseOnHover: false,
    prevArrow: (
      <button className='ml-12 top-0 left-auto right-20 flex justify-end lg:hover:ml-10 transition-all lg:right-auto lg:top-auto'>
        <Back />
      </button>
    ),
    nextArrow: (
      <button className='mr-6 top-0 lg:mr-12 lg:hover:mr-10 transition-all lg:top-auto'>
        <Forward />
      </button>
    )
  }

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
      className='relative lg:h-screen w-screen comunidad-item py-12 lg:py-0'
      id='comunidad'
    >
      <div className='lg:absolute px-6 right-20 top-32 flex flex-col z-10'>
        <h1 className='text-4xl lg:text-7xl font-thin uppercase tracking-widest'>{texts[lan].title}</h1>
        <h2 className='font-secondary text-3xl lg:text-4xl'>{texts[lan].title2}</h2>
      </div>

      <Slide {...sliderProperties}>
        <ComunidadItem1 data={data} />
        <ComunidadItem2 />
        <ComunidadItem3 data={data} />
        <ComunidadItem4 data={data} />
      </Slide>
    </section>
  )
}

export default Comunidad
