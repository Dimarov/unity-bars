import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import Corplight from '../components/corplight'

const CorplightPage = () => (
  <Layout>
    <Header ukLink="corplight" ruLink="corplight-ru" enLink="corplight-en" />
    <Corplight />
  </Layout>
)

export default CorplightPage
