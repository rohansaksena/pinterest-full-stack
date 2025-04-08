import Comments from '../../components/Comments/Comments'
import Image from '../../components/Image/Image'
import PostInteraction from '../../components/PostInteractions/PostInteraction'
import './PostPage.css'
import { Link } from 'react-router'

function PostPage() {
  return (
    <div className='postPage'>
      <Image  path="general/create.svg" alt="Create" />
      <div className='postContainer'>
        <div className='postImg'>
          <Image path="/pins/pin1.jpeg" alt="" w={736}/>
        </div>
      <div className='postDetails'>
        <PostInteraction/>
        <Link to="/john" className="postUser">
          <Image path="/general/noAvatar.png"/>
          <span>John Doe</span>
        </Link>
        <Comments/>
      </div>
    </div>
  </div>
  )
}

export default PostPage