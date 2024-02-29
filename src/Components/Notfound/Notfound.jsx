import React from 'react'
import error from '../../assessts/error.svg'
import { Helmet } from 'react-helmet'
export default function Notfound() {
  return (
    <div className='py-5 text-center'>
      <Helmet>
        <title>NotFound</title>
        <meta name="description" content="Helmet application" />
       </Helmet>
      <img src={error} alt="error" className='w-50 mt-5' />
    </div>
  )
}
