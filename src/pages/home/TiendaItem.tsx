import Image from '../../components/Image'

interface Props {
  title: string
  image: string
  url: string
  link: string
}

const TiendaItem = ({ title, image, link }: Props) => {
  return (
    <article className='relative aspect-[5/7]'>
      <div className='absolute z-20 bottom-0 p-6 lg:p-8 text-primary flex flex-col'>
        <h4 className='font-secondary text-2xl lg:text-4xl'>{link}</h4>
        <h2 className='font-black text-2xl lg:text-4xl uppercase'>{title}</h2>
      </div>
      <div className='absolute h-full w-full z-10 backdrop-blur cursor-pointer opacity-0 hover:opacity-100  transition-opacity'></div>
      <Image
        src={image}
        alt={title}
        color='#475045'
      />
    </article>
  )
}

export default TiendaItem
