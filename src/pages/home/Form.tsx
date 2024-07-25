import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import BeatLoader from 'react-spinners/BeatLoader'
import { dataContact } from '../../components/data'

const Form = ({ lan }) => {
  type Inputs = {
    name: string
    city: string
    email: string
    location: string
    phone: string
    country: string
    message: string
  }

  const [sended, setSended] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data: Inputs) => {
    setSending(true)

    //sales@matriarca.org

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
    return <div className='text-sm font-medium mt-3 text-black/50'>{dataContact[lan].required}</div>
  }

  return (
    <>
      {error ? (
        <span className='text-2xl font-bold'>{dataContact[lan].error}</span>
      ) : sended ? (
        <span className='text-3xl font-bold'>{dataContact[lan].thanks}</span>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid grid-cols-2 gap-4 text-sm lg:text-base'>
            <div>
              <input
                className='w-full border-b border-primary h-11 px-4 bg-transparent placeholder-current font-medium focus:outline-none focus:border-gray-400'
                placeholder={dataContact[lan].name}
                {...register('name', { required: true })}
              />
              {errors.name && <Error />}
            </div>
            <div>
              <input
                className='w-full border-b border-primary h-11 px-4 bg-transparent placeholder-current font-medium focus:outline-none focus:border-gray-400'
                placeholder={dataContact[lan].city}
                {...register('city')}
              />
            </div>
            <div>
              <input
                className='w-full border-b border-primary h-11 px-4 bg-transparent placeholder-current font-medium focus:outline-none focus:border-gray-400'
                placeholder={dataContact[lan].email}
                {...register('email', { required: true })}
              />
              {errors.email && <Error />}
            </div>
            <div>
              <input
                className='w-full border-b border-primary h-11 px-4 bg-transparent placeholder-current font-medium focus:outline-none focus:border-gray-400'
                placeholder={dataContact[lan].country}
                {...register('country')}
              />
            </div>
            <div>
              <input
                className='w-full border-b border-primary h-11 px-4 bg-transparent placeholder-current font-medium focus:outline-none focus:border-gray-400'
                placeholder={dataContact[lan].phone}
                {...register('phone', { required: true })}
              />
              {errors.phone && <Error />}
            </div>
            <div>
              <input
                className='w-full border-b border-primary h-11 px-4 bg-transparent placeholder-current font-medium focus:outline-none focus:border-gray-400'
                placeholder={dataContact[lan].subject}
                {...register('subject')}
              />
            </div>
          </div>
          <textarea
            className='w-full border border-t-0 border-primary placeholder-current font-medium bg-transparent h-52 p-4 mt-10 focus:outline-none focus:border-gray-400'
            placeholder={dataContact[lan].message}
            {...register('message')}
          />
          <div className='flex justify-between mt-8 items-center'>
            <div className='font-medium'>{dataContact[lan].phone.slice(0, -1)}: +54 9 1159796735</div>
            {sending ? (
              <BeatLoader />
            ) : (
              <button
                type='submit'
                className='text-primary font-bold rounded-full py-3 px-8 transition-colors border border-primary tracking-widest bg-primary-hover hover:text-white'
              >
                {dataContact[lan].send}
              </button>
            )}
          </div>
        </form>
      )}
    </>
  )
}

export default Form
