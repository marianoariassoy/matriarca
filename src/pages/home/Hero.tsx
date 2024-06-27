import Slider from './Slider'
import useFetch from '../../hooks/useFetch'
import BeatLoader from 'react-spinners/BeatLoader'
import { useDataContext } from '../../context/useDataContext'

const Hero = () => {
  const { data, loading } = useFetch(`/portada`)
  const { lan } = useDataContext()

  const data2 = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/4456815/pexels-photo-4456815.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      id: 2,
      image:
        'https://images.pexels.com/photos/17897778/pexels-photo-17897778/free-photo-of-sentado-modelo-maqueta-silla.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=1920'
    }
  ]

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
      className='h-screen w-screen bg-primary flex items-center justify-center'
      id='hero'
    >
      <a
        href='#tienda'
        className='z-10 absolute text-white font-bold bg-black/30 rounded-full py-3 px-8 hover:bg-black transition-colors scroll tracking-widest'
      >
        {texts[lan].link}
      </a>
      <div className='w-full h-full'>{loading ? <BeatLoader color='#FFF' /> : <Slider data={data2} />}</div>
    </section>
  )
}

export default Hero
