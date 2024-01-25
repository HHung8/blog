import Image from 'next/image'
import styles from './about.module.css'

export const metadata = {
  title: "About Page",
  description: "About description "
}

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>グエンフーフンについて</h2>
          <h1 className={styles.title}>私たちは。。より大きく。より大胆で。より勇敢で、より優れたデジタルアイデアを生み出します</h1>
          <p className={styles.desc}>私たちは、より大きく、より大胆で、より勇敢で、より優れたデジタル アイデアを生み出します。私たちは良いアイデアを信じています 柔軟性と正確さ 私たちは世界最高の特別チームです 最高のコンサルティング</p>
          <div className={styles.boxes}>
              <div className={styles.box}>
                  <h1>10 K+</h1>
                  <p>経験年数</p>
              </div>
              <div className={styles.box}>
                  <h1>10 K+</h1>
                  <p>経験年数</p>
              </div>
              <div className={styles.box}>
                  <h1>10 K+</h1>
                  <p>経験年数</p>
              </div> 
          </div>
      </div>
      <div className={styles.imgContainer}>
          <Image 
            src="/about.png"
            alt='About Image'
            fill
            className={styles.img}
          />
      </div>
    </div>
  )
}

export default AboutPage