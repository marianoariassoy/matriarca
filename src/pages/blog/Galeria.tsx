import Image from '../../components/Image'
import BeatLoader from 'react-spinners/BeatLoader'
import useFetch from '../../hooks/useFetch'

const Galeria = ({ id }: { id: string }) => {
  const { data, loading } = useFetch(`/imagenes/${id}`)

  if (loading)
    return (
      <div className='w-full flex items-center justify-center my-20'>
        <BeatLoader color='#475045' />
      </div>
    )

  return (
    <section className='grid grid-cols-2 lg:grid-cols-3'>
      {data.map((item, index) => (
        <article
          key={index}
          className='aspect-square'
        >
          <Image
            src={item.image}
            alt=''
            color='#475045'
          />
        </article>
      ))}
    </section>
  )
}

export default Galeria
