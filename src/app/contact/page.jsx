import HydrationTest from "@/components/hydrationTest";
import styles from "./contact.module.css";
import Image from "next/image";

export const metadata = {
  title: "Contact Page",
  description: "Contact description "
}

const ContactPage = () => {
  // const a = Math.random();
  // console.log(a);
  
  return (
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <Image src="/contact.png" alt="" fill className={styles.img} />
        </div>
        <div className={styles.formContainer}>
            {/* <HydrationTest /> */}
            {/* <div suppressHydrationWarning>{a}</div> */}
            <form action="" className={styles.form}>
                <input type="text" placeholder="お名前は" />
                <input type="text" placeholder="メール" />
                <input type="text" placeholder="フォーン" />
                <textarea name="" id="" cols="30" rows="10" placeholder="メッセージ"></textarea>
                <button>Send</button>
            </form>
        </div>
    </div>
  )
}

export default ContactPage