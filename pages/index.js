import styles from '@/styles/Home.module.css'
import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Banner from '@/components/Banner'
import { useState } from 'react'

export default function Home() {
  const [itemOne, setItemOne] = useState(0);
  const [itemTwo, setItemTwo] = useState([]);
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  return (
    <>
      <Header/>
      <main className={`${styles.main}`}>
        <Banner/>

        <div className={styles.buttonArea}>
          <Button/>
          <Button title="click me" color="red"/>

          <button onClick={() => {
            setItemOne(itemOne + 1)
            console.log(itemOne)
          }}>Button 1 Number</button>

          <button onClick={() => {
            setItemTwo([...itemTwo, "testing"])
            console.log(itemTwo)
            console.log(position)
          }}>Button 2 Array</button>
        </div>
      
        <div
          onPointerMove={e => {
            setPosition({
              x: e.clientX,
              y: e.clientY
            });
          }}
          style={{
            position: 'relative',
            width: '100vw',
            height: '50vh',
          }}>
          <div style={{
            position: 'absolute',
            backgroundColor: 'red',
            borderRadius: '50%',
            transform: `translate(${position.x}px, ${position.y}px)`,
            left: 0,
            top: -450,
            width: 20,
            height: 20,
          }} />
        </div>
      </main>
      <Footer/>
    </>
  )
}
