import { useDataContext } from '../../context/useDataContext'
import MateriaPrimarItem from './MateriaPrimarItem'
import BeatLoader from 'react-spinners/BeatLoader'
import useFetch from '../../hooks/useFetch'

const MateriaPrima = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/materia-prima/${lan}`)

  if (loading)
    return (
      <div className='w-full flex items-center justify-center my-20'>
        <BeatLoader color='#475045' />
      </div>
    )

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

  return (
    <section
      className='pb-12 lg:mt-12 lg:pb-20'
      id='materia-prima'
    >
      <div className='bg-primary text-white py-14 lg:py-20 px-4 text-center'>
        <h1 className='text-4xl lg:text-7xl font-thin uppercase tracking-widest'>{texts[lan].title}</h1>
        <h2 className='font-secondary text-2xl lg:text-4xl'>{texts[lan].title2}</h2>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-y-14'>
        {data &&
          data.map(item => (
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
