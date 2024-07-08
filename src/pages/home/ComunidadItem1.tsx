import HTML from '../../hooks/useHTML'

const ComunidadItem1 = ({ data }) => {
  return (
    <article className='lg:h-screen w-screen  py-20 lg:py-32 px-6 lg:px-12'>
      <div className='lg:h-full w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center'>
        <div className='lg:w-1/3 flex justify-center'>
          <img
            src='/images/img-comunidad-1.png'
            alt='Imagen comunidad'
            className='w-8/12 lg:w-full'
          />
        </div>
        <div className='lg:w-2/3 h-full flex flex-col'>
          <div className='h-1/2'></div>
          <div className='h-1/2 border-t-2 border-primary lg:text-xl relative'>
            <div className='absolute w-4 h-4 rounded-full bg-primary -top-2 -left-2'></div>
            <div className='py-6 lg:p-6 lg:leading-8'>
              <HTML text={data[2].text} />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ComunidadItem1
