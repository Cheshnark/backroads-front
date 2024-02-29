import styles from './ProfileMedia.module.css'

import { useState } from 'react'
import { PencilLine, Check, X } from 'lucide-react'

const ProfileMedia = ({ profile, tempSocial, setTempSocial }) => {
  const [showEditSocial, setShowEditSocial] = useState(false)

  const handleClick = () => {
    setTempSocial({
      website: null,
      facebook: null,
      instagram: null,
      twitter: null,
      youtube: null
    })
    setShowEditSocial(false)
  }

  const handleChange = (e) => {
    const key = e.target.id
    const value = e.target.value

    setTempSocial({ ...tempSocial, [key]: value })
  }

  return (
    <div className={styles.profileSocial}>
      <div className='flex items-center gap-2'>
        <h4 className='font-berkshire'>Social networks</h4>
        {!showEditSocial
          ? (
            <PencilLine onClick={() => setShowEditSocial(true)} />)
          : (
            <div className='flex items-center gap-2'>
              <Check onClick={() => setShowEditSocial(false)} />
              <X onClick={handleClick}
              />
            </div>)}
      </div>
      <div className='mt-2'>
        {!showEditSocial
          ? (<div>
            <p className='flex justify-between max-w-40'><span>Web: </span>{tempSocial.website || profile?.website}</p>
            <p className='flex justify-between max-w-40'><span>Facebook: </span>{tempSocial.facebook || profile?.facebook}</p>
            <p className='flex justify-between max-w-40'><span>Instagram: </span>{tempSocial.instagram || profile?.instagram}</p>
            <p className='flex justify-between max-w-40'><span>Twitter: </span>{tempSocial.twitter || profile?.twitter}</p>
            <p className='flex justify-between max-w-40'><span>Youtube: </span>{tempSocial.youtube || profile?.youtube}</p>
          </div>)
          : (<div className='flex flex-col gap-1 w-2/5'>
            <input onChange={(e) => handleChange(e)} id='website' type='text' placeholder='Website' value={tempSocial.website || profile?.website} />
            <input onChange={(e) => handleChange(e)} id='facebook' type='text' placeholder='Facebook' value={tempSocial.facebook || profile?.facebook} />
            <input onChange={(e) => handleChange(e)} id='instagram' type='text' placeholder='Instagram' value={tempSocial.instagram || profile?.instagram} />
            <input onChange={(e) => handleChange(e)} id='twitter' type='text' placeholder='Twitter' value={tempSocial.twitter || profile?.twitter} />
            <input onChange={(e) => handleChange(e)} id='youtube' type='text' placeholder='Youtube' value={tempSocial.youtube || profile?.youtube} />
          </div>)}
      </div>
    </div>
  )
}

export default ProfileMedia
