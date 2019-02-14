import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import Barsmmfo from '../components/barsmmfo'

const BarsmmfoPage = () => (
  <Layout>
    <Header ukLink="barsmmfo" ruLink="barsmmfo-ru" enLink="barsmmfo-en" />
    <Barsmmfo />
  </Layout>
)

export default BarsmmfoPage
