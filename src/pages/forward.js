import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import Forward from '../components/forward'

const ForwardPage = () => (
  <Layout>
    <Header ukLink="forward" ruLink="forward-ru" enLink="forward-en" />
    <Forward />
  </Layout>
)

export default ForwardPage
