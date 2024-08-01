import { useDataContext } from '../../context/useDataContext'
import TiendaItem from './TiendaItem'

const Tienda = () => {
  const { lan } = useDataContext()
  const url = 'https://matriarca.com.ar/backend/images-static/'

  const texts = {
    es: {
      link: 'ver',
      link2: 'ver tienda',
      url: 'https://tienda.matriarca.com.ar'
    },
    en: {
      link: 'view',
      link2: 'online store',
      url: 'https://www.materart.com/'
    }
  }

  const data = [
    {
      title: 'Deco',
      title_en: 'Deco',
      image: url + 'hogar.jpg',
      url: 'https://tienda.matriarca.com.ar/hogar/',
      url_en: 'https://www.materart.com/collections/matriarca-home'
    },
    {
      title: 'Vestir',
      title_en: 'Wear',
      image: url + 'indumentaria.jpg',
      url: 'https://tienda.matriarca.com.ar/indumentaria/',
      url_en: 'https://www.materart.com/collections/wear'
    },
    {
      title: 'Accesorios',
      title_en: 'Accessories',
      image: url + 'capsulas.jpg',
      url: 'https://tienda.matriarca.com.ar/accesorios1/',
      url_en: 'https://www.materart.com/collections/accessories'
    }
  ]

  return (
    <>
      <div className='w-full p-6 lg:p-8 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6'>
        {data.map((item, index) => (
          <TiendaItem
            key={index}
            image={item.image}
            url={lan === 'es' ? item.url : item.url_en}
            link={texts[lan].link}
            title={lan === 'es' ? item.title : item.title_en}
            index={index}
          />
        ))}
      </div>
      <div className='flex justify-center mt-6'>
        <a
          href={texts[lan].url}
          target='_blank'
          rel='noopener noreferrer'
          className='text-primary font-bold rounded-full py-3 px-8 transition-colors border border-primary tracking-widest bg-primary-hover hover:text-white text-sm lg:text-base'
        >
          {texts[lan].link2}
        </a>
      </div>
    </>
  )
}

export default Tienda
