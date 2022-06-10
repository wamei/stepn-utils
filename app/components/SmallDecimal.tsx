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
          .<span style={{ fontSize: '.875em' }}>{splited[1] || '0'}</span>
        </>
      )}
    </>
  )
}
