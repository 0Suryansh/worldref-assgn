import { ButtonInterface } from '@/utils/types';
import styles from './Button.module.css'
import Link from 'next/link';

const Button = ({text, filled, type, href, icon}: ButtonInterface) => {
  const filledClass = filled ? styles.filled : "";
  return (
    <Link href={href} className={styles.cardButton}>
      <span>{text}</span>
      {icon}
    </Link>
  )
}
export default Button