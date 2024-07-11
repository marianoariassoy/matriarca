import { useEffect } from 'react'
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
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Matriarca'
    const header = document.querySelector('header')
    header?.classList.remove('sticky')
    header?.classList.add('fixed')
    return () => {
      header?.classList.remove('fixed')
      header?.classList.add('sticky')
    }
  }, [])

  return (
    <Layout>
      <Hero />
      <Tienda />
      <Nosotras />
      <MateriaPrima />
      <Comunidad />
      <Blog />
      <Contacto />
      <Popup />
    </Layout>
  )
}

export default Index
