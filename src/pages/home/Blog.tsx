import { useDataContext } from '../../context/useDataContext'
import BlogItem from './BlogItem'
import { useState } from 'react'

const Blog = () => {
  const { lan } = useDataContext()
  const [showItems, setShowItems] = useState(1)

  const texts = {
    es: {
      link: 'ver más',
      button: 'leer más',
      link2: 'ver más'
    },
    en: {
      link: 'see more',
      button: 'read more',
      link2: 'see more'
    }
  }

  const data = [
    {
      id: 1,
      title: 'Mujeres wichi',
      date: '21/05/24',
      description:
        'Las mujeres Wichí son suaves y elegantes. Caminan en el monte despacito, pero sin pausa. Ellas tejen las fibras del chaguar como parte de su cultura ancestral. Este saber se transmite de generación en generación y sus diseños surgen del universo cultural Wichí, un pueblo de cazadores-recolectores originario del monte, adaptado a los ritmos de la naturaleza. Por lo general, sus tejidos reproducen los animales del monte, con los cuales el cazador establece una relación íntima: hasta llega a identificarse con el espíritu de la presa. Algunos de los más usados son el lomo de suri, el ojo de lechuza, el pecho del pájaro carpintero o el cuero de víbora.',
      image: 'https://images.pexels.com/photos/4456815/pexels-photo-4456815.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      id: 2,
      title: 'Mujeres wichi',
      date: '21/05/24',
      description:
        'Las mujeres Wichí son suaves y elegantes. Caminan en el monte despacito, pero sin pausa. Ellas tejen las fibras del chaguar como parte de su cultura ancestral. Este saber se transmite de generación en generación y sus diseños surgen del universo cultural Wichí, un pueblo de cazadores-recolectores originario del monte, adaptado a los ritmos de la naturaleza. Por lo general, sus tejidos reproducen los animales del monte, con los cuales el cazador establece una relación íntima: hasta llega a identificarse con el espíritu de la presa. Algunos de los más usados son el lomo de suri, el ojo de lechuza, el pecho del pájaro carpintero o el cuero de víbora.',
      image: 'https://images.pexels.com/photos/4456815/pexels-photo-4456815.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      id: 3,
      title: 'Mujeres wichi',
      date: '21/05/24',
      description:
        'Las mujeres Wichí son suaves y elegantes. Caminan en el monte despacito, pero sin pausa. Ellas tejen las fibras del chaguar como parte de su cultura ancestral. Este saber se transmite de generación en generación y sus diseños surgen del universo cultural Wichí, un pueblo de cazadores-recolectores originario del monte, adaptado a los ritmos de la naturaleza. Por lo general, sus tejidos reproducen los animales del monte, con los cuales el cazador establece una relación íntima: hasta llega a identificarse con el espíritu de la presa. Algunos de los más usados son el lomo de suri, el ojo de lechuza, el pecho del pájaro carpintero o el cuero de víbora.',
      image: 'https://images.pexels.com/photos/4456815/pexels-photo-4456815.jpeg?auto=compress&cs=tinysrgb&w=1920'
    },
    {
      id: 4,
      title: 'Mujeres wichi',
      date: '21/05/24',
      description:
        'Las mujeres Wichí son suaves y elegantes. Caminan en el monte despacito, pero sin pausa. Ellas tejen las fibras del chaguar como parte de su cultura ancestral. Este saber se transmite de generación en generación y sus diseños surgen del universo cultural Wichí, un pueblo de cazadores-recolectores originario del monte, adaptado a los ritmos de la naturaleza. Por lo general, sus tejidos reproducen los animales del monte, con los cuales el cazador establece una relación íntima: hasta llega a identificarse con el espíritu de la presa. Algunos de los más usados son el lomo de suri, el ojo de lechuza, el pecho del pájaro carpintero o el cuero de víbora.',
      image: 'https://images.pexels.com/photos/4456815/pexels-photo-4456815.jpeg?auto=compress&cs=tinysrgb&w=1920'
    }
  ]

  const showMore = () => {
    setShowItems(prev => prev + 1)
    const windowHeight = window.innerHeight
    const scrollY = window.scrollY
    window.scrollTo({
      top: windowHeight + scrollY,
      behavior: 'smooth'
    })
  }
  return (
    <section
      className='bg-secondary'
      id='blog'
    >
      <div className='w-full grid grid-cols-1 lg:grid-cols-2 text-white'>
        <div className='flex flex-col justify-center items-center gap-y-12 lg:h-screen pt-14'>
          <div className='flex flex-col items-center'>
            <h1 className='text-4xl lg:text-7xl font-thin uppercase tracking-widest'>Matriarca</h1>
            <h2 className='font-secondary text-4xl lg:text-7xl'>Blog</h2>
          </div>
          <button
            onClick={showMore}
            className='text-secondary font-bold rounded-full py-3 px-8 transition-colors tracking-widest bg-white hover:text-white bg-primary-hover hidden lg:block'
          >
            {texts[lan].link}
          </button>
        </div>
        <div className='flex flex-col lg:border-l border-white lg:pt-12 pb-12'>
          {data.slice(0, showItems).map(item => (
            <BlogItem
              key={item.id}
              data={item}
              button={texts[lan].button}
            />
          ))}
          {showItems < data.length && (
            <div className='flex justify-center py-12'>
              <button
                onClick={showMore}
                className='text-secondary font-bold rounded-full py-3 px-8 transition-colors tracking-widest bg-white hover:text-white bg-primary-hover'
              >
                {texts[lan].link2}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Blog
