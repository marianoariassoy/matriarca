import Layout from '../../layout/Layout'
import { useEffect } from 'react'
import { useDataContext } from '../../context/useDataContext'
import Image from '../../components/Image'
import Galeria from '../blog/Galeria'

const Index = () => {
  const { lan } = useDataContext()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Matriarca - Materia prima'
  }, [])

  const texts = {
    es: {
      title: 'materia prima'
    },
    en: {
      title: 'primary material'
    }
  }

  return (
    <Layout>
      <section className='text-primary mt-28'>
        <div className='p-6 lg:p-20 flex items-center gap-6'>
          <div>
            <img src='/images/carandillo.svg' />
          </div>
          <div>
            <h2 className='text-3xl lg:text-5xl font-secondary'>{texts[lan].title}</h2>
            <h1 className='text-3xl lg:text-6xl font-black uppercase'>Chaguar</h1>
          </div>
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
            Las mujeres wichí encantan con su estilo elegante y refinado. Caminan en el monte despacito, pero sin pausa
            inspirándose en el vínculo profundo que tienen con sus territorios, recogiendo las plantas de chaguar y los
            colorantes que necesitan. Ellas tejen las fibras del chaguar como parte de su cultura ancestral. Este saber
            se transmite de generación en generación y sus diseños surgen del universo cultural wichí, un pueblo de
            cazadores-recolectores originario de estos territorios y adaptado a los ritmos de la naturaleza. Los dibujos
            tienen una función escaramantica ya quetejidos reproducen los animales del monte y sus espíritus guias,
            protegiendo a quienes recorren el monte. Algunos de los más usados son el lomo de suri, el ojo de lechuza,
            el pecho del pájaro carpintero o el cuero de víbora.
          </div>
          <div>
            <h2 className='font-black text-xl lg:text-4xl uppercase'>EL PROCESO DEL CHAGUAR</h2>
          </div>
          <div className='flex justify-between items-start gap-6'>
            <div>
              <img
                src='https://images.pexels.com/photos/4456815/pexels-photo-4456815.jpeg?auto=compress&cs=tinysrgb&w=600'
                className='float-right ml-8 mb-8 w-full max-w-lg'
                alt=''
              />
              EL PROCESO DEl carandillo Uno de los secretos para poder conseguir buenas hojas es salir los días donde la
              noche previa hubo luna llena. Las mujeres aseguran que las hojas más grandes se encuentran en esos días.
              El carandillo no se cultiva, por lo que las mujeres solo toman parte de las hojas de la planta para que
              puedan seguir creciendo. Ellas salen al monte en grupos de cuatro o cinco y caminan varios kilómetros
              monte adentro. Pueden llegar a recolectar hasta cien hojas, las mujeres más ancianas cargan las hojas en
              su espalda, mientras que las más jóvenes las cargan en su cabeza. Luego de la recolección comienza el
              desfibrado. Este proceso permite que las hojas se transformen en fibras finas y suaves que luego serán
              utilizadas como hilos para tejer la cestería. Las fibras deben reposar al sol un día entero para que tomen
              su característico color blanco. El proceso de tejido se lleva a cabo con agujas. Para eliminar las
              impurezas, se golpean y se raspan las fibras. Luego se enjuagan se secan al sol. Cuanto más fuerte pega el
              sol, más blanca queda la fibra. Las artesanas separan fibra por fibra, que son de distintos grosores, las
              tuercen sobre sus piernas usando ceniza para poder obtener un hilo de textura fuerte. El teñido de la
              fibra es una parte fundamental del proceso. Utilizan las raíces, frutos, cortezas y hojas del monte nativo
              del Gran Chaco para obtener colores. Los más tradicionales son los ocres, el negro y el marrón, pero hasta
              hoy tienen identificados mas de 20 colores que lograron con materia prima natural. A las mujeres Wichí le
              gustan los colores. Poseen técnicas ancestrales en tejidos de punto, como el punto yica y el punto
              antiguo.
            </div>
          </div>
        </div>
        <Galeria />
      </section>
    </Layout>
  )
}

export default Index
