import Layout from '../../layout/Layout'
import { useEffect } from 'react'
import { useDataContext } from '../../context/useDataContext'
import Image from '../../components/Image'
import Galeria from '../blog/Galeria'
import BeatLoader from 'react-spinners/BeatLoader'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'wouter'
import HTML from '../../hooks/useHTML'

const Index = () => {
  const { lan } = useDataContext()
  const { id } = useParams() as { id: string }
  const { data, loading } = useFetch(`/materia-prima/${lan}`)
  let dataFilter = []

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Matriarca - Materia prima'
    const header = document.getElementById('header-top')
    const logo = document.getElementById('logo')
    header?.classList.remove('py-8')
    header?.classList.add('py-3')
    logo?.classList.remove('lg:text-xl')
    return () => {
      header?.classList.remove('py-3')
      header?.classList.add('py-8')
      logo?.classList.add('lg:text-xl')
    }
  }, [])

  const texts = {
    es: {
      title: 'materia prima'
    },
    en: {
      title: 'primary material'
    }
  }

  if (data) {
    dataFilter = data.filter(item => item.id === +id)
  }

  return (
    <Layout>
      {loading ? (
        <div className='w-full flex items-center justify-center my-20'>
          <BeatLoader color='#475045' />
        </div>
      ) : (
        <section className='text-primary'>
          <div className='p-6 lg:p-20 lg:pb-16 flex items-center gap-6'>
            {dataFilter[0].icon && (
              <div>
                <img
                  src={dataFilter[0].icon}
                  className='h-14 lg:h-20'
                />
              </div>
            )}
            <div>
              <h2 className='text-xl lg:text-4xl font-secondary'>{texts[lan].title}</h2>
              <h1 className='text-3xl lg:text-6xl font-black uppercase'>{dataFilter[0].title}</h1>
            </div>
          </div>

          {dataFilter[0].image2 && (
            <div className='aspect-video'>
              <Image
                src={dataFilter[0].image2}
                alt={dataFilter[0].title}
                color='#475045'
              />
            </div>
          )}

          <div className='p-6 lg:p-20 flex flex-col gap-y-6 lg:gap-y-12 text-sm lg:text-xl'>
            <HTML text={dataFilter[0].shortext} />

            {dataFilter[0].title2 && (
              <div>
                <h2 className='font-black text-xl lg:text-4xl uppercase'>{dataFilter[0].title2}</h2>
              </div>
            )}

            <div className='flex justify-between items-start gap-6'>
              <div>
                {dataFilter[0].image && (
                  <div className='float-right ml-8 mb-8 w-full max-w-lg'>
                    <Image
                      src={dataFilter[0].image3}
                      alt={dataFilter[0].title}
                      color='#475045'
                    />
                  </div>
                )}
                <HTML text={dataFilter[0].text} />
              </div>
            </div>
          </div>
          <Galeria id={dataFilter[0].id} />
        </section>
      )}
    </Layout>
  )
}

export default Index
