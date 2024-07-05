import Image from '../../components/Image'
import { Link } from 'wouter'

interface Props {
  id: number
  image: string
  title: string
  link: string
}

const MateriaPrimarItem = ({ id, image, title, link }: Props) => {
  return (
    <article className='flex flex-col gap-y-12 text-primary'>
      <div className='aspect-square lg:aspect-[5/7] overflow-hidden relative'>
        <Link
          href={`/materia-prima/${id}`}
          target='_blank'
          rel='noreferrer'
          className='absolute h-full w-full z-10 backdrop-blur cursor-pointer opacity-0 hover:opacity-100  transition-opacity text-white text-6xl flex items-center justify-center'
        >
          +
        </Link>
        <Image
          src={image}
          alt={title}
          color='#475045'
        />
      </div>
      <div className='flex flex-col gap-y-6 items-center justify-center'>
        <h2 className='font-black text-2xl uppercase tracking-widest'>{title}</h2>
        <Link
          href={`/materia-prima/${id}`}
          className='text-primary font-bold rounded-full py-3 px-8 transition-colors border border-primary tracking-widest bg-primary-hover hover:text-white text-sm lg:text-base'
        >
          {link}
        </Link>
      </div>
    </article>
  )
}

export default MateriaPrimarItem
