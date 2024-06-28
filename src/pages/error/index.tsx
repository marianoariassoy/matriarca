import Layout from '../../layout/Layout'
import { useDataContext } from '../../context/useDataContext'

const Index = () => {
  const { lan } = useDataContext()

  const texts = {
    es: {
      text: 'Página no encontrada.'
    },
    en: {
      text: 'Page not found.'
    }
  }

  return (
    <Layout>
      <section className='px-6 text-center text-2xl font-bold text-primary pt-64'>{texts[lan].text}</section>
    </Layout>
  )
}

export default Index
