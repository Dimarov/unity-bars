import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import Contacts from '../components/contacts'

const ContactsPage = () => (
  <Layout>
    <Header ukLink="company" ruLink="products" enLink="news" />
    <Contacts />
  </Layout>
)

export default ContactsPage
