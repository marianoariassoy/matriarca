import Image from '../../components/Image'
import { useInView } from 'react-intersection-observer'

interface Props {
  title: string
  image: string
  url: string
  link: string
  index: number
}

const TiendaItem = ({ title, image, link, url, index }: Props) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  })

  return (
    <article
      className={`relative aspect-[5/7] text-primary transition-all
        ${index === 1 ? 'animate-delay-1000' : index === 2 && 'animate-delay-500'}
        ${inView ? 'animate-fade' : 'opacity-0'}`}
      ref={ref}
    >
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
