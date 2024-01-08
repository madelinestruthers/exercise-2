import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Banner from "@/components/Banner"
import styles from '@/styles/About.module.css'
import Counter from "@/components/Counter"

export default function About() {
    return(
        <>
            <Header/>
            <main className={styles.main}>
                <Banner color="green"/>
                <Counter/>
            </main>
            <Footer/>
        </>
    )
}