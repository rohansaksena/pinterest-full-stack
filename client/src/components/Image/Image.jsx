import {IKImage} from 'imagekitio-react'

function Image({path, alt, className, w, h}) {
  return (
    <IKImage 
          urlEndpoint={import.meta.env.VITE_URL_IK_PRESENTER} 
          path={path}
          transformation={[
            {
              height:h,
              width:w
            }
          ]}
          alt={alt}
          loading="lazy"
          className={className}
          lqip={{active:true, quality: 20}}
        />
  )
}

export default Image