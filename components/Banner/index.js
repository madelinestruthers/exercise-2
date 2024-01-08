import Image from "next/image"
import styles from './Banner.module.css'

export default function Banner({
    color="white"
}) {
    return(
        <div className={styles.container} style={{backgroundColor: color}}>
            <Image src={"/images/bcit-logo.png"} alt="bcit logo" height={70} width={70}/>
        </div>
    )
}