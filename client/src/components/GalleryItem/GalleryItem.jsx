import { Link } from 'react-router'
import './GalleryItem.css'
import Image from '../Image/Image'

function GalleryItem({item}) {
  return (
    <div className='galleryItem' style={{gridRowEnd: `span ${Math.ceil(item.height/100)}`}}>
        <Image path={item.media} w={372} h={(372*item.height)/item.width}/>
        <Link to={`/pin/${item.id}`} className="overlay"/>
        <button className='saveButton'>Save</button>
        <div className="overlayIcons">
          <button>
            <Image path="/general/share.svg"/>
          </button>
          <button>
            <Image path="/general/more.svg"/>
          </button>
        </div>
    </div>
  )
}

export default GalleryItem