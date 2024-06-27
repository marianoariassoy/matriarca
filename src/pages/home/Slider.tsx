import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import Image from '../../components/Image'

interface Props {
  data: {
    id: number
    image: string
  }[]
}

const Slider = ({ data }: Props) => {
  const sliderProperties = {
    autoplay: true,
    transitionDuration: 1000,
    duration: 3000,
    indicators: true,
    arrows: false,
    infinite: true,
    pauseOnHover: false
  }

  return (
    <Fade {...sliderProperties}>
      {data.map(item => (
        <div
          key={item.id}
          className='h-screen w-screen'
        >
          <Image
            src={item.image}
            alt=''
          />
        </div>
      ))}
    </Fade>
  )
}

export default Slider
