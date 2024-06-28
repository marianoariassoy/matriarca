import { useDataContext } from '../../context/useDataContext'
import MateriaPrimarItem from './MateriaPrimarItem'

const MateriaPrima = () => {
  const { lan } = useDataContext()

  const texts = {
    es: {
      title: 'Materia',
      title2: 'prima',
      link: 'conocer más'
    },
    en: {
      title: 'Material',
      title2: 'primary',
      link: 'know more'
    }
  }

  const data = [
    {
      id: 1,
      title: 'Chaguar',
      image: 'https://images.pexels.com/photos/4456815/pexels-photo-4456815.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 2,
      title: 'Lana',
      image:
        'https://images.pexels.com/photos/17897778/pexels-photo-17897778/free-photo-of-sentado-modelo-maqueta-silla.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      id: 3,
      title: 'Carandillo',
      image: 'https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ]

  return (
    <section
      className='pb-12 lg:mt-12 lg:pb-20'
      id='materia-prima'
    >
      <div className='bg-primary text-white py-14 lg:py-20 px-4 text-center'>
        <h1 className='text-4xl lg:text-7xl font-thin uppercase tracking-widest'>{texts[lan].title}</h1>
        <h2 className='font-secondary text-5xl lg:text-7xl'>{texts[lan].title2}</h2>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-14'>
        {data.map(item => (
          <MateriaPrimarItem
            key={item.id}
            id={item.id}
            link={texts[lan].link}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>
    </section>
  )
}

export default MateriaPrima
