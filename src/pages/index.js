import Head from 'next/head'
import {
  About,
  Contact,
  Experience,
  Footer,
  Header,
  Nav,
  Portfolio
} from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zachary&lsquo;s Portfolio</title>
        <meta name="description" content="This is a showcase of my skills and projects." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}
