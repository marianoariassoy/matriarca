const ComunidadItem2 = () => {
  const data = [
    {
      title: 'Asociaciones',
      title_en: 'Associations',
      number: '29 ',
      image: './images/icon1.svg'
    },
    {
      title: 'Mujeres',
      title_en: 'Women',
      number: '2600',
      image: '/images/icon2.svg'
    },
    {
      title: 'Prov. de Arg. Formosa, Chaco Salta y jujuy',
      title_en: 'Province of Argentina, Chaco, Salta and jujuy',
      number: '4',
      image: './images/icon3.svg'
    },
    {
      title: 'Etnias:wichí, qomle´ec pilagá, qom y kolla.',
      title_en: 'Ethnicities: wichí, qomle´ec pilagá, qom and kolla.',
      number: '5',
      image: './images/icon4.svg'
    }
  ]

  return (
    <article className='lg:h-screen w-screen py-20 lg:py-32 px-6 lg:px-12'>
      <div className='h-full w-full max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 comunidad-item-2'>
        {data.map((item, index) => (
          <article
            className='flex flex-col'
            key={index}
          >
            <div className='relative pb-8 h-1/2 border-b-2 border-primary flex items-end'>
              <div className='absolute w-4 h-4 rounded-full bg-primary -bottom-2'></div>
              <img
                src={item.image}
                alt={item.title}
                className='w-12 lg:w-auto'
              />
            </div>
            <div className='flex flex-col gap-y-3 py-6 lg:p-6'>
              <div className='text-4xl lg:text-5xl font-bold'>{item.number}</div>
              <div className='uppercase lg:text-xl font-medium tracking-wider'>{item.title}</div>
            </div>
          </article>
        ))}
      </div>
    </article>
  )
}

export default ComunidadItem2
