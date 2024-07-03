import Image from '../../components/Image'
import { Link } from 'wouter'
import HTML from '../../hooks/useHTML'

const BlogItem = ({ data, button }) => {
  return (
    <article className='py-6 lg:py-12 flex flex-col gap-y-8 text-sm lg:text-base'>
      <div className='px-6 lg:px-8 py-6 uppercase flex justify-between gap-4 items-start border-b border-white font-black text-base lg:text-3xl relative'>
        <h2>{data.title}</h2>
        <h3>{data.date}</h3>
        <div className='absolute w-4 h-4 rounded-full bg-white -bottom-2 -left-2'></div>
      </div>
      <div className='px-6 lg:px-8'>
        <div className='relative aspect-[7/5] overflow-hidden'>
          <Link
            href={`/blog/${data.id}`}
            className='absolute h-full w-full z-10 cursor-pointer opacity-0 hover:opacity-100   backdrop-blur-sm'
          ></Link>
          <Image
            src={data.image}
            alt={data.title}
            color='#FFFFFF'
          />
        </div>
      </div>
      <div className='px-6 lg:px-8 '>
        <HTML text={data.shortext} />
      </div>
      <div className='px-6 lg:px-8'>
        <Link
          href={`/blog/${data.id}`}
          className='text-secondary font-bold rounded-full py-3 px-8 transition-colors tracking-widest bg-white hover:text-white bg-primary-hover'
        >
          {button}
        </Link>
      </div>
    </article>
  )
}

export default BlogItem
