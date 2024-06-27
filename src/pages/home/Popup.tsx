import { useDataContext } from '../../context/useDataContext'
import { Close } from '../../components/icons'

const Popup = () => {
  const { lan } = useDataContext()

  const texts = {
    es: {
      text: 'Resgistrate para recibir todas nuestras novedades',
      textfield: 'CORREO ELECTRONICO',
      buttomtext: 'SUBSCRIBIRME'
    },
    en: {
      text: 'Register to receive all our news',
      textfield: 'YOUR EMAIL',
      buttomtext: 'SUBSCRIBE'
    }
  }

  const closePopup = () => {
    document.getElementById('popup')!.style.display = 'none'
  }

  return (
    <div
      className='fade-in w-full h-full fixed top-0 left-0 z-40 bg-primary-opacity flex items-center justify-center p-6'
      id='popup'
    >
      <div className='bg-white w-full max-w-3xl shadow-lg grid lg:grid-cols-2 relative text-sm lg:text-base'>
        <div className='aspect-video lg:aspect-[3/3.5]'>
          <img
            src='https://images.pexels.com/photos/4456815/pexels-photo-4456815.jpeg?auto=compress&cs=tinysrgb&w=800'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex flex-col gap-y-3 p-8'>
          <div className='flex-1 uppercase font-bold text-center flex items-center justify-center'>
            <span>{texts[lan].text}</span>
          </div>
          <div className='flex items-end '>
            <div className='w-full flex flex-col gap-y-6 items-center'>
              <input
                type='text'
                placeholder={texts[lan].textfield}
                className='border-b-2 border-primary w-full p-2 font-medium text-center placeholder-current'
              />
              <button className='font-bold rounded-full py-3 px-8 transition-colors border border-primary tracking-widest bg-primary text-white hover:bg-white text-primary-hover text-sm'>
                {texts[lan].buttomtext}
              </button>
            </div>
          </div>
        </div>
        <button
          className='absolute top-6 right-6 font-bold text-2xl hover:text-black'
          onClick={closePopup}
        >
          <Close />
        </button>
      </div>
    </div>
  )
}

export default Popup
