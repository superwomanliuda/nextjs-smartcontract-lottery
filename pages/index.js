import Head from "next/head"
//import Image from "next/image" run yarn next export 报错 image optimazation using the default loader is not compatible
import styles from "../styles/Home.module.css"
//import MannualHeader from "../components/MannualHeader"
import Header from "../components/Header"
import LotteryEntrance from "../components/LotteryEntrance"

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>DJ smart contract lottery</title>
                <meta name="description" content="dj is studying nextjs" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/*<MannualHeader />*/}
            <Header />
            <LotteryEntrance />
            --------------------------------------bottom------------------------------
        </div>
    )
}
