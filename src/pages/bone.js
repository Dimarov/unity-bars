import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import Bone from '../components/bone'

const BonePage = () => (
  <Layout>
    <Header ukLink="bone" ruLink="bone-ru" enLink="bone-en" />
    <Bone />
  </Layout>
)

export default BonePage
