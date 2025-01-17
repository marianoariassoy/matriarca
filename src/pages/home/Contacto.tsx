import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import Form from './Form'
import { useDataContext } from '../../context/useDataContext'
import scroll from '../../utils/scroll'

const Contacto = () => {
  const { lan } = useDataContext()

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  })

  useEffect(() => {
    scroll()
  }, [])

  const texts = {
    es: {
      title: 'Contacto'
    },
    en: {
      title: 'Contact'
    }
  }

  return (
    <div
      className='w-full max-w-4xl mx-auto text-primary flex flex-col gap-y-8'
      ref={ref}
    >
      <h1
        className={`text-4xl lg:text-7xl font-thin uppercase tracking-widest text-center ${
          inView ? 'animate-fade' : 'opacity-0'
        }`}
      >
        {texts[lan].title}
      </h1>
      <div className={`mt-8 px-6 ${inView ? 'animate-fade-up' : 'opacity-0'}`}>
        <Form lan={lan} />
      </div>
    </div>
  )
}

export default Contacto
