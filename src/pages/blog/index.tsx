import Layout from '../../layout/Layout'
import { useEffect } from 'react'
import { useDataContext } from '../../context/useDataContext'
import Image from '../../components/Image'
import Galeria from './Galeria'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'wouter'
import HTML from '../../hooks/useHTML'
import BeatLoader from 'react-spinners/BeatLoader'

const Index = () => {
  const { lan } = useDataContext()
  const { id } = useParams() as { id: string }
  const { data, loading } = useFetch(`/blog/${lan}`)
  let dataFilter = []

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
        <section className='text-secondary mt-28'>
          <div className='p-6 lg:p-20 flex justify-between gap-6 items-end'>
            <div>
              <h2 className='text-2xl lg:text-5xl font-secondary'>blog</h2>
              <h1 className='text-3xl lg:text-6xl font-black uppercase'>{dataFilter[0].title}</h1>
            </div>
            <div className='lg:text-3xl font-black'>{dataFilter[0].date}</div>
          </div>

          {dataFilter[0].image2 && (
            <div className='aspect-video'>
              <Image
                src={dataFilter[0].image2}
                alt={dataFilter[0].title}
                color='#a09990'
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
            <HTML text={dataFilter[0].text} />
          </div>
          <Galeria id={dataFilter[0].id} />
        </section>
      )}
    </Layout>
  )
}

export default Index
