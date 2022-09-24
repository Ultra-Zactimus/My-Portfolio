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
        <title>Zachary&apos;s Portfolio</title>
        <meta name="description" content="This is a showcase of my skills and projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
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
