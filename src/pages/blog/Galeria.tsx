import Image from '../../components/Image'

const Galeria = () => {
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
    },
    {
      image: 'https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      image: 'https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      image: 'https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ]

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
