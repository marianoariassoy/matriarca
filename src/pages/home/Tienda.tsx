import { useDataContext } from '../../context/useDataContext'
import TiendaItem from './TiendaItem'

const Tienda = () => {
  const { lan } = useDataContext()

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

      image: 'https://images.pexels.com/photos/4456815/pexels-photo-4456815.jpeg?auto=compress&cs=tinysrgb&w=600',
      url: '#'
    },
    {
      title: 'Indumentaria',
      title_en: 'Clothing',
      image:
        'https://images.pexels.com/photos/17897778/pexels-photo-17897778/free-photo-of-sentado-modelo-maqueta-silla.jpeg?auto=compress&cs=tinysrgb&w=600',
      url: '#'
    },
    {
      title: 'Capsulas',
      title_en: 'Capsules',
      image: 'https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=600',
      url: '#'
    }
  ]

  return (
    <section id='tienda'>
      <div className='w-full p-4 lg:p-8 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6'>
        {data.map((item, index) => (
          <TiendaItem
            key={index}
            image={item.image}
            url={item.url}
            link={texts[lan].link}
            title={lan === 'es' ? item.title : item.title_en}
          />
        ))}
      </div>
      <div className='flex justify-center mt-6'>
        <a
          href='#'
          className='text-primary font-bold rounded-full py-3 px-8 transition-colors scroll border border-primary tracking-widest bg-primary-hover hover:text-white'
        >
          {texts[lan].link2}
        </a>
      </div>
    </section>
  )
}

export default Tienda
