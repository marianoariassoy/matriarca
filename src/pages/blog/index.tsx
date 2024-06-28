import Layout from '../../layout/Layout'
import { useEffect } from 'react'
// import { useDataContext } from '../../context/useDataContext'
import Image from '../../components/Image'
import Galeria from './Galeria'

const Index = () => {
  // const { lan } = useDataContext()

  useEffect(() => {
    const header = document.getElementById('header-top')
    const footer = document.getElementById('footer')
    const menu = document.getElementById('menu')
    header?.classList.add('bg-secondary')
    footer?.classList.add('bg-secondary')
    menu?.classList.add('bg-secondary-opacity')

    window.scrollTo(0, 0)
    document.title = 'Matriarca - Blog'

    return () => {
      header?.classList.remove('bg-secondary')
      footer?.classList.remove('bg-secondary')
      menu?.classList.remove('bg-secondary-opacity')
    }
  }, [])

  return (
    <Layout>
      <section className='text-secondary mt-28'>
        <div className='p-6 lg:p-20 flex justify-between gap-6 items-end'>
          <div>
            <h2 className='text-4xl lg:text-5xl font-secondary'>blog</h2>
            <h1 className='text-3xl lg:text-6xl font-black uppercase'>mujeres wichi</h1>
          </div>
          <div className='lg:text-3xl font-black'>21/05/24</div>
        </div>
        <div className='aspect-video'>
          <Image
            src='https://images.pexels.com/photos/4456815/pexels-photo-4456815.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt='Woman with a white shirt'
            color='#a09990'
          />
        </div>
        <div className='p-6 lg:p-20 flex flex-col gap-y-6 lg:gap-y-12 text-sm lg:text-xl'>
          <div>
            Desde la orilla del Bañado la Estrella, las mujeres Pilagá crean piezas tejiendo las hojas del Carandillo,
            transmitiendo antiguos saberes.
          </div>
          <div>
            <h2 className='font-black text-xl lg:text-4xl uppercase'>EL PROCESO DEl carandillo</h2>
          </div>
          <div>
            EL PROCESO DEl carandillo Uno de los secretos para poder conseguir buenas hojas es salir los días donde la
            noche previa hubo luna llena. Las mujeres aseguran que las hojas más grandes se encuentran en esos días. El
            carandillo no se cultiva, por lo que las mujeres solo toman parte de las hojas de la planta para que puedan
            seguir creciendo. Ellas salen al monte en grupos de cuatro o cinco y caminan varios kilómetros monte
            adentro. Pueden llegar a recolectar hasta cien hojas, las mujeres más ancianas cargan las hojas en su
            espalda, mientras que las más jóvenes las cargan en su cabeza. Luego de la recolección comienza el
            desfibrado. Este proceso permite que las hojas se transformen en fibras finas y suaves que luego serán
            utilizadas como hilos para tejer la cestería. Las fibras deben reposar al sol un día entero para que tomen
            su característico color blanco. El proceso de tejido se lleva a cabo con agujas. Para eliminar las
            impurezas, se golpean y se raspan las fibras. Luego se enjuagan se secan al sol. Cuanto más fuerte pega el
            sol, más blanca queda la fibra. Las artesanas separan fibra por fibra, que son de distintos grosores, las
            tuercen sobre sus piernas usando ceniza para poder obtener un hilo de textura fuerte. El teñido de la fibra
            es una parte fundamental del proceso. Utilizan las raíces, frutos, cortezas y hojas del monte nativo del
            Gran Chaco para obtener colores. Los más tradicionales son los ocres, el negro y el marrón, pero hasta hoy
            tienen identificados mas de 20 colores que lograron con materia prima natural. A las mujeres Wichí le gustan
            los colores. Poseen técnicas ancestrales en tejidos de punto, como el punto yica y el punto antiguo.
          </div>
        </div>
        <Galeria />
      </section>
    </Layout>
  )
}

export default Index
