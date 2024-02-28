import styles from './ProfileMedia.module.css'

const ProfileMedia = ({ profile }) => {
  return (
    <div className={styles.profileSocial}>
      <h4 className='font-berkshire'>Social networks</h4>
      <div className='mt-2'>
        <p className='flex justify-between max-w-40'><span>Web: </span>{profile?.website}</p>
        <p className='flex justify-between max-w-40'><span>Facebook: </span>{profile?.facebook}</p>
        <p className='flex justify-between max-w-40'><span>Instagram: </span>{profile?.instagram}</p>
        <p className='flex justify-between max-w-40'><span>Twitter: </span>{profile?.twitter}</p>
        <p className='flex justify-between max-w-40'><span>Youtube: </span>{profile?.youtube}</p>
      </div>
    </div>
  )
}

export default ProfileMedia
