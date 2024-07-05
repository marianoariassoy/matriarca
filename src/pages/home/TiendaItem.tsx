import Image from '../../components/Image'

interface Props {
  title: string
  image: string
  url: string
  link: string
}

const TiendaItem = ({ title, image, link, url }: Props) => {
  return (
    <article className='relative aspect-[5/7] text-primary hover:text-white transition-all'>
      <div className='absolute z-20 bottom-0 p-6 lg:p-8 flex flex-col'>
        <h4 className='font-secondary text-2xl lg:text-4xl'>{link}</h4>
        <h2 className='font-black text-2xl lg:text-4xl uppercase'>{title}</h2>
      </div>
      <a
        href={url}
        target='_blank'
        rel='noreferrer'
        className='absolute h-full w-full z-10 backdrop-blur cursor-pointer opacity-0 hover:opacity-100  transition-all'
      ></a>
      <Image
        src={image}
        alt={title}
        color='#475045'
      />
    </article>
  )
}

export default TiendaItem
