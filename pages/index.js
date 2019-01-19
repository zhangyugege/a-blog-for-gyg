
import Link from 'next/link'
import Page from '../component/main.js'
import Head from 'next/head'

const Index = () => (
  <Page>
    <Head>
      <title>guoygang</title>
    </Head>
    <section className="body">
      <div className="main">
        <h2 className="title">guoygang</h2>
        <nav>
          <Link prefetch href="/blogs"><a>Blogs</a></Link>
          <a href="#">Vulnerability</a>
          <a href="#">Email</a>
        </nav>
      </div>
    </section>

    <style jsx>{`
    
      .body {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: -1;
      }

      .main {
        flex: none;
        text-align: center;
      }

      .title {
        font-size: 16px;
      }

      nav {
        margin-top: 20px;
      }

      a {
        display: inline-block;
        margin: 0 15px;
        text-decoration: none;
      }

    `}</style>
  </Page>



)

export default Index