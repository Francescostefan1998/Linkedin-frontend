import React from 'react'
import { CreatePost } from './StartPost/CreatePost'
import { TypeButtons } from './StartPost/TypeButtons'
import '../../css/main-content/start-post.css'

export const StartPost = () => {
  return (
    <div className='start-post'>
        <CreatePost />
        <TypeButtons />
    </div>
  )
}
