import { iterateScore } from '@/utils/iterateScore'
import styles from './CommentSwiper.module.css'

const CommentSwiper = ({ comments }) => {
  return (
    <div className={styles.commentSwiper}>
      <div>
        <h3 className='font-berkshire mb-6'>Other riders opinions</h3>
        {comments.map(comment => (
          <article key={comment.id} className={`${styles.commentCard} flex flex-col`}>
            <header className={`${styles.commentHeader} flex justify-between items-center`}>
              <div className='flex gap-2'>
                <img src={comment.user.avatar} alt='User avatar' />
                <div>
                  <h4>{comment.user.name}</h4>
                  <p>{comment.date}</p>
                </div>
              </div>
              <div className='flex'>
                {iterateScore(comment.score)}
              </div>
            </header>
            <p>{comment.body}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default CommentSwiper
