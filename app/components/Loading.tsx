import React, { FC } from 'react'

type LoadingProps = {
  message?: string
  backgroundColor?: string
}

export const Loading: FC<LoadingProps> = ({ message, backgroundColor }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 999999,
        backgroundColor: backgroundColor ?? '#fff',
      }}
      className='d-flex justify-content-center align-items-center'
    >
      <div className='d-flex justify-content-center align-items-center'>
        <img src='/stepn-utils/stepn.svg' />
        <strong className='fs-1'>{message}</strong>
      </div>
    </div>
  )
}
