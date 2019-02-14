import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import Electronicarchive from '../components/electronicarchive'

const ElectronicarchivePage = () => (
  <Layout>
    <Header ukLink="electronicarchive" ruLink="electronicarchive-ru" enLink="electronicarchive-en" />
    <Electronicarchive />
  </Layout>
)

export default ElectronicarchivePage
