import { useState } from 'react'
import { useDataContext } from '../../context/useDataContext'
import BlogItem from './BlogItem'
import BeatLoader from 'react-spinners/BeatLoader'
import useFetch from '../../hooks/useFetch'
import { useInView } from 'react-intersection-observer'

const Blog = () => {
  const { lan } = useDataContext()
  const { data, loading } = useFetch(`/blog/${lan}`)
  const [showItems, setShowItems] = useState(1)

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  })

  if (loading)
    return (
      <div className='w-full flex items-center justify-center my-20'>
        <BeatLoader color='#475045' />
      </div>
    )

  const texts = {
    es: {
      link: 'ver más',
      button: 'leer más',
      link2: 'ver más'
    },
    en: {
      link: 'see more',
      button: 'read more',
      link2: 'see more'
    }
  }

  const showMore = () => {
    setShowItems(prev => prev + 1)
    const windowHeight = window.innerHeight
    const scrollY = window.scrollY
    window.scrollTo({
      top: windowHeight + scrollY,
      behavior: 'smooth'
    })
  }
  return (
    <div
      className='w-full grid grid-cols-1 lg:grid-cols-2 text-white'
      ref={ref}
    >
      <div
        className={`flex flex-col justify-center items-center gap-y-12 lg:h-screen pt-14 ${
          inView ? 'animate-fade-right' : 'opacity-0'
        }`}
      >
        <div className='flex flex-col items-center'>
          <h1 className='text-3xl lg:text-5xl font-thin uppercase tracking-widest'>Matriarca</h1>
          <h2 className='font-secondary text-2xl lg:text-4xl'>blog</h2>
        </div>
        <button
          onClick={showMore}
          className='text-secondary font-bold rounded-full py-3 px-8 transition-colors tracking-widest bg-white hover:text-white bg-primary-hover hidden lg:block'
        >
          {texts[lan].link}
        </button>
      </div>
      <div
        className={`flex flex-col lg:border-l border-white lg:pt-12 pb-12 ${
          inView ? 'animate-fade-left' : 'opacity-0'
        }`}
      >
        {data.slice(0, showItems).map(item => (
          <BlogItem
            key={item.id}
            data={item}
            button={texts[lan].button}
          />
        ))}
        {showItems < data.length && (
          <div className='flex justify-center py-12'>
            <button
              onClick={showMore}
              className='text-secondary font-bold rounded-full py-3 px-8 transition-colors tracking-widest bg-white hover:text-white bg-primary-hover'
            >
              {texts[lan].link2}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog
