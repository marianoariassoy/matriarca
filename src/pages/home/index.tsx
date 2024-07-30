import { useEffect } from 'react'
import { useLocation } from 'wouter'
import Layout from '../../layout/Layout'
import Blog from './Blog'
import Comunidad from './Comunidad'
import Hero from './Hero'
import MateriaPrima from './MateriaPrima'
import Nosotras from './Nosotras'
import Tienda from './Tienda'
import Contacto from './Contacto'
import Popup from './Popup'

const Index = () => {
  const [location] = useLocation()

  useEffect(() => {
    document.title = 'Matriarca'
    const header = document.querySelector('header')
    header?.classList.remove('sticky')
    header?.classList.add('fixed')
    return () => {
      header?.classList.remove('fixed')
      header?.classList.add('sticky')
    }
  }, [])

  useEffect(() => {
    if (location === '/') return
    const target = location.replace('/', '#') as string
    const targetElement = document.querySelector(`${target}`) as HTMLElement
    window.scrollTo({
      top: targetElement?.offsetTop - 80,
      behavior: 'smooth'
    })
  }, [location])

  return (
    <Layout>
      <Hero />
      <section id='tienda'>
        <Tienda />
      </section>
      <section
        className='py-12 px-6 lg:px-8'
        id='nosotras'
      >
        <Nosotras />
      </section>
      <section
        className='pb-12 lg:mt-12 lg:pb-20'
        id='materia-prima'
      >
        <MateriaPrima />
      </section>
      <section
        className='relative lg:h-screen w-screen comunidad-item py-12 lg:py-0'
        id='comunidad'
      >
        <Comunidad />
      </section>
      <section
        className='bg-secondary'
        id='blog'
      >
        <Blog />
      </section>
      <section
        className='my-20 lg:my-32'
        id='contacto'
      >
        <Contacto />
      </section>
      <Popup />
    </Layout>
  )
}

export default Index
