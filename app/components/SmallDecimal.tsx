import { FC } from 'react'

type SmallDecimalProps = {
  value: string
}

export const SmallDecimal: FC<SmallDecimalProps> = ({ value }) => {
  const splited = value.split('.')
  return (
    <>
      {splited[0]}
      {splited[1] !== undefined && (
        <>
          .
          <small className='d-inline-block' style={{ transform: 'scale(0.9)' }}>
            {splited[1] || '0'}
          </small>
        </>
      )}
    </>
  )
}
