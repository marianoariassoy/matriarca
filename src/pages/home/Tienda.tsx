import { useDataContext } from '../../context/useDataContext'
import TiendaItem from './TiendaItem'

const Tienda = () => {
  const { lan } = useDataContext()
  const url = 'https://marianoarias.soy/sites/matriarca-backend/images-static/'

  const texts = {
    es: {
      link: 'ver',
      link2: 'ver tienda'
    },
    en: {
      link: 'view',
      link2: 'view store'
    }
  }

  const data = [
    {
      title: 'Hogar',
      title_en: 'Home',
      image: url + 'hogar.jpg',
      url: 'https://tienda.matriarca.com.ar/hogar/'
    },
    {
      title: 'Indumentaria',
      title_en: 'Clothing',
      image: url + 'indumentaria.jpg',
      url: 'https://tienda.matriarca.com.ar/indumentaria/'
    },
    {
      title: 'Capsulas',
      title_en: 'Capsules',
      image: url + 'capsulas.jpg',
      url: 'https://tienda.matriarca.com.ar/capsulas-especiales/'
    }
  ]

  return (
    <section id='tienda'>
      <div className='w-full p-6 lg:p-8 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6'>
        {data.map((item, index) => (
          <TiendaItem
            key={index}
            image={item.image}
            url={item.url}
            link={texts[lan].link}
            title={lan === 'es' ? item.title : item.title_en}
            index={index}
          />
        ))}
      </div>
      <div className='flex justify-center mt-6'>
        <a
          href='https://tienda.matriarca.com.ar/productos/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-primary font-bold rounded-full py-3 px-8 transition-colors border border-primary tracking-widest bg-primary-hover hover:text-white text-sm lg:text-base'
        >
          {texts[lan].link2}
        </a>
      </div>
    </section>
  )
}

export default Tienda
