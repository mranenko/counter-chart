import { ReactNode } from 'react'
import styles from './Page.module.css'

interface PageProps {
  children: ReactNode
}

const Page = ({ children, }: PageProps) => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export { Page }
