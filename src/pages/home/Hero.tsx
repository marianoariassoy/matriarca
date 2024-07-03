import Slider from './Slider'
import useFetch from '../../hooks/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'
import { useDataContext } from '../../context/useDataContext'

const Hero = () => {
  const { data, loading } = useFetch(`/portada`)
  const { lan } = useDataContext()

  const texts = {
    es: {
      link: 'tienda online'
    },
    en: {
      link: 'online store'
    }
  }

  return (
    <section
      className='h-screen w-screen flex items-center justify-center'
      id='hero'
    >
      <a
        href='#tienda'
        className='z-10 absolute text-white font-bold bg-black/30 rounded-full py-3 px-8 hover:bg-black transition-all scroll tracking-widest text-sm lg:text-base'
      >
        {texts[lan].link}
      </a>
      <div className='w-full h-full'>{loading ? <BeatLoader color='#475045' /> : <Slider data={data} />}</div>
    </section>
  )
}

export default Hero
