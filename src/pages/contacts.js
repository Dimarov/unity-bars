import React from 'react'
import Header from '../components/header'
import Layout from '../components/layout'
import Contacts from '../components/contacts'

const ContactsPage = () => (
  <Layout>
    <Header ukLink="contacts" ruLink="contacts-ru" enLink="contacts-en" />
    <Contacts />
  </Layout>
)

export default ContactsPage
