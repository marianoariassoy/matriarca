import { languages } from '../components/data'
import { useDataContext } from '../context/useDataContext'

const Lan = () => {
  const { lan, setLan } = useDataContext()

  return (
    <div className='flex flex-col items-end lg:flex-row gap-1 lg:gap-x-2 text-xs lg:text-sm font-bold'>
      {languages.map((item, index) => (
        <div
          key={index}
          className='flex gap-x-2'
        >
          <button
            className={`transition-all uppercase ${item.code !== lan ? 'text-white/50 hover:text-white' : ''}`}
            onClick={() => setLan(item.code)}
          >
            {item.title}
          </button>
          {index < languages.length - 1 ? <span className='hidden lg:block'>/</span> : null}
        </div>
      ))}
    </div>
  )
}

export default Lan
