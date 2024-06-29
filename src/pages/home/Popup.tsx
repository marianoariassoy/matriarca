import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useDataContext } from '../../context/useDataContext'
import { Close } from '../../components/icons'
import { dataContact } from '../../components/data'
import BeatLoader from 'react-spinners/BeatLoader'

const Popup = () => {
  const { lan } = useDataContext()
  const [sended, setSended] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data: { email: string }) => {
    setSending(true)

    axios.post(' ', { ...data }).then(data => {
      if (data.data === 'success') {
        setSended(true)
        setSending(false)
      } else {
        setError(true)
        setSending(false)
      }
    })
  }

  const Error = () => {
    return <div className='text-center text-sm font-medium mt-3 text-black/50'>{dataContact[lan].required}</div>
  }

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
      className='fade-in-delay w-full h-full fixed top-0 left-0 z-50 bg-primary-opacity flex items-center justify-center p-6'
      id='popup'
    >
      <div className='bg-white w-full max-w-3xl shadow-lg grid lg:grid-cols-2 relative text-sm lg:text-base'>
        <div className='aspect-video lg:aspect-[1/1.1]'>
          <img
            src='https://images.pexels.com/photos/4456815/pexels-photo-4456815.jpeg?auto=compress&cs=tinysrgb&w=800'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex flex-col gap-y-3 p-8'>
          <div className='flex-1 uppercase font-bold text-center flex items-center justify-center'>
            <span>{texts[lan].text}</span>
          </div>
          <div className='flex items-end'>
            {error ? (
              <div className='font-bold text-center px-8'>{dataContact[lan].error}</div>
            ) : sended ? (
              <div className='font-bold text-center px-8'>{dataContact[lan].thanks}</div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='w-full  flex flex-col gap-y-6 items-center justify-center'
              >
                <div className='w-full'>
                  <input
                    className='border-b-2 text-sm border-primary w-full p-2 font-medium text-center placeholder-current'
                    placeholder={texts[lan].textfield}
                    {...register('email', { required: true })}
                  />
                  {errors.email && <Error />}
                </div>
                <div>
                  {sending ? (
                    <BeatLoader />
                  ) : (
                    <button className='font-bold rounded-full py-3 px-8 transition-colors border border-primary tracking-widest bg-primary-hover text-primary hover:text-white text-sm'>
                      {texts[lan].buttomtext}
                    </button>
                  )}
                </div>
              </form>
            )}
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
