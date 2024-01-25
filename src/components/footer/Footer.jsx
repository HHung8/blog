import styles from "./footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>グエンフーフン</div>
        <div className={styles.text}>
          グエンクリエイティブ思考代理店の著作権はすべて留保されます
        </div>
    </div>
  )
}

export default Footer