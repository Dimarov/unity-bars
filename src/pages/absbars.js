import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import Absbars from '../components/absbars'

const AbsbarsPage = () => (
  <Layout>
    <Header ukLink="absbars" ruLink="absbars-ru" enLink="absbars-en" />
    <Absbars />
  </Layout>
)

export default AbsbarsPage
