import Image from '../../components/Image'

interface Props {
  id: number
  image: string
  title: string
  link: string
}

const MateriaPrimarItem = ({ id, image, title, link }: Props) => {
  return (
    <article className='flex flex-col gap-y-12 text-primary'>
      <div className='aspect-square lg:aspect-[5/7] overflow-hidden'>
        <Image
          src={image}
          alt={title}
        />
      </div>
      <div className='flex flex-col gap-y-6 items-center justify-center'>
        <h2 className='font-black text-2xl uppercase tracking-widest'>{title}</h2>
        <a
          href='#'
          className='text-primary font-bold rounded-full py-3 px-8 transition-colors scroll border border-primary tracking-widest bg-primary-hover hover:text-white'
        >
          {link}
        </a>
      </div>
    </article>
  )
}

export default MateriaPrimarItem
