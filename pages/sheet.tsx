import Head from 'next/head'
import { NextPage } from 'next'
import { title } from '@/data/title'

const Sheet: NextPage = () => (
  <div>
    <Head>
      <title>{title} - 砂糖婚姻届け</title>
      <meta name="description" content={title} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="flex flex-col items-center"></main>
  </div>
)

export default Sheet
