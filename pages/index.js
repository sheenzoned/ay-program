import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Cebu City SDA Youth</title>
        <link rel="icon" href="/ay.png" />
      </Head>

      <main>
        <Header title="Join us in our AY Fellowship!" />
        <p className="description">
          April 9, 2022 <br/>
          3:00 PM - 6:00 PM <br/>
          Cebu City SDA Church
        </p>
      </main>

      <Footer />
    </div>
  )
}
