import Slider from './Slider'
import useFetch from '../../hooks/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'
import { useDataContext } from '../../context/useDataContext'

const Hero = () => {
  const { data, loading } = useFetch(`/portada`)
  const { lan } = useDataContext()

  const texts = {
    es: {
      link: 'tienda online',
      url: 'https://tienda.matriarca.com.ar'
    },
    en: {
      link: 'online store',
      url: 'https://www.materart.com/'
    }
  }

  return (
    <section
      className='h-screen w-screen flex items-end pb-20 justify-center bg-primary'
      id='hero'
    >
      <a
        href={texts[lan].url}
        target='_blank'
        rel='noreferrer'
        className='z-10 absolute border border-white text-white font-bold  rounded-full py-3 px-8  transition-all tracking-widest text-sm lg:text-base fade-in-delay hover:text-black hover:border-black'
      >
        {texts[lan].link}
      </a>
      <div className='w-full h-full'>{loading ? <BeatLoader color='#FFFFFF' /> : <Slider data={data} />}</div>
    </section>
  )
}

export default Hero
