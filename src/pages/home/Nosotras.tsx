import { useDataContext } from '../../context/useDataContext'
import { Comillas1, Comillas2 } from '../../components/icons'
import Image from '../../components/Image'

const Nosotras = () => {
  const { lan } = useDataContext()

  const texts = {
    es: {
      title: 'Nosotras'
    },
    en: {
      title: 'About us'
    }
  }

  const data = [
    {
      image: 'https://images.pexels.com/photos/4456815/pexels-photo-4456815.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      image:
        'https://images.pexels.com/photos/17897778/pexels-photo-17897778/free-photo-of-sentado-modelo-maqueta-silla.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      image: 'https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ]

  return (
    <section
      className='py-12 px-6 lg:px-8'
      id='nosotras'
    >
      <div className='w-full max-w-4xl mx-auto text-center text-primary flex flex-col gap-y-8'>
        <h1 className='text-4xl lg:text-7xl font-thin uppercase tracking-widest'>{texts[lan].title}</h1>
        <div className='font-medium text-sm lg:text-xl'>
          <p>
            Somos una distribuidora de productos de base cultural, que conecta los conocimientos ancestrales de las
            mujeres con el mundo.
            <br />
            <br />
            Comercializamos objetos realizados por <strong>mujeres artesanas de la región del Gran Chaco</strong>, que
            utilizan <strong>fibras, tintes y procesos naturales</strong> en su elaboración.
            <br />
            <br />
            Ofrecemos una amplia línea de productos que utilizan chaguar, lana y carandillo como materia prima, y se
            distinguen por ser <strong>arte nativo, sustentable, original y único.</strong>
            <br />
            <br />
            Tenemos <strong>10 años</strong> en el mercado, donde <strong>Matriarca</strong> se ha consolidado como una
            empresa social, sostenida por la red de mujeres indígenas más grande de Argentina. Hoy estamos expandiendo
            nuestra <strong>red con tiendas físicas en Argentina</strong> , y presencia internacional en Italia, Japón y
            Estados Unidos.
          </p>
        </div>
        <div className='font-bold italic lg:text-xl flex gap-x-2 max-w-3xl mx-auto'>
          <span className='opacity-50'>
            <Comillas1 />
          </span>
          <span>
            Nuestro propósito es mantener el legado de las tradiciones ancestrales, empoderando a las mujeres nativas.
          </span>
          <span className='opacity-50'>
            <Comillas2 />
          </span>
        </div>
      </div>

      <div className='w-full grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-6 mt-16 [&>article:last-child]:hidden lg:[&>article:last-child]:block'>
        {data.map((item, index) => (
          <article
            key={index}
            className='aspect-square'
          >
            <Image
              src={item.image}
              alt='nosotras'
              color='#475045'
            />
          </article>
        ))}
      </div>
    </section>
  )
}

export default Nosotras
