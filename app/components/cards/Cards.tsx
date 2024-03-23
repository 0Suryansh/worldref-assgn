import { CardInterface } from "@/utils/types"
import Button from "./Button"
import styles from './Card.module.css'

const Card = ({body,id, btn,title,image,indicator, subtitle}: CardInterface) => {
  return (
    <article className={`${styles.card}`}>
      {indicator &&
        <small className={styles.indicator}>{indicator}</small>
      }

      {image &&
        <img src={image} alt="Random Image" className={styles.image} />
      }
      <div style={{marginBottom: 20}}>
        <h3 className={styles.title}>{title}</h3>
        {subtitle &&
          <small className={styles.subtitle}>{subtitle}</small>
        }
      </div>
      <p className={styles.body} style={{marginBottom: 10}}>{body}</p>
      <Button
        filled={btn.filled}
        type={btn.type}
        text={btn.text}
        href={`${btn.href}/blog-${id}`}
        icon={btn.icon}
      />
    </article>
  )
}
export default Card