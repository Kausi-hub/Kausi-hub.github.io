import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="text-2xl leading-6 font-extrabold tracking-tight text-gray-900 sm:text-2xl sm:leading-6 md:text-2xl md:leading-6 dark:text-gray-100">
      {children}
    </h1>
  )
}
